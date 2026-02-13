import { Star, MapPin, Wifi, Coffee, Dumbbell, Car, Phone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { accommodations } from '../data/mockData';

const AccommodationsSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

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

  const handleBooking = (accommodation) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de reservar: ${accommodation.name} em ${accommodation.location}`
    );
    window.open(`https://wa.me/351935327289?text=${message}`, '_blank');
  };

  return (
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

        {/* Accommodations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {accommodations.map((hotel) => {
            const categoryBadge = getCategoryBadge(hotel.category);
            
            return (
              <Card
                key={hotel.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
              >
                {/* Hotel Image */}
                <div className="relative h-56 overflow-hidden group">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
                      <Car className="h-3 w-3 text-red-700" />
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
                          {index === 0 && <Wifi className="h-3 w-3" />}
                          {index === 1 && <Dumbbell className="h-3 w-3" />}
                          {index === 2 && <Coffee className="h-3 w-3" />}
                          {index === 3 && <Phone className="h-3 w-3" />}
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
                    onClick={() => handleBooking(hotel)}
                    className="flex-1 bg-red-700 hover:bg-red-800 text-white font-semibold py-6 transition-all duration-300 hover:shadow-lg"
                  >
                    {t.accommodations.bookNow}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Localizações estratégicas no centro de Lisboa</p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <Badge variant="outline" className="px-4 py-2 text-base">Baixa & Chiado</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Avenida da Liberdade</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Alfama Histórica</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Praça do Comércio</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;
