
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
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '160px', fontWeight: '900', color: '#000', margin: '0', lineHeight: '1' }}>403</h1>
        <p style={{ color: '#999', fontSize: '14px', marginTop: '24px' }}>
          Доступ на <a href="https://dmsu.gov.ua/" style={{ color: '#999' }}>https://dmsu.gov.ua/</a> запрещен в вашем регионе
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