import { Wine, Mail, Phone, MapPin, Facebook, Instagram, Youtube, LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import { useState } from 'react';
import { useToast } from '../hooks/use-toast';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';
import { companyInfo } from '../data/mockData';
import CookieBanner from './CookieBanner';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'c17637b0-5784-45aa-b946-6f78b24cef65',
          subject: 'Nova inscrição na Newsletter',
          email: email,
          message: `Novo inscrito na newsletter: ${email}`,
        }),
      });
      const data = await response.json();
      if (data.success) {
        toast({
          title: "Inscrição realizada!",
          description: "Você receberá nossas novidades e ofertas exclusivas.",
        });
        setEmail('');
      } else {
        throw new Error('Falha');
      }
    } catch {
      toast({
        title: "Erro na inscrição",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wine className="h-8 w-8 text-amber-400" strokeWidth={2.5} />
              <div>
                <h3 className="text-lg md:text-2xl font-bold">EuroWineExperience</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex gap-3">
              <a
                href={companyInfo.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-red-700 p-3 rounded-lg transition-colors"
                title="Siga-nos no Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={companyInfo.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-red-700 p-3 rounded-lg transition-colors"
                title="Siga-nos no Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={companyInfo.socialMedia.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-red-700 p-3 rounded-lg transition-colors"
                title="Inscreva-se no YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href={companyInfo.socialMedia.linktree}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-red-700 p-3 rounded-lg transition-colors"
                title="Linktree"
              >
                <LinkIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/experiencias"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.nav.packages}
                </Link>
              </li>
              <li>
                <Link
                  to="/hospedagem"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.nav.accommodations}
                </Link>
              </li>
              <li>
                <Link
                  to="/sobre"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t.nav.about}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                <a href={`tel:${companyInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-300 hover:text-white transition-colors break-all">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  Lisboa, Portugal
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-amber-400">{t.footer.newsletter}</h4>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {t.footer.newsletterText}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.emailPlaceholder}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold"
              >
                {t.footer.subscribe}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} EuroWineExperience. {t.footer.rights}
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button onClick={() => setPrivacyOpen(true)} className="hover:text-white transition-colors">
                Política de Privacidade
              </button>
              <button onClick={() => setTermsOpen(true)} className="hover:text-white transition-colors">
                Termos de Uso
              </button>
              <button onClick={() => setCookiesOpen(true)} className="hover:text-white transition-colors">
                Política de Cookies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Banner */}
      <CookieBanner onOpenCookiePolicy={() => setCookiesOpen(true)} />

      {/* Política de Privacidade */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] p-0">
          <DialogHeader className="px-6 pt-6 pb-2">
            <DialogTitle className="text-xl font-bold">Política de Privacidade</DialogTitle>
          </DialogHeader>
          <ScrollArea className="px-6 pb-6 max-h-[70vh]">
            <div className="prose prose-sm max-w-none text-gray-700 space-y-4 pr-4">
              <p className="text-xs text-gray-500">Última atualização: 29 de março de 2026</p>

              <p>A <strong>EuroWineExperience</strong> ("nós", "nosso") compromete-se a proteger a privacidade dos utilizadores do site europawineexperience.com ("Site"). Esta política descreve como recolhemos, utilizamos e protegemos os seus dados pessoais, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD — Regulamento (UE) 2016/679) e a Lei n.º 58/2019 (Lei de Proteção de Dados Pessoais portuguesa).</p>

              <h3 className="font-semibold text-gray-900">1. Responsável pelo Tratamento</h3>
              <p>EuroWineExperience<br/>E-mail: {companyInfo.email}<br/>Telefone: {companyInfo.phone}<br/>Sede: Lisboa, Portugal</p>

              <h3 className="font-semibold text-gray-900">2. Dados Pessoais Recolhidos</h3>
              <p>Recolhemos apenas os dados que o utilizador fornece voluntariamente:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Formulário de contacto:</strong> nome, e-mail, telefone, mensagem e pacote de interesse.</li>
                <li><strong>Newsletter:</strong> endereço de e-mail.</li>
              </ul>
              <p>Não recolhemos dados sensíveis, dados de menores de idade nem efetuamos decisões automatizadas ou profiling.</p>

              <h3 className="font-semibold text-gray-900">3. Finalidades do Tratamento</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Responder a pedidos de contacto e de informação sobre experiências enoturísticas.</li>
                <li>Enviar comunicações de marketing (newsletter), mediante consentimento prévio.</li>
                <li>Melhorar a qualidade do serviço prestado.</li>
              </ul>

              <h3 className="font-semibold text-gray-900">4. Base Jurídica</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Consentimento</strong> (art. 6.º, n.º 1, al. a) do RGPD) — para envio de newsletter e recolha de dados através do formulário de contacto.</li>
                <li><strong>Interesse legítimo</strong> (art. 6.º, n.º 1, al. f) do RGPD) — para responder a solicitações iniciadas pelo utilizador.</li>
              </ul>

              <h3 className="font-semibold text-gray-900">5. Partilha de Dados</h3>
              <p>Os dados do formulário de contacto e da newsletter são processados pelo serviço <strong>Web3Forms</strong> (subprocessador), que atua como processador de dados em nosso nome. Não vendemos, cedemos ou partilhamos dados pessoais com terceiros para fins comerciais.</p>

              <h3 className="font-semibold text-gray-900">6. Conservação dos Dados</h3>
              <p>Os dados pessoais são conservados pelo período estritamente necessário para cumprir as finalidades para as quais foram recolhidos. Os dados de contacto são eliminados no prazo máximo de 24 meses após o último contacto. O utilizador pode solicitar a eliminação a qualquer momento.</p>

              <h3 className="font-semibold text-gray-900">7. Direitos do Titular dos Dados</h3>
              <p>Nos termos do RGPD, o utilizador tem o direito de:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Aceder aos seus dados pessoais.</li>
                <li>Retificar dados inexatos ou incompletos.</li>
                <li>Solicitar a eliminação dos dados ("direito ao esquecimento").</li>
                <li>Limitar o tratamento dos dados.</li>
                <li>Portabilidade dos dados.</li>
                <li>Opor-se ao tratamento.</li>
                <li>Retirar o consentimento a qualquer momento.</li>
              </ul>
              <p>Para exercer estes direitos, contacte-nos pelo e-mail <strong>{companyInfo.email}</strong>.</p>

              <h3 className="font-semibold text-gray-900">8. Segurança</h3>
              <p>Adotamos medidas técnicas e organizativas adequadas para proteger os dados pessoais contra acesso não autorizado, perda ou destruição, incluindo transmissão encriptada (HTTPS/TLS).</p>

              <h3 className="font-semibold text-gray-900">9. Reclamações</h3>
              <p>Se considerar que o tratamento dos seus dados pessoais viola o RGPD, tem o direito de apresentar reclamação junto da Comissão Nacional de Proteção de Dados (CNPD) — <strong>www.cnpd.pt</strong>.</p>

              <h3 className="font-semibold text-gray-900">10. Alterações</h3>
              <p>Reservamo-nos o direito de atualizar esta política a qualquer momento. As alterações serão publicadas nesta página com a data de atualização revista.</p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Termos de Uso */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] p-0">
          <DialogHeader className="px-6 pt-6 pb-2">
            <DialogTitle className="text-xl font-bold">Termos de Uso</DialogTitle>
          </DialogHeader>
          <ScrollArea className="px-6 pb-6 max-h-[70vh]">
            <div className="prose prose-sm max-w-none text-gray-700 space-y-4 pr-4">
              <p className="text-xs text-gray-500">Última atualização: 29 de março de 2026</p>

              <p>Estes Termos de Uso ("Termos") regulam o acesso e a utilização do site europawineexperience.com ("Site"), operado pela <strong>EuroWineExperience</strong> ("nós", "nosso"), com sede em Lisboa, Portugal. Ao aceder e utilizar o Site, o utilizador aceita integralmente estes Termos.</p>

              <h3 className="font-semibold text-gray-900">1. Objeto</h3>
              <p>O Site tem como finalidade a divulgação de experiências de enoturismo em Portugal, incluindo visitas a quintas, provas de vinho, alojamento e atividades conexas. O Site funciona como plataforma informativa e de intermediação de contacto entre o utilizador e os parceiros.</p>

              <h3 className="font-semibold text-gray-900">2. Natureza do Serviço</h3>
              <p>A EuroWineExperience atua como <strong>intermediária</strong> entre o utilizador e os produtores/parceiros vinícolas. As experiências e alojamentos apresentados são prestados diretamente pelos respetivos parceiros. Os preços indicados são meramente informativos e podem variar conforme disponibilidade e sazonalidade.</p>

              <h3 className="font-semibold text-gray-900">3. Reservas e Pagamentos</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>As reservas são efetuadas mediante contacto direto (formulário, e-mail ou WhatsApp).</li>
                <li>A confirmação da reserva depende da disponibilidade do parceiro.</li>
                <li>Os preços apresentados no Site são indicativos e podem não incluir custos adicionais (transporte, seguro, etc.).</li>
                <li>As condições de pagamento e cancelamento são definidas caso a caso com cada parceiro.</li>
              </ul>

              <h3 className="font-semibold text-gray-900">4. Propriedade Intelectual</h3>
              <p>Todo o conteúdo do Site — incluindo textos, imagens, logótipos, design e código — é propriedade da EuroWineExperience ou dos respetivos titulares e encontra-se protegido pela legislação portuguesa e europeia de propriedade intelectual. É proibida a reprodução, distribuição ou modificação sem autorização prévia por escrito.</p>

              <h3 className="font-semibold text-gray-900">5. Responsabilidade</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>A EuroWineExperience envidará todos os esforços para manter as informações atualizadas e corretas, mas não garante a exatidão, completude ou atualidade de todos os conteúdos.</li>
                <li>Não nos responsabilizamos por danos diretos ou indiretos decorrentes da utilização do Site ou de experiências prestadas por parceiros.</li>
                <li>O Site pode conter links para sites de terceiros, pelos quais não somos responsáveis.</li>
              </ul>

              <h3 className="font-semibold text-gray-900">6. Obrigações do Utilizador</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Utilizar o Site de forma lícita e em conformidade com estes Termos.</li>
                <li>Fornecer informações verdadeiras e atualizadas nos formulários.</li>
                <li>Não utilizar o Site para fins ilícitos, fraudulentos ou que prejudiquem terceiros.</li>
                <li>Não tentar aceder a áreas restritas ou comprometer a segurança do Site.</li>
              </ul>

              <h3 className="font-semibold text-gray-900">7. Consumo de Álcool</h3>
              <p>As experiências de enoturismo envolvem degustação de bebidas alcoólicas. O utilizador declara ter idade legal para consumo de álcool em Portugal (18 anos). A EuroWineExperience incentiva o consumo responsável e moderado.</p>

              <h3 className="font-semibold text-gray-900">8. Disponibilidade do Site</h3>
              <p>Não garantimos o funcionamento ininterrupto ou isento de erros do Site. Reservamo-nos o direito de suspender, modificar ou descontinuar o Site, total ou parcialmente, a qualquer momento, sem aviso prévio.</p>

              <h3 className="font-semibold text-gray-900">9. Alterações aos Termos</h3>
              <p>Reservamo-nos o direito de alterar estes Termos a qualquer momento. As alterações entram em vigor na data da sua publicação no Site. O uso continuado do Site após a publicação das alterações constitui aceitação dos novos Termos.</p>

              <h3 className="font-semibold text-gray-900">10. Lei Aplicável e Foro</h3>
              <p>Estes Termos regem-se pela lei portuguesa. Para a resolução de qualquer litígio emergente da utilização do Site, será competente o foro da comarca de Lisboa, com renúncia a qualquer outro.</p>

              <h3 className="font-semibold text-gray-900">11. Contacto</h3>
              <p>Para questões sobre estes Termos, contacte-nos:<br/>E-mail: <strong>{companyInfo.email}</strong><br/>Telefone: <strong>{companyInfo.phone}</strong></p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Política de Cookies */}
      <Dialog open={cookiesOpen} onOpenChange={setCookiesOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] p-0">
          <DialogHeader className="px-6 pt-6 pb-2">
            <DialogTitle className="text-xl font-bold">Política de Cookies</DialogTitle>
          </DialogHeader>
          <ScrollArea className="px-6 pb-6 max-h-[70vh]">
            <div className="prose prose-sm max-w-none text-gray-700 space-y-4 pr-4">
              <p className="text-xs text-gray-500">Última atualização: 29 de março de 2026</p>

              <p>Esta Política de Cookies explica o que são cookies, como os utilizamos no site europawineexperience.com ("Site") e quais as opções disponíveis, em conformidade com a Diretiva 2002/58/CE (Diretiva ePrivacy), o RGPD e a Lei n.º 41/2004 (Lei das Comunicações Eletrónicas portuguesa).</p>

              <h3 className="font-semibold text-gray-900">1. O que são Cookies?</h3>
              <p>Cookies são pequenos ficheiros de texto armazenados no dispositivo do utilizador quando visita um site. São amplamente utilizados para fazer os sites funcionarem, melhorar a experiência do utilizador e fornecer informações aos proprietários do site.</p>

              <h3 className="font-semibold text-gray-900">2. Cookies que Utilizamos</h3>
              <p>O nosso Site utiliza apenas cookies estritamente necessários:</p>
              <table className="w-full text-sm border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-3 py-2 text-left">Cookie</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">Finalidade</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">Duração</th>
                    <th className="border border-gray-200 px-3 py-2 text-left">Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">cookie_consent</td>
                    <td className="border border-gray-200 px-3 py-2">Armazena a preferência de consentimento de cookies do utilizador</td>
                    <td className="border border-gray-200 px-3 py-2">Persistente (localStorage)</td>
                    <td className="border border-gray-200 px-3 py-2">Essencial</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-3 py-2">language</td>
                    <td className="border border-gray-200 px-3 py-2">Armazena o idioma preferido do utilizador</td>
                    <td className="border border-gray-200 px-3 py-2">Persistente (localStorage)</td>
                    <td className="border border-gray-200 px-3 py-2">Essencial</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="font-semibold text-gray-900">3. Cookies de Terceiros</h3>
              <p>Atualmente, <strong>não utilizamos</strong> cookies de terceiros, de análise (analytics), de publicidade ou de rastreamento. Caso venha a implementar ferramentas analíticas no futuro, esta política será atualizada e o consentimento explícito será solicitado.</p>

              <h3 className="font-semibold text-gray-900">4. Base Jurídica</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Cookies essenciais:</strong> são necessários para o funcionamento básico do Site e não requerem consentimento (art. 5.º, n.º 3 da Diretiva ePrivacy).</li>
                <li><strong>Cookies não essenciais:</strong> caso venham a ser implementados, serão sujeitos a consentimento prévio do utilizador.</li>
              </ul>

              <h3 className="font-semibold text-gray-900">5. Como Gerir Cookies</h3>
              <p>O utilizador pode, a qualquer momento:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Aceitar ou recusar cookies através do banner apresentado na primeira visita ao Site.</li>
                <li>Eliminar cookies já armazenados através das configurações do seu navegador.</li>
                <li>Configurar o navegador para bloquear cookies automaticamente.</li>
              </ul>
              <p>A desativação de cookies essenciais pode afetar o funcionamento correto do Site.</p>

              <h3 className="font-semibold text-gray-900">6. localStorage</h3>
              <p>Utilizamos a tecnologia localStorage (armazenamento local do navegador), que funciona de forma semelhante aos cookies, mas os dados permanecem armazenados até serem eliminados manualmente. O localStorage é utilizado neste Site exclusivamente para as preferências indicadas na tabela acima.</p>

              <h3 className="font-semibold text-gray-900">7. Alterações</h3>
              <p>Esta política pode ser atualizada periodicamente. Quaisquer alterações serão publicadas nesta página com a data de revisão atualizada.</p>

              <h3 className="font-semibold text-gray-900">8. Contacto</h3>
              <p>Para questões sobre cookies, contacte-nos:<br/>E-mail: <strong>{companyInfo.email}</strong></p>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
