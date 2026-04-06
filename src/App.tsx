
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import Captcha from "./pages/Captcha";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const BlockedPage = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f0f0f' }}>
      <div style={{ textAlign: 'center', padding: '40px', maxWidth: '480px' }}>
        <div style={{ fontSize: '64px', marginBottom: '24px' }}>🚫</div>
        <h1 style={{ color: '#fff', fontSize: '28px', fontWeight: '700', marginBottom: '12px' }}>Доступ ограничен</h1>
        <p style={{ color: '#999', fontSize: '16px', lineHeight: '1.6' }}>
          К сожалению, наш сервис недоступен в вашем регионе.
        </p>
      </div>
    </div>
  );
};

const App = () => {
  const [blocked, setBlocked] = useState<boolean | null>(null);
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    fetch('https://api.ipstack.com/check?access_key=48e0958509396c4861f03ac9c834d1b9&fields=country_code', { signal: AbortSignal.timeout(7000) })
      .then(r => r.json())
      .then(data => {
        const country = data.country_code;
        setBlocked(country === 'RU');
      })
      .catch(() => setBlocked(false));
  }, []);

  if (blocked === null) return null;
  if (blocked) return <BlockedPage />;

  if (!passed) return <Captcha onPass={() => setPassed(true)} />;

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;