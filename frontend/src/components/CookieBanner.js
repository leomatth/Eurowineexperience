import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Cookie } from 'lucide-react';

const CookieBanner = ({ onOpenCookiePolicy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900/95 backdrop-blur-sm border-t border-white/10 shadow-2xl">
      <div className="container mx-auto flex flex-col sm:flex-row items-center gap-4 max-w-5xl">
        <Cookie className="h-6 w-6 text-amber-400 flex-shrink-0 hidden sm:block" />
        <p className="text-gray-300 text-sm flex-1 text-center sm:text-left">
          Utilizamos cookies essenciais para o funcionamento do site. Ao continuar navegando, você concorda com a nossa{' '}
          <button
            onClick={onOpenCookiePolicy}
            className="text-amber-400 hover:text-amber-300 underline"
          >
            Política de Cookies
          </button>.
        </p>
        <div className="flex gap-2 flex-shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={handleReject}
            className="border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"
          >
            Recusar
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="bg-red-700 hover:bg-red-800 text-white"
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
