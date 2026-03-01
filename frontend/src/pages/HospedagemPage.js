import { useState } from 'react';
import { Star, MapPin, MessageCircle, Wifi, Coffee, Dumbbell, Phone as PhoneIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { accommodations, companyInfo } from '../data/mockData';
import { optimizeImageUrl } from '../lib/utils';

const HospedagemPage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedHotel, setSelectedHotel] = useState(null);

  const getCategoryBadge = (category) => {
    const categories = {
      luxury: { label: 'Luxo', color: 'bg-amber-100 text-amber-800' },
      boutique: { label: 'Boutique', color: 'bg-purple-100 text-purple-800' },
      historic: { label: 'Histórico', color: 'bg-blue-100 text-blue-800' },
      'mid-range': { label: 'Conforto', color: 'bg-green-100 text-green-800' },
    };
    return categories[category] || categories['mid-range'];
  };

  const renderStars = (stars) =>
    Array.from({ length: stars }, (_, i) => (
      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
    ));

  const openWhatsApp = (hotel) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de reservar: ${hotel.name} em ${hotel.location}`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/\+/g, '')}?text=${message}`, '_blank');
  };

  const filteredAccommodations = accommodations.filter(
    (h) => activeCategory === 'all' || h.category === activeCategory
  );

  const categoryFilters = [
    { value: 'all', label: 'Todas' },
    { value: 'luxury', label: 'Luxo' },
    { value: 'boutique', label: 'Boutique' },
    { value: 'historic', label: 'Histórico' },
    { value: 'mid-range', label: 'Conforto' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Banner */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20">Hospedagens Premium</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.accommodations.title}
          </h1>
          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            {t.accommodations.subtitle}
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categoryFilters.map((c) => (
              <button
                key={c.value}
                onClick={() => setActiveCategory(c.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === c.value
                    ? 'bg-red-700 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-red-50 shadow-md hover:shadow-lg'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredAccommodations.map((hotel) => {
              const badge = getCategoryBadge(hotel.category);
              return (
                <Card
                  key={hotel.id}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white cursor-pointer"
                  onClick={() => setSelectedHotel(hotel)}
                >
                  <div className="relative h-56 overflow-hidden group">
                    <img
                      src={optimizeImageUrl(hotel.image)}
                      alt={hotel.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className="absolute top-4 right-4 bg-red-700 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                      {hotel.currency}{hotel.pricePerNight}
                      <span className="text-sm font-normal">{t.accommodations.perNight}</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge className={`${badge.color} font-semibold`}>{badge.label}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="flex gap-1">{renderStars(hotel.stars)}</div>
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
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-sm font-semibold text-gray-900 mb-3">{t.accommodations.amenities}:</p>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.slice(0, 4).map((amenity, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-xs bg-gray-50 px-2 py-1 rounded text-gray-700">
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
                      onClick={(e) => { e.stopPropagation(); setSelectedHotel(hotel); }}
                      className="flex-1 bg-red-700 hover:bg-red-800 text-white font-semibold py-6"
                    >
                      {t.accommodations.viewDetails}
                    </Button>
                    <Button
                      onClick={(e) => { e.stopPropagation(); openWhatsApp(hotel); }}
                      variant="outline"
                      className="border-green-600 text-green-700 hover:bg-green-50 py-6"
                    >
                      <MessageCircle className="h-5 w-5" />
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          {filteredAccommodations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Nenhuma hospedagem encontrada para o filtro selecionado.</p>
            </div>
          )}
        </div>
      </section>

      {/* Location Badges */}
      <section className="pb-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Localizações estratégicas no centro de Lisboa</p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <Badge variant="outline" className="px-4 py-2 text-base">Baixa &amp; Chiado</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Avenida da Liberdade</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Alfama Histórica</Badge>
            <Badge variant="outline" className="px-4 py-2 text-base">Praça do Comércio</Badge>
          </div>
        </div>
      </section>

      {/* Detail Dialog */}
      <Dialog open={!!selectedHotel} onOpenChange={(open) => !open && setSelectedHotel(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedHotel && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedHotel.name}</DialogTitle>
                <DialogDescription className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-700" />
                  {selectedHotel.location}
                </DialogDescription>
              </DialogHeader>

              <img
                src={optimizeImageUrl(selectedHotel.image, 1024, 75)}
                alt={selectedHotel.name}
                className="w-full h-72 object-cover rounded-lg"
                loading="lazy"
                decoding="async"
              />

              <div className="space-y-6 mt-4">
                {/* Stars + Rating */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-1">{renderStars(selectedHotel.stars)}</div>
                  <Badge className="bg-amber-100 text-amber-800">
                    {selectedHotel.rating}/5 — {selectedHotel.stars} {t.accommodations.stars}
                  </Badge>
                </div>

                <p className="text-gray-700 leading-relaxed">{selectedHotel.shortDescription}</p>

                {/* Location Details */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-sm">
                    <p className="font-semibold text-gray-900 mb-1">{t.accommodations.distanceCenter}</p>
                    <p className="text-gray-600">{selectedHotel.distanceCenter}</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm">
                    <p className="font-semibold text-gray-900 mb-1">{t.accommodations.distanceAirport}</p>
                    <p className="text-gray-600">{selectedHotel.distanceAirport}</p>
                  </div>
                </div>

                {/* Amenities */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">{t.accommodations.amenities}:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedHotel.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-red-700 mt-0.5">•</span>
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-lg p-6 text-center">
                  <div className="text-sm text-gray-600 mb-1">{t.packages.from}</div>
                  <div className="text-4xl font-bold text-red-800 mb-4">
                    {selectedHotel.currency}{selectedHotel.pricePerNight}
                    <span className="text-base font-normal text-gray-600">{t.accommodations.perNight}</span>
                  </div>
                  <Button
                    onClick={() => openWhatsApp(selectedHotel)}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Reservar via WhatsApp
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default HospedagemPage;
