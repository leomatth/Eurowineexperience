import { useState } from 'react';
import { Wine, MapPin, Clock, Users, ChevronDown, ChevronUp, Castle, Utensils, Grape, Map, Bus, Mountain, Church, Star, MessageCircle, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { packages, accommodations, companyInfo } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { optimizeImageUrl } from '../lib/utils';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

const HomePage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();
  const [expandedPackage, setExpandedPackage] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Get only first 3 of each
  const firstThreePackages = packages.slice(0, 3);
  const firstThreeAccommodations = accommodations.slice(0, 3);

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

  const getCategoryBadge = (category) => {
    const categories = {
      luxury: { label: 'Luxo', color: 'bg-amber-100 text-amber-800' },
      boutique: { label: 'Boutique', color: 'bg-purple-100 text-purple-800' },
      historic: { label: 'Histórico', color: 'bg-blue-100 text-blue-800' },
      'mid-range': { label: 'Conforto', color: 'bg-green-100 text-green-800' }
    };
    return categories[category] || categories['mid-range'];
  };

  const renderStars = (stars) => {
    return Array.from({ length: stars }, (_, index) => (
      <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
    ));
  };

  const handleBooking = (pkg) => {
    setSelectedPackage(pkg);
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAccommodationBooking = (accommodation) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de reservar: ${accommodation.name} em ${accommodation.location}`
    );
    window.open(`https://wa.me/5521998277135?text=${message}`, '_blank');
  };

  return (
    <>
      <HeroSection />

      {/* Experiences Section */}
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

          {/* Packages Grid - First 3 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {firstThreePackages.map((pkg) => (
              <Card
                key={pkg.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
              >
                {/* Package Image */}
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={optimizeImageUrl(pkg.image)}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

                      {/* Gallery Preview */}
                      {pkg.gallery && (
                        <div className="grid grid-cols-3 gap-2">
                          {pkg.gallery.slice(0, 3).map((img, index) => (
                            <img
                              key={index}
                              src={optimizeImageUrl(img, 200)}
                              alt={`${pkg.name} ${index + 1}`}
                              className="w-full h-20 object-cover rounded-lg"
                              loading="lazy"
                              decoding="async"
                              sizes="(max-width: 768px) 100px, 80px"
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

          {/* Ver Mais Button */}
          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/experiencias')}
              className="px-8 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver mais experiências
            </Button>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section id="accommodations" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100">Hospedagens Premium</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.accommodations.title}
            </h2>
            <p className="text-lg text-gray-600">
              {t.accommodations.subtitle}
            </p>
          </div>

          {/* Accommodations Grid - First 3 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {firstThreeAccommodations.map((hotel) => {
              const categoryBadge = getCategoryBadge(hotel.category);
              
              return (
                <Card
                  key={hotel.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
                >
                  {/* Hotel Image */}
                  <div className="relative h-56 overflow-hidden group">
                    <img
                      src={optimizeImageUrl(hotel.image)}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-red-700 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                      {hotel.currency}{hotel.pricePerNight}<span className="text-sm font-normal">{t.accommodations.perNight}</span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`${categoryBadge.color} font-semibold`}>
                        {categoryBadge.label}
                      </Badge>
                    </div>

                    {/* Stars and Rating */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="flex gap-1">
                        {renderStars(hotel.stars)}
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <span className="font-bold text-gray-900">{hotel.rating}</span>
                        <span className="text-gray-600 text-sm">/5</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-900">{hotel.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base text-gray-600">
                      <MapPin className="h-4 w-4 text-red-700" />
                      {hotel.location}
                    </CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-700 mb-4">{hotel.shortDescription}</p>

                    {/* Location Info */}
                    <div className="space-y-2 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-3 w-3 text-red-700" />
                        <span>{hotel.distanceCenter}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-3 w-3 text-red-700" />
                        <span>{hotel.distanceAirport}</span>
                      </div>
                    </div>

                    {/* Amenities Icons */}
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm font-semibold text-gray-900 mb-3">{t.accommodations.amenities}:</p>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.slice(0, 4).map((amenity, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-1 text-xs bg-gray-50 px-2 py-1 rounded text-gray-700"
                          >
                            <span className="truncate max-w-[120px]">{amenity}</span>
                          </div>
                        ))}
                      </div>
                      {hotel.amenities.length > 4 && (
                        <p className="text-xs text-gray-500 mt-2">+{hotel.amenities.length - 4} comodidades</p>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3">
                    <Button
                      onClick={() => handleAccommodationBooking(hotel)}
                      className="flex-1 bg-red-700 hover:bg-red-800 text-white font-semibold py-6 transition-all duration-300 hover:shadow-lg"
                    >
                      {t.accommodations.bookNow}
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {/* Ver Mais Button */}
          <div className="text-center mt-12">
            <Button
              onClick={() => navigate('/hospedagem')}
              className="px-8 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Ver mais hospedagens
            </Button>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
