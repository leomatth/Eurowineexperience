import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Wine, Clock, Users, Car, Utensils, MapPin, CheckCircle,
  MessageCircle, ChevronDown, ChevronUp, Award,
  Shield, Sparkles, Star, Calendar, Globe
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { companyInfo } from '../data/mockData';
import { trackWhatsAppClick } from '../lib/analytics';

// ─── Constants ────────────────────────────────────────────────────────────────
const WHATSAPP_URL = `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a experiência de 1 dia de vinhos atlânticos em Lisboa.')}`;
const trackWA = () => trackWhatsAppClick('lisboa_1_dia');

const HERO_IMG   = 'https://images.unsplash.com/photo-1718337581366-fc10681e2c00?auto=format&fit=crop&w=1600&q=80';
const BARREL_IMG = 'https://images.unsplash.com/photo-1660903028319-238d7395f81d?auto=format&fit=crop&w=1200&q=75';

// ─── Static data ──────────────────────────────────────────────────────────────
const itinerary = [
  {
    day: 1,
    label: 'Manhã — 10:00',
    title: 'Quinta das Murgas — Bucelas',
    price: 'Saída 09:00',
    gradient: 'from-emerald-700 to-emerald-900',
    stops: [
      { name: 'Bucelas — Berço do Arinto', desc: 'Região histórica única a 25km de Lisboa, conhecida pelo Arinto de excelência — casta rainha dos brancos atlânticos' },
      { name: 'Quinta das Murgas — Quinta Familiar', desc: 'Visita guiada a uma quinta familiar autêntica com terraços de videira e vista sobre a paisagem de Bucelas' },
      { name: 'Prova de Arinto Premium', desc: 'Degustação comentada dos premiados vinhos brancos DOC Bucelas — frescos, minerais e de longa longevidade' },
      { name: 'Terroir Único de Bucelas', desc: 'Explicação sobre solos argilocalcários e microclima atlântico que tornam este Arinto incomparável em Portugal' },
    ],
  },
  {
    day: 2,
    label: 'Almoço — 13:00',
    title: 'Almoço na AdegaMãe',
    price: '~13:00',
    gradient: 'from-teal-700 to-teal-900',
    stops: [
      { name: 'Almoço Leve e Equilibrado', desc: 'Menu sazonal com produtos locais — leve, fresco e perfeitamente harmonizado com os vinhos atlânticos da casa' },
      { name: 'Harmonização com Espumantes', desc: 'Cada prato acompanhado por espumantes e brancos atlânticos selecionados pelo sommelier da AdegaMãe' },
      { name: 'Vista Panorâmica sobre as Vinhas', desc: 'Sala com vista privilegiada para os vinhedos de Torres Vedras — atmosfera descontraída e elegante' },
      { name: 'Atmosfera Descontraída e Elegante', desc: 'Um almoço que combina qualidade gastronômica com um ambiente leve e acolhedor — perfeito para todos' },
    ],
  },
  {
    day: 3,
    label: 'Tarde — 15:00',
    title: 'AdegaMãe — Torres Vedras',
    price: '~15:00',
    gradient: 'from-green-800 to-green-950',
    stops: [
      { name: 'Adega Moderna e Inovadora', desc: 'Tour completo pela arquitetura contemporânea e produção de vinhos atlânticos a 55km de Lisboa' },
      { name: 'Prova de 4 Vinhos Selecionados', desc: 'Degustação comentada incluindo Reserva, Private Selection e as exclusivas gamas superiores da AdegaMãe' },
      { name: 'Wine Bar Experience', desc: 'Experiência no wine bar rooftop com vista 360° para os vinhedos — provar espumantes exclusivos' },
      { name: 'Regresso a Lisboa', desc: 'Saída de Torres Vedras ~17:00 com chegada a Lisboa aproximadamente às 18:00' },
    ],
  },
];

const inclusions = [
  {
    icon: Car,
    label: 'Transporte',
    items: [
      'Motorista privado durante todo o dia',
      'Lisboa → Bucelas → Torres Vedras → Lisboa',
      'Van executiva climatizada (até 6 pax)',
    ],
  },
  {
    icon: Wine,
    label: 'Vinhos',
    items: [
      '2 provas completas (Murgas + AdegaMãe)',
      'Arinto de Bucelas + 4 vinhos AdegaMãe',
      'Possibilidade de provar espumantes exclusivos',
    ],
  },
  {
    icon: Utensils,
    label: 'Gastronomia',
    items: [
      '1 almoço harmonizado com vinhos atlânticos',
      'Menu leve e equilibrado com produtos locais',
      'Harmonização com espumantes incluída',
    ],
  },
  {
    icon: Star,
    label: 'Experiência',
    items: [
      'Máximo 6 pessoas por grupo',
      'Perfeito para iniciantes e casais',
      'Itinerário flexível e personalizado',
    ],
  },
];

