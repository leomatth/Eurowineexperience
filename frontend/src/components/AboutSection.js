import { Award, Heart, Leaf } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { optimizeImageUrl } from '../lib/utils';

const AboutSection = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const values = [
    {
      icon: <Award className="h-8 w-8" />,
      title: t.about.value1,
      description: t.about.value1Desc,
      color: 'from-amber-500 to-yellow-500'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t.about.value2,
      description: t.about.value2Desc,
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: t.about.value3,
      description: t.about.value3Desc,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.about.title}
            </h2>
            <p className="text-xl text-red-700 font-semibold mb-6">
              {t.about.subtitle}
            </p>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.description2}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.about.description3}
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={optimizeImageUrl("https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTZ8MHwxfHNlYXJjaHwzfHx3aW5lJTIwdGFzdGluZ3xlbnwwfHx8fDE3NzA1NTEyNDR8MA&ixlib=rb-4.1.0&q=85")}
                  alt="Wine Tasting"
                  className="rounded-lg shadow-lg h-48 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={optimizeImageUrl("https://images.unsplash.com/photo-1694781558887-d84d9ba7603f")}
                  alt="Wine Cellar"
                  className="rounded-lg shadow-lg h-48 w-full object-cover mt-8"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={optimizeImageUrl("https://images.pexels.com/photos/16547182/pexels-photo-16547182.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")}
                  alt="Vineyard"
                  className="rounded-lg shadow-lg h-48 w-full object-cover -mt-8"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  src={optimizeImageUrl("https://images.unsplash.com/photo-1763867641182-9ff4cfbcc389")}
                  alt="Restaurant"
                  className="rounded-lg shadow-lg h-48 w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-red-200 to-amber-200 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>

          {/* Values Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t.about.values}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50"
                >
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-6 shadow-lg`}>
                      {value.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Partnership Logos Placeholder */}
          <div className="mt-20 text-center">
            <p className="text-gray-600 mb-8 text-lg font-medium">Nossos Parceiros de Confiança</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <div className="text-2xl font-bold text-gray-400">Quinta das Murgas</div>
              <div className="text-2xl font-bold text-gray-400">Quinta da Bacalhôa</div>
              <div className="text-2xl font-bold text-gray-400">AdegaMãe</div>
              <div className="text-2xl font-bold text-gray-400">Sogrape</div>
              <div className="text-2xl font-bold text-gray-400">VinoTours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
