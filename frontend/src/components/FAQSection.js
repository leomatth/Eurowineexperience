import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { faqs } from '../data/mockData';

const FAQSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.faq.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.faq.subtitle}
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-red-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openFaq === faq.id ? (
                      <ChevronUp className="h-5 w-5 text-red-700" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-red-700" />
                    )}
                  </div>
                </button>
                
                {openFaq === faq.id && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Help CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-red-700 to-amber-700 rounded-xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-3">Ainda tem dúvidas?</h3>
            <p className="mb-6 text-white/90">
              Nossa equipe está pronta para ajudar você a criar a experiência perfeita
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