const whyUs = [
  { icon: MapPin,    title: 'Foco em Vinhos Brancos Atlânticos',           desc: 'Especialidade exclusiva da Região de Lisboa. Arinto de Bucelas e vinhos da AdegaMãe são difíceis de encontrar em qualquer outro tour.' },
  { icon: Sparkles,  title: 'Ambiente Descontraído e Elegante',             desc: 'Sem formalidades excessivas. Esta experiência foi desenhada para ser leve, acessível e agradável para todos — iniciantes inclusive.' },
  { icon: Car,       title: 'Motorista Especialista na Região',             desc: 'Nossos motoristas conhecem profundamente Bucelas e Torres Vedras — cada curva, cada quinta, cada história.' },
  { icon: Award,     title: 'Melhor Custo-Benefício dos Nossos Pacotes',    desc: 'Com €290/pessoa você tem motorista, 2 provas premium, almoço harmonizado e uma tarde de wine bar. Valor excepcional.' },
  { icon: Users,     title: 'Ideal para Casais e Grupos Pequenos',          desc: 'Atmosfera íntima perfeita para casais, amigos ou pequenas celebrações. Máximo 6 pessoas para experiência personalizada.' },
  { icon: Shield,    title: 'Perfeito para Iniciantes em Vinho',            desc: 'Nossos especialistas explicam tudo de forma acessível e divertida. Não é preciso nenhum conhecimento prévio para aproveitar.' },
];

