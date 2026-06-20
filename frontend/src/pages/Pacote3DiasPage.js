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
const WHATSAPP_URL = `https://wa.me/${companyInfo.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a experiência de 3 dias.')}`;
const trackWA = () => trackWhatsAppClick('pacote_3_dias');

const HERO_IMG   = 'https://images.pexels.com/photos/11033039/pexels-photo-11033039.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600';
const BARREL_IMG = 'https://images.unsplash.com/photo-1660903028319-238d7395f81d?auto=format&fit=crop&w=1200&q=75';

// ─── Static data ──────────────────────────────────────────────────────────────
const itinerary = [
  {
    day: 1,
    title: 'Colares · Setúbal · Azeitão',
    price: '€185/pessoa',
    gradient: 'from-red-700 to-red-900',
    stops: [
      { name: 'Região de Colares', desc: 'Vinhos de areia com castas autóctones — um dos terroirs mais únicos de Portugal' },
      { name: 'Adega Regional de Colares', desc: 'Visita guiada à adega histórica e suas galerias centenárias' },
      { name: 'Transferência para Azeitão', desc: 'Viagem panorâmica pelo litoral de Setúbal' },
      { name: 'José Maria da Fonseca', desc: 'Visita às adegas históricas + prova de 2 vinhos icônicos' },
      { name: 'Almoço Wine Corner by JMF', desc: 'Harmonização gastronômica premiada com os melhores vinhos da casa' },
    ],
  },
  {
    day: 2,
    title: 'Alentejo Premium',
    price: '€255/pessoa',
    gradient: 'from-amber-700 to-amber-900',
    stops: [
      { name: 'Herdade do Esporão', desc: 'Referência mundial dos vinhos portugueses — 2.500 ha de produção biológica' },
      { name: 'Degustação Premium Esporão', desc: 'Prova de 5 vinhos selecionados nas modernas adegas' },
      { name: 'Almoço Gastronômico Harmonizado', desc: 'Menu sazonal com ingredientes das hortas biológicas do Esporão' },
      { name: 'Adega Cartuxa — Évora', desc: 'Fundada em 1776: casa do lendário Pêra-Manca. Visita + prova de vinhos icônicos' },
    ],
  },
  {
    day: 3,
    title: 'Região de Lisboa',
    price: '€215/pessoa',
    gradient: 'from-emerald-800 to-emerald-950',
    stops: [
      { name: 'Quinta das Murgas — Bucelas', desc: 'Arinto premium: visita guiada à quinta familiar + prova dos brancos atlânticos' },
      { name: 'Prova Quinta das Murgas', desc: 'Degustação comentada dos premiados brancos DOC Bucelas' },
      { name: 'Almoço na AdegaMãe', desc: 'Almoço com vista panorâmica + harmonização de vinhos' },
      { name: 'AdegaMãe — Torres Vedras', desc: 'Visita completa + prova de 4 vinhos + wine bar experience na adega moderna atlântica' },
    ],
  },
];

const inclusions = [
  {
    icon: Car,
    label: 'Transporte',
    items: [
      'Motorista privado durante os 3 dias',
      'Traslados Lisboa ↔ regiões ↔ hotéis',
      'Van executiva climatizada (até 8 pax)',
    ],
  },
  {
    icon: Wine,
    label: 'Vinhos',
    items: [
      'Visitas guiadas a 6 vinícolas premium',
      'Provas comentadas em cada adega',
      'Acesso VIP a rótulos exclusivos',
    ],
  },
  {
    icon: Utensils,
    label: 'Gastronomia',
    items: [
      '3 almoços com harmonização de vinhos',
      'Chefs premiados e ingredientes selecionados',
      'Menus sazonais com produtos locais',
    ],
  },
  {
    icon: Star,
    label: 'Experiência',
    items: [
      'Máximo 6 pessoas por grupo',
      'Itinerário 100% customizável',
      'Certificado + recomendações personalizadas',
    ],
  },
];

