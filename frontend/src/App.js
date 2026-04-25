import "@/App.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ExperienciasPage from "@/pages/ExperienciasPage";
import HospedagemPage from "@/pages/HospedagemPage";
import AboutPage from "@/pages/AboutPage";
import Pacote3DiasPage from "@/pages/Pacote3DiasPage";
import Alentejo1DiaPage from "@/pages/Alentejo1DiaPage";
import Lisboa1DiaPage from "@/pages/Lisboa1DiaPage";

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
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/experiencias" element={<ExperienciasPage />} />
              <Route path="/hospedagem" element={<HospedagemPage />} />
              <Route path="/sobre" element={<AboutPage />} />
              <Route path="/pacote-3-dias" element={<Pacote3DiasPage />} />
              <Route path="/alentejo-1-dia" element={<Alentejo1DiaPage />} />
              <Route path="/lisboa-1-dia" element={<Lisboa1DiaPage />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
          <Analytics />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
