import { Wine, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { companyInfo } from '../data/mockData';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Mock newsletter subscription
    toast({
      title: "Inscrição realizada!",
      description: "Você receberá nossas novidades e ofertas exclusivas.",
    });
    setEmail('');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wine className="h-8 w-8 text-amber-400" strokeWidth={2.5} />
              <div>
                <h3 className="text-2xl font-bold">EuroWineExperience</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={companyInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-red-700 p-3 rounded-lg transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={companyInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-red-700 p-3 rounded-lg transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={companyInfo.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-red-700 p-3 rounded-lg transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('packages')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.nav.packages}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-300 hover:text-white transition-colors break-all">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Lisboa, Portugal
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">{t.footer.newsletter}</h4>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {t.footer.newsletterText}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.emailPlaceholder}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold"
              >
                {t.footer.subscribe}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} We Love Portugal. {t.footer.rights}
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">
                Política de Privacidade
              </button>
              <button className="hover:text-white transition-colors">
                Termos de Uso
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