const whyUs = [
  { icon: MapPin,    title: 'Vinícolas Cuidadosamente Selecionadas', desc: 'Não tours genéricos. Cada vinícola foi escolhida pela história, qualidade e experiência única — impossível replicar sozinho.' },
  { icon: Car,       title: 'Motorista Privado Dedicado',             desc: 'Máximo conforto e segurança. Sem depender de transporte público, sem preocupações. Apenas relaxar e apreciar.' },
  { icon: Utensils,  title: 'Almoços com Chefs Premiados',            desc: 'Cada refeição é uma experiência gastronômica harmonizada com os melhores vinhos locais, criada por chefs reconhecidos.' },
  { icon: Award,     title: 'Acesso Exclusivo',                       desc: 'Experiências que turistas normais não têm: provas de rótulos raros, bastidores das adegas e momentos privados.' },
  { icon: Sparkles,  title: 'Itinerário 100% Customizável',           desc: 'Cada grupo é único. Adaptamos o roteiro às suas preferências, ritmo e gostos pessoais sem custo adicional.' },
  { icon: Shield,    title: 'Suporte 24/7',                           desc: 'Nossa equipe está disponível durante toda a viagem para garantir que tudo corra perfeitamente.' },
];

const faqs = [
  {
    q: 'Qual é o nível de dificuldade física da viagem?',
    a: 'A experiência é tranquila e acessível. As visitas envolvem caminhadas leves pelos vinhedos e adegas (superfícies planas ou com poucas inclinações). Não há atividades físicas intensas. Pessoas com mobilidade reduzida devem informar na reserva para ajustarmos o itinerário.',
  },
  {
    q: 'Posso customizar o itinerário conforme meus gostos?',
    a: 'Sim, absolutamente! O itinerário é 100% flexível. Se prefere mais tempo numa região, quer substituir uma vinícola por outra, ou adicionar atividades culturais em Évora — basta comunicar com antecedência via WhatsApp e personalizamos tudo para você.',
  },
  {
    q: 'E se eu tiver restrições alimentares ou alergias?',
    a: 'Sem problema. Informando com antecedência, comunicamos todos os restaurantes e vinícolas. Os chefs parceiros têm experiência com dietas vegetarianas, veganas, sem glúten e outras restrições. Nenhum cliente fica sem opções de qualidade.',
  },
  {
    q: 'Posso trazer meu cônjuge/família?',
    a: 'Claro! A experiência é ideal para casais, grupos de amigos e famílias. O grupo máximo é de 6 pessoas, garantindo uma atmosfera íntima e personalizada. Cada pessoa paga €850 por pessoa — o preço se torna mais atrativo quanto maior o grupo.',
  },
  {
    q: 'Qual é a melhor época do ano para essa experiência?',
    a: 'A experiência é disponível durante todo o ano e cada época tem seu charme. Setembro/outubro é a época da vindima (colheita), com atividades especiais nas vinícolas. Primavera (abril/maio) e outono oferecem o clima mais agradável. Verão é o mais quente, mas as adegas são frescas internamente.',
  },
  {
    q: 'Qual é a política de cancelamento e reembolso?',
    a: 'Cancelamento gratuito até 45 dias antes com reembolso integral (sinal de 30%). Entre 45 e 20 dias: 50% de reembolso. Menos de 20 dias: sem reembolso. Em emergências médicas comprovadas, analisamos caso a caso. Reagendamento sem custo até 30 dias antes.',
  },
  {
    q: 'O motorista fala inglês?',
    a: 'Sim! Nossos motoristas são habituados a clientes internacionais e comunicam-se em inglês e espanhol. Podemos incluir um guia especializado em enoturismo fluente no idioma de sua preferência por um custo adicional de €45/pessoa.',
  },
  {
    q: 'Há seguro de viagem incluído?',
    a: 'A experiência inclui seguro de responsabilidade civil para a van e o motorista. Recomendamos que cada participante adquira um seguro de viagem pessoal cobrindo cancelamento, bagagem e assistência médica, especialmente para clientes internacionais.',
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
const Pacote3DiasPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    document.title = 'Experiência 3 Dias em Portugal — EuroWineExperience';
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
            alt="Vinhedos em socalcos no Vale do Douro, Portugal"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-950/88 via-red-900/72 to-amber-900/60" />
          <div className="absolute inset-0 bg-black/15" />
        </div>

        {/* Decorative blurs */}
        <div className="absolute top-24 right-12 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-24 left-8 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-24 text-center max-w-5xl">
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-7">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span className="text-white text-sm font-medium">Pacote Premium · Máx 6 Pessoas · Enoturismo Exclusivo</span>
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Descubra os Melhores Vinhos de Portugal em 3 Dias
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Uma jornada exclusiva com motorista privado, vinícolas renomadas e experiências gastronômicas inesquecíveis.
          </p>

          {/* Price badge */}
          <div className="inline-block bg-amber-500/20 border border-amber-400/40 backdrop-blur-sm text-amber-200 text-2xl font-bold px-8 py-3 rounded-full mb-10">
            A partir de €850 por pessoa
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
              className="border-2 border-white text-white hover:bg-white hover:text-red-800 px-8 py-6 text-lg font-semibold backdrop-blur-sm bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
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
              { icon: Calendar,  label: '3 Dias Completos',       sub: 'Experiência imersiva' },
              { icon: Wine,      label: '4–6 Vinícolas Premium',  sub: 'Cuidadosamente selecionadas' },
              { icon: Car,       label: 'Motorista Privado',       sub: 'Exclusivo e dedicado' },
              { icon: Utensils,  label: '3 Almoços Gourmet',       sub: 'Com harmonização' },
              { icon: Sparkles,  label: '100% Personalizado',      sub: 'Feito para você' },
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
              3 Dias, 3 Regiões Únicas
            </h2>
            <p className="text-lg text-gray-600">
              Cada dia é cuidadosamente planejado para oferecer o melhor do enoturismo português, com tempo para absorver cada experiência sem pressa.
            </p>
          </div>

          {/* Day cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {itinerary.map((day) => (
              <div
                key={day.day}
                data-testid={`itinerary-day-${day.day}`}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Colored header */}
                <div className={`bg-gradient-to-br ${day.gradient} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/70 text-xs font-semibold uppercase tracking-widest">Dia {day.day}</span>
                    <span className="bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full">{day.price}</span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight">{day.title}</h3>
                </div>

                {/* Stops */}
                <div className="p-6 space-y-4 flex-1">
                  {day.stops.map((stop, si) => (
                    <div key={si} className="flex gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-red-700 rounded-full" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{stop.name}</div>
                        <div className="text-gray-500 text-xs mt-0.5 leading-relaxed">{stop.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Day CTA */}
                <div className="px-6 pb-6">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={trackWA} data-testid={`day-${day.day}-cta`}>
                    <Button size="sm" className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold transition-all duration-300">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Reservar Dia {day.day}
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
                  'Motorista privado durante os 3 dias completos',
                  'Visitas guiadas a 6 vinícolas premium (Colares, JMF, Esporão, Cartuxa, Murgas, AdegaMãe)',
                  '3 almoços gastronômicos com harmonização de vinhos',
                  'Traslados entre Lisboa, regiões e hotéis',
                  'Experiência intimista — máximo 6 pessoas por grupo',
                  'Flexibilidade total no itinerário',
                  'Certificado de participação',
                  'Recomendações de viagem personalizadas',
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
          alt="Adega com barricas de carvalho — vinhos envelhecendo"
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-transparent to-red-950/80" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-amber-300 text-sm font-semibold uppercase tracking-widest mb-3">Uma experiência para recordar</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white max-w-xl">
              "Os melhores vinhos só se revelam quando descobertos no lugar certo."
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
                Respondemos as perguntas mais comuns sobre a experiência de 3 dias em Portugal.
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
            Pronto para Descobrir Portugal?
          </h2>
          <p className="text-lg text-gray-600 mb-5">
            Sua jornada de 3 dias pelos melhores vinhos de Portugal começa com uma mensagem. Grupos de máximo 6 pessoas — disponibilidade limitada.
          </p>
          <div className="text-3xl font-bold text-red-700 mb-10">
            A partir de €850 / pessoa
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
              <span>Motorista fala inglês e espanhol</span>
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

export default Pacote3DiasPage;
