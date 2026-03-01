import { useState } from 'react';
import { Wine, MapPin, Clock, Users, ChevronDown, ChevronUp, Castle, Utensils, Grape, Map, Bus, Mountain, Church, MessageCircle, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../components/ui/dialog';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { packages, companyInfo } from '../data/mockData';
import { optimizeImageUrl } from '../lib/utils';

const ExperienciasPage = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [expandedPackage, setExpandedPackage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [activeRegion, setActiveRegion] = useState('all');
  const [selectedPkg, setSelectedPkg] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  const getIcon = (iconName) => {
    const icons = {
      wine: <Wine className="h-6 w-6" />,
      castle: <Castle className="h-6 w-6" />,
      utensils: <Utensils className="h-6 w-6" />,
      grape: <Grape className="h-6 w-6" />,
      map: <Map className="h-6 w-6" />,
      bus: <Bus className="h-6 w-6" />,
      mountain: <Mountain className="h-6 w-6" />,
      church: <Church className="h-6 w-6" />,
    };
    return icons[iconName] || icons.wine;
  };

  const getCategoryColor = (category) => {
    const colors = {
      winery: 'bg-purple-100 text-purple-800',
      tour: 'bg-blue-100 text-blue-800',
      'city-tour': 'bg-green-100 text-green-800',
      'day-trip': 'bg-amber-100 text-amber-800',
    };
    return colors[category] || colors.winery;
  };

  const getCategoryLabel = (category) => {
    const labels = {
      winery: 'Vinícola',
      tour: 'Tour Guiado',
      'city-tour': 'City Tour',
      'day-trip': 'Passeio 1 Dia',
    };
    return labels[category] || 'Experiência';
  };

  const openWhatsApp = (pkg) => {
    const message = encodeURIComponent(
      `Olá! Gostaria de reservar: ${pkg.name} (${pkg.location}) - a partir de ${pkg.currency}${pkg.priceFrom}`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/\+/g, '')}?text=${message}`, '_blank');
  };

  const openDetail = (pkg) => {
    setSelectedPkg(pkg);
    setGalleryIndex(0);
  };

  const filteredPackages = packages.filter((pkg) => {
    const matchesCategory = filter === 'all' || pkg.category === filter;
    const matchesRegion = activeRegion === 'all' || pkg.region === activeRegion;
    return matchesCategory && matchesRegion;
  });

  const filters = [
    { value: 'all', label: t.packages.filterAll || 'Todas' },
    { value: 'winery', label: t.packages.filterWinery || 'Vinícolas' },
    { value: 'tour', label: t.packages.filterTours || 'Tours' },
    { value: 'city-tour', label: t.packages.filterCityTour || 'City Tours' },
    { value: 'day-trip', label: t.packages.filterDayTrip || 'Passeios de 1 Dia' },
  ];

  const regionFilters = [
    { value: 'all', label: 'Todas' },
    { value: 'Porto', label: 'Porto' },
    { value: 'Aveiro', label: 'Aveiro' },
    { value: 'Lisboa', label: 'Lisboa' },
    { value: 'Alentejo', label: 'Alentejo' },
  ];

  // Gather unique gallery images for modal
  const getGalleryImages = (pkg) => {
    const imgs = [pkg.image, ...(pkg.gallery || [])];
    return [...new Set(imgs)];
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Banner */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/20">Experiências Premium</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t.packages.title}
          </h1>
          <p className="text-lg text-red-100 max-w-2xl mx-auto">
            {t.packages.subtitle}
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-12 bg-gradient-to-br from-amber-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          {/* Region Filters */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-gray-700 mb-3 text-center">Filtrar por Região:</p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {regionFilters.map((r) => (
                <button
                  key={r.value}
                  onClick={() => setActiveRegion(r.value)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeRegion === r.value
                      ? 'bg-red-700 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-red-50 shadow-md hover:shadow-lg'
                  }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filter === f.value
                    ? 'bg-red-700 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-red-50 shadow-md hover:shadow-lg'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white cursor-pointer"
                onClick={() => openDetail(pkg)}
              >
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={optimizeImageUrl(pkg.image)}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-red-700 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {pkg.currency}{pkg.priceFrom}{pkg.priceTo ? `-${pkg.priceTo}` : ''}
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
                    <span className="font-semibold">{pkg.location}</span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 leading-tight">{pkg.name}</CardTitle>
                  <CardDescription className="text-base text-gray-600">{pkg.tagline}</CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-700 mb-4 text-sm">{pkg.shortDescription}</p>
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
                  <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">{t.packages.from}</div>
                    <div className="text-3xl font-bold text-red-800">
                      {pkg.currency}{pkg.priceFrom}
                      <span className="text-base font-normal text-gray-600">{t.packages.perPerson}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Button
                    onClick={(e) => { e.stopPropagation(); openDetail(pkg); }}
                    className="flex-1 bg-red-700 hover:bg-red-800 text-white font-semibold py-6"
                  >
                    {t.packages.viewDetails}
                  </Button>
                  <Button
                    onClick={(e) => { e.stopPropagation(); openWhatsApp(pkg); }}
                    variant="outline"
                    className="border-green-600 text-green-700 hover:bg-green-50 py-6"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">Nenhuma experiência encontrada para os filtros selecionados.</p>
            </div>
          )}
        </div>
      </section>

      {/* Detail Dialog */}
      <Dialog open={!!selectedPkg} onOpenChange={(open) => !open && setSelectedPkg(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedPkg && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedPkg.name}</DialogTitle>
                <DialogDescription>{selectedPkg.tagline} — {selectedPkg.location}</DialogDescription>
              </DialogHeader>

              {/* Gallery */}
              {(() => {
                const images = getGalleryImages(selectedPkg);
                return (
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={optimizeImageUrl(images[galleryIndex], 1024, 75)}
                      alt={`${selectedPkg.name} ${galleryIndex + 1}`}
                      className="w-full h-72 md:h-96 object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={() => setGalleryIndex((i) => (i - 1 + images.length) % images.length)}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                          aria-label="Foto anterior"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => setGalleryIndex((i) => (i + 1) % images.length)}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                          aria-label="Próxima foto"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setGalleryIndex(idx)}
                              className={`w-2.5 h-2.5 rounded-full transition-colors ${idx === galleryIndex ? 'bg-white' : 'bg-white/50'}`}
                              aria-label={`Foto ${idx + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                );
              })()}

              {/* Details */}
              <div className="space-y-6 mt-4">
                <p className="text-gray-700 leading-relaxed">{selectedPkg.fullDescription}</p>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-red-50 rounded-lg p-3">
                    <Clock className="h-5 w-5 text-red-700 mx-auto mb-1" />
                    <span className="text-sm font-medium text-gray-700">{selectedPkg.duration}</span>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <Users className="h-5 w-5 text-red-700 mx-auto mb-1" />
                    <span className="text-sm font-medium text-gray-700">{selectedPkg.groupSize}</span>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <MapPin className="h-5 w-5 text-red-700 mx-auto mb-1" />
                    <span className="text-sm font-medium text-gray-700">{selectedPkg.region}</span>
                  </div>
                </div>

                {/* Includes */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">{t.packages.includes}:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {selectedPkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-red-700 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Options */}
                {(selectedPkg.tastingOptions || selectedPkg.visitOptions || selectedPkg.mealOptions || selectedPkg.routeOptions) && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t.packages.options}:</h4>
                    <div className="space-y-2">
                      {(selectedPkg.tastingOptions || selectedPkg.visitOptions || selectedPkg.mealOptions || selectedPkg.routeOptions || []).map((option, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm bg-gray-50 p-3 rounded-lg border border-gray-200">
                          <span className="text-gray-700">{option.name}</span>
                          <span className="font-semibold text-red-700">{selectedPkg.currency}{option.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Price + CTA */}
                <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-lg p-6 text-center">
                  <div className="text-sm text-gray-600 mb-1">{t.packages.from}</div>
                  <div className="text-4xl font-bold text-red-800 mb-4">
                    {selectedPkg.currency}{selectedPkg.priceFrom}
                    <span className="text-base font-normal text-gray-600">{t.packages.perPerson}</span>
                  </div>
                  <Button
                    onClick={() => openWhatsApp(selectedPkg)}
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

export default ExperienciasPage;
