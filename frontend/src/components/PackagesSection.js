import { useState } from 'react';
import { Wine, MapPin, Clock, Users, ChevronDown, ChevronUp, Castle, Sparkles, Utensils, Grape, Map, Bus, Mountain, Church } from 'lucide-react';
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
  const [filter, setFilter] = useState('all');

  const getIcon = (iconName) => {
    const icons = {
      wine: <Wine className="h-6 w-6" />,
      castle: <Castle className="h-6 w-6" />,
      sparkles: <Sparkles className="h-6 w-6" />,
      utensils: <Utensils className="h-6 w-6" />,
      grape: <Grape className="h-6 w-6" />,
      map: <Map className="h-6 w-6" />,
      bus: <Bus className="h-6 w-6" />,
      mountain: <Mountain className="h-6 w-6" />,
      church: <Church className="h-6 w-6" />
    };
    return icons[iconName] || icons.wine;
  };

  const getCategoryColor = (category) => {
    const colors = {
      winery: 'bg-purple-100 text-purple-800',
      tour: 'bg-blue-100 text-blue-800',
      'city-tour': 'bg-green-100 text-green-800',
      'day-trip': 'bg-amber-100 text-amber-800'
    };
    return colors[category] || colors.winery;
  };

  const getCategoryLabel = (category) => {
    const labels = {
      winery: 'Vinícola',
      tour: 'Tour Guiado',
      'city-tour': 'City Tour',
      'day-trip': 'Passeio 1 Dia'
    };
    return labels[category] || 'Experiência';
  };

  const handleBooking = (pkg) => {
    setSelectedPackage(pkg);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredPackages = filter === 'all' 
    ? packages 
    : packages.filter(pkg => pkg.category === filter);

  const filters = [
    { value: 'all', label: t.packages.filterAll || 'Todas' },
    { value: 'winery', label: t.packages.filterWinery || 'Vinícolas' },
    { value: 'tour', label: t.packages.filterTours || 'Tours' },
    { value: 'city-tour', label: t.packages.filterCityTour || 'City Tours' },
    { value: 'day-trip', label: t.packages.filterDayTrip || 'Passeios de 1 Dia' }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-amber-50 via-white to-red-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">Experiências Premium</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.packages.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.packages.subtitle}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption.value}
              onClick={() => setFilter(filterOption.value)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === filterOption.value
                  ? 'bg-red-700 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-red-50 shadow-md hover:shadow-lg'
              }`}
            >
              {filterOption.label}
            </button>
          ))}
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredPackages.map((pkg) => (
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
                  {pkg.currency}{pkg.priceFrom}{pkg.priceTo && `-${pkg.priceTo}`}
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(pkg.category)}>
                    {getCategoryLabel(pkg.category)}
                  </Badge>
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
                <CardTitle className="text-xl text-gray-900 leading-tight">{pkg.name}</CardTitle>
                <CardDescription className="text-base text-gray-600">
                  {pkg.tagline}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-gray-700 mb-4 text-sm">{pkg.shortDescription}</p>

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

                    {pkg.visitOptions && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{t.packages.options}:</h4>
                        <div className="space-y-2">
                          {pkg.visitOptions.map((option, index) => (
                            <div key={index} className="flex justify-between items-center text-sm bg-white p-2 rounded border border-gray-200">
                              <span className="text-gray-700">{option.name}</span>
                              <span className="font-semibold text-red-700">{pkg.currency}{option.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {pkg.mealOptions && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">{t.packages.options}:</h4>
                        <div className="space-y-2">
                          {pkg.mealOptions.map((option, index) => (
                            <div key={index} className="flex justify-between items-center text-sm bg-white p-2 rounded border border-gray-200">
                              <span className="text-gray-700">{option.name}</span>
                              <span className="font-semibold text-red-700">{pkg.currency}{option.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {pkg.routeOptions && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Rotas Incluídas:</h4>
                        <div className="space-y-2">
                          {pkg.routeOptions.map((route, index) => (
                            <div key={index} className="text-sm bg-white p-2 rounded border border-gray-200">
                              <div className="font-semibold text-gray-900">{route.name}</div>
                              <div className="text-gray-600 text-xs">{route.stops} paradas • {route.duration}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Gallery Preview */}
                    {pkg.gallery && (
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
                    )}
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
            <Badge variant="outline" className="px-4 py-2 text-base">Quinta das Murgas</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Quinta da Bacalhôa</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">AdegaMãe</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Sogrape</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">VinoTours</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
