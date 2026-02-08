import { useState } from 'react';
import { Wine, MapPin, Clock, Users, ChevronDown, ChevronUp, Castle, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { packages } from '../data/mockData';

const PackagesSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [expandedPackage, setExpandedPackage] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'wine':
        return <Wine className="h-6 w-6" />;
      case 'castle':
        return <Castle className="h-6 w-6" />;
      case 'sparkles':
        return <Sparkles className="h-6 w-6" />;
      default:
        return <Wine className="h-6 w-6" />;
    }
  };

  const handleBooking = (pkg) => {
    setSelectedPackage(pkg);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-amber-50 via-white to-red-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">Experiências Premium</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.packages.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.packages.subtitle}
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
            >
              {/* Package Image */}
              <div className="relative h-64 overflow-hidden group">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-red-700 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  {pkg.currency}{pkg.priceFrom}-{pkg.priceTo}
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                    {getIcon(pkg.icon)}
                  </div>
                  <div>
                    <div className="font-semibold">{pkg.location}</div>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">{pkg.name}</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  {pkg.tagline}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-gray-700 mb-4">{pkg.shortDescription}</p>

                {/* Quick Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4 text-red-700" />
                    <span>{t.packages.duration}: {pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-red-700" />
                    <span>{t.packages.groupSize}: {pkg.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-red-700" />
                    <span>{pkg.location}</span>
                  </div>
                </div>

                {/* Price Badge */}
                <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-600 mb-1">{t.packages.from}</div>
                  <div className="text-3xl font-bold text-red-800">
                    {pkg.currency}{pkg.priceFrom}
                    <span className="text-base font-normal text-gray-600">{t.packages.perPerson}</span>
                  </div>
                </div>

                {/* Expandable Details */}
                <button
                  onClick={() => setExpandedPackage(expandedPackage === pkg.id ? null : pkg.id)}
                  className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm font-medium text-gray-700"
                >
                  <span>{t.packages.viewDetails}</span>
                  {expandedPackage === pkg.id ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                {/* Expanded Content */}
                {expandedPackage === pkg.id && (
                  <div className="mt-4 space-y-4 animate-fade-in">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{t.packages.includes}:</h4>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {pkg.includes.map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-red-700 mt-1">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {pkg.tastingOptions && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{t.packages.options}:</h4>
                        <div className="space-y-2">
                          {pkg.tastingOptions.map((option, index) => (
                            <div key={index} className="flex justify-between items-center text-sm bg-white p-2 rounded border border-gray-200">
                              <span className="text-gray-700">{option.name}</span>
                              <span className="font-semibold text-red-700">{pkg.currency}{option.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Gallery Preview */}
                    <div className="grid grid-cols-3 gap-2">
                      {pkg.gallery.slice(0, 3).map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${pkg.name} ${index + 1}`}
                          className="w-full h-20 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>

              <CardFooter>
                <Button
                  onClick={() => handleBooking(pkg)}
                  className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-6 transition-all duration-300 hover:shadow-lg"
                >
                  {t.packages.reserve}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Parcerias oficiais com:</p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <Badge variant="outline" className="px-4 py-2 text-base">AdegaMãe</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Quinta da Bacalhôa</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Quinta das Murgas</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Bestours PT</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
