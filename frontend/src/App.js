import "@/App.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "@/components/ui/sonner";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ExperienciasPage from "@/pages/ExperienciasPage";
import HospedagemPage from "@/pages/HospedagemPage";
import AboutPage from "@/pages/AboutPage";

/** Scroll to top on route change; scroll to hash section when navigating via state */
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollManager />
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/experiencias" element={<ExperienciasPage />} />
              <Route path="/hospedagem" element={<HospedagemPage />} />
              <Route path="/sobre" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
