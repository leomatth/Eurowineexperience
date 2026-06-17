from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import logging
import json
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, field_validator
from typing import List
import uuid
from datetime import datetime, timezone
from contextlib import asynccontextmanager
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError


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
client = None
db = None

@asynccontextmanager
async def lifespan(app):
    global client, db
    if mongo_url:
        client = AsyncIOMotorClient(mongo_url)
        db = client[os.environ.get('DB_NAME', 'eurowine')]
    yield
    if client:
        client.close()

# Create the main app
app = FastAPI(docs_url=None, redoc_url=None, lifespan=lifespan)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str = Field(..., min_length=1, max_length=200)

    @field_validator('client_name')
    @classmethod
    def validate_client_name(cls, v):
        cleaned = re.sub(r'[^\w\s.\-@]', '', v.strip())
        if not cleaned:
            raise ValueError('Invalid client name')
        return cleaned


class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=120)
    email: str = Field(..., min_length=5, max_length=200)
    phone: str = Field(default='', max_length=50)
    package: str = Field(default='', max_length=200)
    message: str = Field(..., min_length=10, max_length=3000)

    @field_validator('name', 'phone', 'package', mode='before')
    @classmethod
    def sanitize_text_fields(cls, value):
        if value is None:
            return ''
        cleaned = re.sub(r'[^\w\s.,:/()+\-@#]', '', str(value).strip())
        return cleaned

    @field_validator('email')
    @classmethod
    def validate_email(cls, value):
        email = value.strip().lower()
        if not re.match(r'^[^\s@]+@[^\s@]+\.[^\s@]+$', email):
            raise ValueError('Invalid email address')
        return email

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
        raise HTTPException(status_code=503, detail="Database not connected")
    
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
        raise HTTPException(status_code=503, detail="Database not connected")
    
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(50)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks


def send_contact_email(payload: ContactRequest):
    resend_api_key = os.environ.get('RESEND_API_KEY', '').strip()
    from_email = os.environ.get('RESEND_FROM_EMAIL', 'geral@eurowinexp.com').strip()
    to_email = os.environ.get('CONTACT_TO_EMAIL', 'geral@eurowinexp.com').strip()

    if not resend_api_key:
        raise RuntimeError('Resend API key is missing')

    subject_package = payload.package if payload.package else 'Contato Geral'

    text_body = f"""
Nova mensagem enviada pelo formulario do site EuroWine Experience.

Nome: {payload.name}
Email: {payload.email}
Telefone: {payload.phone or 'Nao informado'}
Pacote: {payload.package or 'Contato Geral'}

Mensagem:
{payload.message}
""".strip()

    html_body = f"""
<h2>Nova mensagem - EuroWine Experience</h2>
<p><strong>Nome:</strong> {payload.name}</p>
<p><strong>Email:</strong> {payload.email}</p>
<p><strong>Telefone:</strong> {payload.phone or 'Nao informado'}</p>
<p><strong>Pacote:</strong> {payload.package or 'Contato Geral'}</p>
<p><strong>Mensagem:</strong></p>
<p>{payload.message.replace(chr(10), '<br/>')}</p>
""".strip()

    resend_payload = {
        'from': from_email,
        'to': [to_email],
        'subject': f'Nova mensagem - {subject_package}',
        'reply_to': payload.email,
        'text': text_body,
        'html': html_body,
    }

    request = Request(
        'https://api.resend.com/emails',
        data=json.dumps(resend_payload).encode('utf-8'),
        headers={
            'Authorization': f'Bearer {resend_api_key}',
            'Content-Type': 'application/json',
        },
        method='POST',
    )

    try:
        with urlopen(request, timeout=20) as response:
            if response.status < 200 or response.status >= 300:
                raise RuntimeError('Resend request failed')
    except HTTPError as exc:
        raise RuntimeError(f'Resend HTTP error: {exc.code}') from exc
    except URLError as exc:
        raise RuntimeError('Resend network error') from exc


@api_router.post('/contact')
async def submit_contact_form(payload: ContactRequest):
    try:
        send_contact_email(payload)
        return {'success': True, 'message': 'Mensagem enviada com sucesso'}
    except RuntimeError as exc:
        logger.error('Contact form configuration error: %s', str(exc))
        raise HTTPException(status_code=502, detail='Failed to send email') from exc
    except Exception as exc:
        logger.exception('Unexpected error while sending contact email')
        raise HTTPException(status_code=500, detail='Unexpected server error') from exc

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get(
        'CORS_ORIGINS',
        'https://eurowinexp.com,https://www.eurowinexp.com,http://localhost:3000,http://127.0.0.1:3000'
    ).split(','),
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)
