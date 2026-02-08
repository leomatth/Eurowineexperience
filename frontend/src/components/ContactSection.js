import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useToast } from '../hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { companyInfo, packages } from '../data/mockData';

const ContactSection = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePackageChange = (value) => {
    setFormData(prev => ({ ...prev, package: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - simulate API call
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Verifique seu email.",
      });
      setFormData({ name: '', email: '', phone: '', package: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Gostaria de saber mais sobre os pacotes de enoturismo em Portugal.`
    );
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/\+/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Envie sua Mensagem</CardTitle>
                <CardDescription>Preencha o formulário e retornaremos em até 24h</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">{t.contact.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome completo"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">{t.contact.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">{t.contact.phone}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+351 XXX XXX XXX"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="package">{t.contact.package}</Label>
                    <Select value={formData.package} onValueChange={handlePackageChange}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder={t.contact.selectPackage} />
                      </SelectTrigger>
                      <SelectContent>
                        {packages.map((pkg) => (
                          <SelectItem key={pkg.id} value={pkg.name}>
                            {pkg.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">{t.contact.message}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos mais sobre suas preferências..."
                      rows={4}
                      required
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-700 hover:bg-red-800 text-white py-6 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t.contact.send}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & WhatsApp */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-red-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Telefone / WhatsApp</p>
                      <a href={`tel:${companyInfo.phone}`} className="text-red-700 hover:underline">
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-red-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href={`mailto:${companyInfo.email}`} className="text-red-700 hover:underline">
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-red-700" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Localização</p>
                      <p className="text-gray-600">Lisboa, Portugal</p>
                      <p className="text-sm text-gray-500 mt-1">Atendemos toda região de Lisboa e arredores</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp CTA */}
              <Card className="shadow-xl border-0 bg-gradient-to-br from-green-50 to-emerald-50">
                <CardContent className="p-8 text-center">
                  <div className="bg-green-500 text-white p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <MessageCircle className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Preferência por WhatsApp?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t.contact.whatsappText}
                  </p>
                  <Button
                    onClick={openWhatsApp}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    {t.contact.whatsappButton}
                  </Button>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="shadow-xl border-0 overflow-hidden">
                <div className="h-64 bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99372.63799227693!2d-9.226929749999999!3d38.7436266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisboa%2C%20Portugal!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Lisboa, Portugal"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