const faqs = [
  {
    q: 'Qual é a melhor época do ano para visitar?',
    a: 'Qualquer estação é boa! Primavera (março-maio) é especialmente bonita em Bucelas — os vinhedos estão em flor e o clima é suave. Verão é quente mas as adegas são frescas. Outono (setembro-outubro) é ideal para ver as vindimas. Inverno tem menos movimento e clima ameno.',
  },
  {
    q: 'Posso trazer meu cônjuge, amigos ou família?',
    a: 'Claro! O máximo recomendado é 6 pessoas para manter a qualidade da experiência. Famílias com crianças são bem-vindas — temos atividades adaptadas para quem não bebe álcool, como sucos de uva premium e visitas às vinhas. Um dia perfeito para casais comemorando aniversários ou grupos de amigos.',
  },
  {
    q: 'Os vinhos brancos são para todos os gostos?',
    a: 'Sim! Os vinhos atlânticos de Bucelas e Torres Vedras são refrescantes, fáceis de beber e muito versáteis. Ótimos para quem está começando no mundo do vinho e para quem aprecia brancos clássicos. São leves, minerais e com boa acidez — muito diferentes dos tintos encorpados.',
  },
  {
    q: 'Preciso de experiência anterior com vinho?',
    a: 'Absolutamente não! Esta é uma das melhores experiências para iniciantes. Nossos especialistas e guias explicam tudo de forma acessível, divertida e sem jargões técnicos desnecessários. Você aprende enquanto saboreia, em um ambiente sem pressão e completamente acolhedor.',
  },
  {
    q: 'Há flexibilidade de horários? Posso chegar ou partir em outro horário?',
    a: 'Totalmente flexível! Podemos ajustar a saída para as 08:00, 09:00 ou 10:00 conforme sua preferência. O retorno também pode ser mais cedo ou mais tarde. Se quiser estender o wine bar na AdegaMãe, podemos reorganizar o itinerário. Basta comunicar com antecedência via WhatsApp.',
  },
  {
    q: 'Qual é a política de cancelamento?',
    a: '30% de sinal para confirmação da reserva. Cancelamento gratuito até 45 dias antes da data com reembolso integral do sinal. Entre 45 e 20 dias: 50% de reembolso. Menos de 20 dias: sem reembolso. Reagendamento disponível sem custo até 30 dias antes da data.',
  },
  {
    q: 'A viagem cansa? Há muito tempo de carro?',
    a: 'Não! São apenas 30-40 minutos de carro para cada local — uma das nossas experiências mais confortáveis. Entre Bucelas e Torres Vedras são cerca de 45 minutos com vistas bonitas. Motorista privado cuida de tudo, sem stress de trânsito ou estacionamento. Uma experiência verdadeiramente relaxante.',
  },
  {
    q: 'Os vinhos e o almoço estão incluídos no preço?',
    a: '100% incluídos! As provas na Quinta das Murgas e na AdegaMãe, o almoço gastronômico com harmonização e todos os traslados estão no preço fixo de €290/pessoa. Não há nenhum custo adicional surpresa. O único extra opcional é a compra de vinhos na loja das adegas, se desejar levar garrafas para casa.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Lisboa1DiaPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = 'Vinhos Atlânticos Lisboa — EuroWineExperience';
  }, []);

  const toggleFaq = (idx) => setOpenFaq(openFaq === idx ? null : idx);

  return (
    <div className="min-h-screen bg-white pt-20">

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMG}
            alt="Vinhedos verdes da Região de Lisboa com costa atlântica ao fundo"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/88 via-green-900/72 to-teal-900/60" />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Decorative blurs */}
        <div className="absolute top-24 right-12 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-24 left-8 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-24 text-center max-w-5xl">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-7">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-white text-sm font-medium">Pacote Premium · Full Day · Murgas + AdegaMãe</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Vinhos Atlânticos — Uma Experiência Elegante e Leve
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Descubra os melhores vinhos brancos atlânticos da Região de Lisboa em um dia perfeito e descontraído.
          </p>

          {/* Price badge */}
          <div className="inline-block bg-amber-500/20 border border-amber-400/40 backdrop-blur-sm text-amber-200 text-2xl font-bold px-8 py-3 rounded-full mb-10">
            A partir de €290 por pessoa
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWA}
              data-testid="hero-whatsapp-cta"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Quero Reservar via WhatsApp
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('itinerario').scrollIntoView({ behavior: 'smooth' })}
              data-testid="hero-see-itinerary"
              className="border-2 border-white text-white hover:bg-white hover:text-green-900 px-8 py-6 text-lg font-semibold backdrop-blur-sm bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Ver Itinerário Completo
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          QUICK FACTS BAR
      ═══════════════════════════════════════════════════════ */}
      <section className="py-10 bg-gradient-to-r from-red-700 to-red-900 text-white" data-testid="quick-facts-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto text-center">
            {[
              { icon: Calendar,  label: '1 Dia Completo',           sub: '09:00 às 18:00' },
              { icon: Wine,      label: '2 Vinícolas Premium',      sub: 'Murgas + AdegaMãe' },
              { icon: Car,       label: 'Motorista Privado',         sub: 'Especialista na região' },
              { icon: Utensils,  label: '1 Almoço Gourmet',          sub: 'Com harmonização' },
              { icon: Sparkles,  label: '100% Personalizado',        sub: 'Ideal para casais' },
            ].map((fact, i) => (
              <div key={i} data-testid={`quick-fact-${i}`} className="flex flex-col items-center gap-2">
                <div className="bg-white/15 rounded-xl p-3 mb-1">
                  <fact.icon className="h-6 w-6 text-amber-300" />
                </div>
                <div className="font-bold text-sm md:text-base leading-snug">{fact.label}</div>
                <div className="text-white/70 text-xs">{fact.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ITINERARY
      ═══════════════════════════════════════════════════════ */}
      <section id="itinerario" className="py-20 bg-gradient-to-br from-amber-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">Roteiro Detalhado</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Um Dia, Três Momentos Atlânticos
            </h2>
            <p className="text-lg text-gray-600">
              Um dia leve e elegante pelos melhores vinhos brancos da Região de Lisboa, com tempo para absorver a paisagem e a história de cada lugar.
            </p>
          </div>

          {/* Stop cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {itinerary.map((stop) => (
              <div
                key={stop.day}
                data-testid={`itinerary-day-${stop.day}`}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Colored header */}
                <div className={`bg-gradient-to-br ${stop.gradient} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">{stop.label}</span>
                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">{stop.price}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{stop.title}</h3>
                </div>

                {/* Stops */}
                <div className="p-6 space-y-4 flex-1">
                  {stop.stops.map((item, si) => (
                    <div key={si} className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-red-700 rounded-full" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                        <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={trackWA} data-testid={`day-${stop.day}-cta`}>
                    <Button size="sm" className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold transition-all duration-300">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Reservar Esta Experiência
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          INCLUSIONS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100">O que está incluído</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tudo que Você Precisa
            </h2>
            <p className="text-lg text-gray-600">
              Cuidamos de todos os detalhes para que você só precise se preocupar em aproveitar cada momento.
            </p>
          </div>

          {/* Category cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-14">
            {inclusions.map((inc, i) => (
              <div
                key={i}
                data-testid={`inclusion-${i}`}
                className="bg-gradient-to-br from-red-50 to-amber-50 rounded-2xl p-6 border border-red-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-red-700 rounded-xl p-3 w-fit mb-4">
                  <inc.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{inc.label}</h3>
                <ul className="space-y-2">
                  {inc.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-red-700 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Full list banner */}
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden bg-gradient-to-r from-red-700 to-red-900 rounded-2xl p-8 md:p-10 text-white">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 pointer-events-none" />
              <h3 className="text-2xl font-bold mb-6 text-center">Resumo Completo das Inclusões</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Motorista privado durante todo o dia',
                  'Visitas a 2 vinícolas premium (Murgas + AdegaMãe)',
                  '2 provas completas (Arinto + seleção AdegaMãe)',
                  '1 almoço harmonizado com vinhos atlânticos',
                  'Traslados Lisboa ↔ Bucelas ↔ Torres Vedras ↔ Lisboa',
                  'Experiência personalizada (máximo 6 pessoas)',
                  'Flexibilidade total no itinerário',
                  'Recomendações personalizadas de vinho',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-amber-300 flex-shrink-0 mt-0.5" />
                    <span className="text-white/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WINE CELLAR VISUAL BREAK
      ═══════════════════════════════════════════════════════ */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={BARREL_IMG}
          alt="Adega moderna da AdegaMãe em Torres Vedras"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-transparent to-red-950/80" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-amber-300 text-sm font-semibold uppercase tracking-widest mb-3">A frescura do Atlântico em cada gole</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
              "Os vinhos brancos atlânticos são o segredo mais fresco de Portugal."
            </h2>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/10 border border-white/20">Por que nos escolher</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Além do Tour Comum
            </h2>
            <p className="text-lg text-white/70">
              Não somos um serviço turístico genérico. Somos especialistas em enoturismo premium com acesso a experiências que você não encontra em nenhum guia.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyUs.map((item, i) => (
              <div
                key={i}
                data-testid={`why-us-${i}`}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="bg-amber-500/20 rounded-xl p-3 w-fit mb-4">
                  <item.icon className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FAQ ACCORDION
      ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-amber-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-14">
              <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">Perguntas Frequentes</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Tem Dúvidas?
              </h2>
              <p className="text-lg text-gray-600">
                Respondemos as perguntas mais comuns sobre a experiência de vinhos atlânticos em Lisboa.
              </p>
            </div>

            {/* Accordion */}
            <div className="space-y-4" data-testid="faq-section">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    data-testid={`faq-toggle-${idx}`}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-red-50 transition-colors"
                  >
                    <span className="text-base font-semibold text-gray-900 pr-4 leading-snug">{faq.q}</span>
                    <div className="flex-shrink-0">
                      {openFaq === idx
                        ? <ChevronUp className="h-5 w-5 text-red-700" />
                        : <ChevronDown className="h-5 w-5 text-red-700" />}
                    </div>
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed border-t border-gray-100 pt-4 text-sm">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* FAQ bottom CTA */}
            <div className="mt-12 text-center bg-gradient-to-r from-red-700 to-amber-700 rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-3">Ainda tem dúvidas?</h3>
              <p className="mb-6 text-white/90">Nossa equipe está pronta para ajudar a criar a experiência perfeita para você</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWA}
                data-testid="faq-whatsapp-cta"
              >
                <Button className="bg-white text-red-700 hover:bg-gray-100 font-semibold px-8 py-5 shadow-lg transition-all duration-300 hover:scale-105">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <Badge className="mb-4 bg-red-100 text-red-800 hover:bg-red-100">Vagas Limitadas</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Pronto para Sentir o Atlântico?
          </h2>
          <p className="text-lg text-gray-600 mb-5">
            Um dia leve e inesquecível pelos vinhos atlânticos de Lisboa começa com uma mensagem. Grupos de máximo 6 pessoas — disponibilidade limitada.
          </p>
          <div className="text-3xl font-bold text-red-700 mb-10">
            A partir de €290 / pessoa
          </div>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWA}
              data-testid="final-whatsapp-cta"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-6 w-6" />
                Reservar Agora via WhatsApp
              </Button>
            </a>
            <a href={`mailto:${companyInfo.email}`} data-testid="final-email-cta">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-red-700 text-red-700 hover:bg-red-50 px-10 py-7 text-lg font-bold transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                Enviar Email
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-green-600" />
              <span>Cancelamento gratuito até 45 dias</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-red-700" />
              <span>Máximo 6 pessoas por grupo</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="h-4 w-4 text-blue-600" />
              <span>Perfeito para iniciantes em vinho</span>
            </div>
          </div>

          {/* Back-to-site link */}
          <p className="text-sm text-gray-400">
            Conheça mais experiências no nosso site:{' '}
            <Link to="/experiencias" className="text-red-700 hover:underline font-medium" data-testid="back-to-experiences">
              Ver Todas as Experiências
            </Link>
          </p>
        </div>
      </section>

    </div>
  );
};

export default Lisboa1DiaPage;
