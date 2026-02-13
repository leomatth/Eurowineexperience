import { ChevronRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { heroImages, companyInfo } from '../data/mockData';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/\+/g, '')}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImages[0]}
          alt="Portuguese Vineyards"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/80 via-amber-900/70 to-green-900/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-white text-sm font-medium">Especialistas em Enoturismo Premium</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            {t.hero.title}
          </h1>
          
          <h2 className="text-2xl md:text-4xl text-amber-200 font-semibold mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t.hero.subtitle}
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button
              onClick={() => scrollToSection('packages')}
              size="lg"
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              {t.hero.cta}
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              onClick={openWhatsApp}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-6 text-lg font-semibold backdrop-blur-sm bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {t.hero.ctaSecondary}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">8+</div>
              <div className="text-white/80 text-sm md:text-base">Experiências Premium</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">6</div>
              <div className="text-white/80 text-sm md:text-base">Hotéis Selecionados</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80 text-sm md:text-base">Satisfação Garantida</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
