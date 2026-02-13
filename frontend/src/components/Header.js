import { useState } from 'react';
import { Wine, Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const languages = [
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Wine className="h-8 w-8 text-red-700" strokeWidth={2.5} />
            <div>
              <h1 className="text-2xl font-bold text-red-800">EuroWineExperience</h1>
              <p className="text-xs text-gray-600">Enoturismo Premium</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-red-700 transition-colors font-medium">
              {t.nav.home}
            </button>
            <button onClick={() => scrollToSection('packages')} className="text-gray-700 hover:text-red-700 transition-colors font-medium">
              {t.nav.packages}
            </button>
            <button onClick={() => scrollToSection('accommodations')} className="text-gray-700 hover:text-red-700 transition-colors font-medium">
              {t.nav.accommodations}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-red-700 transition-colors font-medium">
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-red-700 transition-colors font-medium">
              {t.nav.contact}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-red-700 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">{languages.find(l => l.code === language)?.flag}</span>
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left hover:bg-red-50 transition-colors flex items-center gap-2 ${
                        language === lang.code ? 'bg-red-50 text-red-700' : 'text-gray-700'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span className="text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button onClick={() => scrollToSection('contact')} className="bg-red-700 hover:bg-red-800">
              {t.hero.cta}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-red-700 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-red-700 transition-colors font-medium">
                {t.nav.home}
              </button>
              <button onClick={() => scrollToSection('packages')} className="text-left text-gray-700 hover:text-red-700 transition-colors font-medium">
                {t.nav.packages}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-red-700 transition-colors font-medium">
                {t.nav.about}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-red-700 transition-colors font-medium">
                {t.nav.contact}
              </button>
              
              {/* Mobile Language Selector */}
              <div className="flex gap-2 pt-2 border-t border-gray-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg border transition-colors ${
                      language === lang.code 
                        ? 'border-red-700 bg-red-50 text-red-700' 
                        : 'border-gray-200 text-gray-700 hover:border-red-700'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                  </button>
                ))}
              </div>

              <Button onClick={() => scrollToSection('contact')} className="bg-red-700 hover:bg-red-800 w-full">
                {t.hero.cta}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
