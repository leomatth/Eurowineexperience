import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, MapPin, Clock, Users, Wine } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { packages } from '../data/mockData';
import { optimizeImageUrl } from '../lib/utils';

const PromoPopup = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const promoPkg = packages.find((p) => p.isPromo);

  useEffect(() => {
    if (!promoPkg) return;
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, [promoPkg]);

  const dismiss = () => {
    setOpen(false);
  };

  const handleView = () => {
    setOpen(false);
    navigate('/experiencias?filter=package');
  };

  if (!open || !promoPkg) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Always-visible close button – anchored to the modal card, above the image */}
        <button
          onClick={dismiss}
          aria-label="Fechar promoção"
          className="absolute top-3 right-3 z-20 bg-black/55 hover:bg-black/75 active:bg-black/90 text-white rounded-full p-2 transition-colors touch-manipulation"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto">

        {/* Header image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={optimizeImageUrl(promoPkg.image, 800, 75)}
            alt={promoPkg.name}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute top-3 left-3">
            <Badge className="bg-red-600 text-white border-0 text-xs font-bold tracking-wide uppercase">
              🔥 Oferta Especial
            </Badge>
          </div>
          <div className="absolute bottom-3 left-4 right-4">
            <h2 className="text-white font-bold text-xl leading-tight drop-shadow">
              {promoPkg.name}
            </h2>
            <p className="text-red-200 text-sm mt-0.5">{promoPkg.tagline}</p>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-gray-700 text-sm leading-relaxed mb-4">
            {promoPkg.shortDescription}
          </p>

          {/* Day summary pills */}
          {promoPkg.packageDays && (
            <div className="flex flex-col gap-2 mb-4">
              {promoPkg.packageDays.map((d) => (
                <div key={d.day} className="flex items-start gap-2 bg-amber-50 rounded-lg px-3 py-2">
                  <Wine className="h-4 w-4 text-red-700 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-xs text-red-800 uppercase tracking-wide">
                      Dia {d.day}
                    </span>
                    <span className="text-gray-700 text-xs ml-1">— {d.title}</span>
                    <span className="block text-gray-500 text-xs">{d.stops.map((s) => s.name).join(' · ')}</span>
                  </div>
                  <span className="ml-auto text-red-700 font-bold text-sm shrink-0">€{d.price}</span>
                </div>
              ))}
            </div>
          )}

          {/* Meta info */}
          <div className="flex flex-wrap gap-3 mb-5 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-red-600" />
              {promoPkg.location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-red-600" />
              {promoPkg.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5 text-red-600" />
              {promoPkg.groupSize}
            </span>
          </div>

          {/* Price + CTAs */}
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-gradient-to-r from-red-50 to-amber-50 rounded-xl px-4 py-3">
              <p className="text-xs text-gray-500">Valor total por pessoa</p>
              <p className="text-2xl font-bold text-red-800">
                {promoPkg.currency}{promoPkg.priceFrom}
                <span className="text-sm font-normal text-gray-500">/pessoa</span>
              </p>
              {promoPkg.paymentTerms && (
                <p className="text-xs text-gray-500 mt-0.5">{promoPkg.paymentTerms}</p>
              )}
            </div>
            <Button
              onClick={handleView}
              className="bg-red-700 hover:bg-red-800 text-white font-semibold px-5 py-3 h-auto rounded-xl shadow-lg"
            >
              Ver Pacote
            </Button>
          </div>

          <button
            onClick={dismiss}
            className="w-full mt-3 text-xs text-gray-400 hover:text-gray-600 transition-colors"
          >
            Não tenho interesse agora
          </button>
        </div>
        </div>{/* end scrollable */}
      </div>
    </div>
  );
};

export default PromoPopup;
