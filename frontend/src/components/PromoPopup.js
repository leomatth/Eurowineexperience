import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Check } from 'lucide-react';
import { Button } from './ui/button';
import { companyInfo } from '../data/mockData';
import { trackWhatsAppClick } from '../lib/analytics';

const PROMO_CARDS = [
  {
    id: 'atlantico',
    badge: '🌿 Full Day Especial',
    badgeClass: 'bg-emerald-700',
    highlight: true,
    title: 'Vinhos Atlânticos – Experiência de 1 Dia 🌿',
    subtitle: 'Região de Lisboa',
    description:
      'Uma experiência elegante e leve, focada nos vinhos frescos e na paisagem atlântica.',
    highlights: [
      '09:00 — Saída de Lisboa',
      'Quinta das Murgas — vinhos brancos atlânticos',
      'Almoço na AdegaMãe com vista e harmonização',
      'AdegaMãe — visita + vinhos e espumantes',
    ],
    price: '€290',
    priceLabel: 'A partir de',
    priceNote: 'por pessoa',
    obs: 'Possibilidade de personalização sob medida.',
    btnLabel: 'Explorar experiência',
    btnClass: 'bg-emerald-700 hover:bg-emerald-800 text-white',
    type: 'whatsapp',
    waMessage: 'Olá! Tenho interesse nos Vinhos Atlânticos – Experiência de 1 Dia. Podem me dar mais informações?',
  },
];

const TRUST_ITEMS = [
  'Transporte privado incluído',
  'Vinícolas selecionadas com curadoria',
  'Experiências personalizáveis',
  'Atendimento próximo e exclusivo',
];

const PromoPopup = () => {
  const [open, setOpen] = useState(false);
  const [headerOffset, setHeaderOffset] = useState(96);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateHeaderOffset = () => {
      const headerEl = document.querySelector('header');
      if (!headerEl) {
        setHeaderOffset(96);
        return;
      }

      const { bottom } = headerEl.getBoundingClientRect();
      // Keep a small breathing room below the fixed header.
      setHeaderOffset(Math.max(80, Math.ceil(bottom) + 8));
    };

    updateHeaderOffset();
    window.addEventListener('resize', updateHeaderOffset);
    window.addEventListener('orientationchange', updateHeaderOffset);

    return () => {
      window.removeEventListener('resize', updateHeaderOffset);
      window.removeEventListener('orientationchange', updateHeaderOffset);
    };
  }, []);

  const dismiss = () => {
    setOpen(false);
  };

  const handleCardAction = (card) => {
    dismiss();
    if (card.type === 'navigate') {
      navigate(card.destination);
    } else {
      trackWhatsAppClick('promo_popup', card.badge);
      const waNumber = companyInfo.whatsapp.replace(/\D/g, '');
      window.open(
        `https://wa.me/${waNumber}?text=${encodeURIComponent(card.waMessage)}`,
        '_blank',
        'noopener,noreferrer'
      );
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed left-0 right-0 bottom-0 z-50 flex items-start justify-center p-3 pb-5 md:p-5 md:pb-8 bg-black/65 backdrop-blur-sm"
      style={{ top: `${headerOffset}px` }}
      onClick={dismiss}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-xl flex flex-col overflow-hidden"
        style={{ maxHeight: `calc(100dvh - ${headerOffset + 28}px)` }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header com botão fechar — fora do scroll, nunca coberto no iOS */}
        <div className="flex-none relative bg-gradient-to-br from-stone-900 via-red-950 to-stone-900 px-6 py-7 text-center">
          <button
            onClick={dismiss}
            aria-label="Fechar"
            className="absolute top-3 right-3 bg-white/20 hover:bg-white/35 active:bg-white/50 text-white rounded-full p-2 transition-colors touch-manipulation"
          >
            <X className="h-5 w-5" />
          </button>
          <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold tracking-tight leading-snug">
            Experiências Exclusivas de Vinho em Portugal 🍷
          </h2>
          <p className="text-stone-300 mt-2 text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            Roteiros cuidadosamente selecionados com motorista privado, vinícolas renomadas e experiências gastronômicas únicas.
          </p>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto overscroll-contain flex-1">

          {/* Cards */}
          <div className="p-4 md:p-6 grid grid-cols-1 gap-4">
            {PROMO_CARDS.map((card) => (
              <div
                key={card.id}
                className={`flex flex-col rounded-xl border overflow-hidden shadow-sm transition-shadow hover:shadow-lg ${
                  card.highlight
                    ? 'border-amber-400 ring-2 ring-amber-400/40'
                    : 'border-stone-200'
                }`}
              >
                {/* Badge strip */}
                <div className={`${card.badgeClass} text-white text-xs font-bold uppercase tracking-widest px-4 py-2 text-center`}>
                  {card.badge}
                </div>

                {/* Card content — cresce para preencher, sem preço/botão */}
                <div className="flex flex-col flex-1 p-4 pb-0">
                  {/* Title + subtitle */}
                  <div className="mb-3">
                    <h3 className={`font-bold text-sm md:text-base leading-snug ${card.highlight ? 'text-amber-800' : 'text-stone-800'}`}>
                      {card.title}
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">{card.subtitle}</p>
                  </div>

                  <p className="text-stone-600 text-xs leading-relaxed mb-3">{card.description}</p>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-1.5">
                    {card.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-xs text-stone-700">
                        <Check className="h-3.5 w-3.5 text-red-600 shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price block — fora do flex-1, sempre na mesma posição */}
                <div className="px-4 pt-4">
                  <div className={`rounded-lg px-3 py-2.5 text-center mb-3 ${card.highlight ? 'bg-amber-50 border border-amber-200' : 'bg-stone-50 border border-stone-200'}`}>
                    <p className={`text-xs ${card.highlight ? 'text-amber-700' : 'text-stone-500'}`}>{card.priceLabel}</p>
                    <p className={`text-2xl font-extrabold leading-tight ${card.highlight ? 'text-amber-800' : 'text-red-800'}`}>
                      {card.price}
                    </p>
                    <p className="text-xs text-stone-500">{card.priceNote}</p>
                  </div>

                  <Button
                    onClick={() => handleCardAction(card)}
                    className={`w-full font-semibold text-sm h-auto py-2.5 rounded-lg shadow ${card.btnClass}`}
                  >
                    {card.btnLabel}
                  </Button>
                </div>

                {/* Obs — altura mínima fixa para não variar entre cards */}
                <div className="px-4 pt-2 pb-4 min-h-[2.75rem] flex items-start justify-center">
                  <p className="text-xs text-stone-400 text-center italic leading-relaxed">{card.obs}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust strip */}
          <div className="border-t border-stone-100 bg-stone-50 px-5 py-4">
            <p className="text-center text-xs font-semibold text-stone-500 uppercase tracking-wider mb-3">
              Por que escolher a Eurowine Experience?
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-1.5">
              {TRUST_ITEMS.map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-xs text-stone-600">
                  <Check className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Dismiss link */}
          <div className="text-center py-3">
            <button
              onClick={dismiss}
              className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
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
