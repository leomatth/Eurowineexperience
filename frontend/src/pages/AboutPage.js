import { Trophy, Users, Globe, Heart, MapPin, Phone, Mail, Instagram, Linkedin, Facebook, Star } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const AboutPage = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Paixão pelo Vinho",
      description: "Cada experiência é curada com dedicação e conhecimento profundo dos vinhos portugueses"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Experiências Personalizadas",
      description: "Adaptamos cada tour às preferências individuais de nossos clientes"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Alcance Global",
      description: "Atendemos visitantes de mais de 40 países com guias multilíngues"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Qualidade Premium",
      description: "Parcerias exclusivas com as melhores quintas e hospedagens de Portugal"
    }
  ];

  const achievements = [
    { number: "15K+", label: "Viajantes Satisfeitos" },
    { number: "50+", label: "Vinícolas Parceiras" },
    { number: "8", label: "Anos de Experiência" },
    { number: "4.9⭐", label: "Avaliação Média" }
  ];

  const team = [
    {
      name: "Sofia Martins",
      role: "Fundadora & Sommelier",
      bio: "Especialista em vinhos com 12 anos de experiência"
    },
    {
      name: "João Paulo",
      role: "Diretor de Experiências",
      bio: "Expert em enoturismo com formação internacional"
    },
    {
      name: "Maria García",
      role: "Gerente de Hospedagens",
      bio: "Especialista em turismo de luxo e sustentabilidade"
    },
    {
      name: "Carlos Silva",
      role: "Guia Premium",
      bio: "Sommelier certificado fluente em 5 idiomas"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre EuroWineExperience
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8">
              Transformando viagens em experiências inesquecíveis através da excelência em enoturismo
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Badge className="px-6 py-2 bg-white/20 text-white text-base">Desde 2016</Badge>
              <Badge className="px-6 py-2 bg-white/20 text-white text-base">Portugália</Badge>
              <Badge className="px-6 py-2 bg-white/20 text-white text-base">Prêmio de Excelência 2023</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Nossa Missão</h2>
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-amber-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Visão</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ser a referência internacional em enoturismo de experiência, conectando apaixonados por vinho com as melhores quintas e tradições portuguesas através de vivências autênticas e memoráveis.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-red-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Missão</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Oferecer experiências de vinho e hospitalidade de classe mundial que educam, inspiram e encantam, promovendo o patrimônio vinícola português e gerando oportunidades econômicas para comunidades locais.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-700 mb-4 mx-auto">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Números que Falam</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-8 rounded-lg bg-gradient-to-br from-red-50 to-amber-50 border border-red-100">
                <div className="text-4xl md:text-5xl font-bold text-red-700 mb-3">
                  {achievement.number}
                </div>
                <p className="text-gray-700 font-semibold">{achievement.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Nossa Equipe</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-48 bg-gradient-to-br from-red-700 to-red-900"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-red-700 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Quer Conhecer Mais?</h2>
            <p className="text-xl text-red-100 mb-8">
              Entre em contato conosco para discutir sua próxima experiência de enoturismo
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-red-700 hover:bg-red-50 px-8 py-3">
                Entre em Contato
              </Button>
              <Button className="bg-red-600 hover:bg-red-500 border border-white px-8 py-3">
                Explorar Experiências
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-center text-gray-900 font-semibold mb-6">Acompanhe-nos nas Redes Sociais</h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/eurowineexperiencie/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-700 hover:bg-red-700 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
