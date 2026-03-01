from fastapi import FastAPI, APIRouter
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone
import zipfile
import tempfile


ROOT_DIR = Path(__file__).parent.parent
# Note: .env file should be in the api/ folder or root  
env_path = Path(__file__).parent / '.env'
if env_path.exists():
    load_dotenv(env_path)
else:
    load_dotenv()  # Try root folder

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ.get('MONGO_URL', '')
if mongo_url:
    client = AsyncIOMotorClient(mongo_url)
    db = client[os.environ.get('DB_NAME', 'eurowine')]
else:
    db = None

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add root route directly to app for easier access
@app.get("/")
async def root():
    return {"message": "API is running", "docs": "/docs", "api": "/api"}

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def api_root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    if not db:
        return {"error": "Database not connected"}
    
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    if not db:
        return []
    
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.get("/download-source")
async def download_source_code():
    """
    Generate and return a ZIP file containing the complete source code.
    This creates a temporary ZIP with frontend and backend code.
    """
    try:
        # Create a temporary file for the ZIP
        temp_zip = tempfile.NamedTemporaryFile(delete=False, suffix='.zip')
        zip_path = temp_zip.name
        temp_zip.close()
        
        # Create ZIP file with source code
        with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
            # Add frontend files
            frontend_base = Path(ROOT_DIR / 'frontend')
            for folder in ['src', 'public']:
                folder_path = frontend_base / folder
                if folder_path.exists():
                    for file_path in folder_path.rglob('*'):
                        if file_path.is_file():
                            arcname = f'frontend/{file_path.relative_to(frontend_base)}'
                            zipf.write(file_path, arcname)
            
            # Add frontend config files
            for config_file in ['package.json', 'craco.config.js', 'tailwind.config.js']:
                config_path = frontend_base / config_file
                if config_path.exists():
                    zipf.write(config_path, f'frontend/{config_file}')
            
            # Add API files
            api_base = Path(ROOT_DIR / 'api')
            for file_name in ['index.py', 'requirements.txt']:
                file_path = api_base / file_name
                if file_path.exists():
                    zipf.write(file_path, f'api/{file_name}')
            
            # Add root configuration files
            for config_file in ['package.json', 'vercel.json', 'README.md']:
                config_path = ROOT_DIR / config_file
                if config_path.exists():
                    zipf.write(config_path, config_file)
        
        # Return the ZIP file
        return FileResponse(
            path=zip_path,
            media_type='application/zip',
            filename='eurowineexperience-source.zip',
            background=None  # File will be deleted after response
        )
    except Exception as e:
        logger.error(f"Error creating source code ZIP: {str(e)}")
        return {"error": "Failed to generate source code package"}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    if mongo_url:
        client.close()
