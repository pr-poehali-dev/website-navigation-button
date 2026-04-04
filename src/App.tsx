
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const BlockedPage = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: '#f5f5f5',
    fontFamily: 'sans-serif'
  }}>
    <div style={{ textAlign: 'center', maxWidth: 400, padding: 32 }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>🚫</div>
      <h1 style={{ fontSize: 22, marginBottom: 12, color: '#333' }}>Доступ обмежено</h1>
      <p style={{ color: '#666', lineHeight: 1.6 }}>Цей ресурс недоступний у вашому регіоні.</p>
    </div>
  </div>
);

const App = () => {
  const [blocked, setBlocked] = useState<boolean | null>(null);

  useEffect(() => {
    // Получаем реальный IP пользователя, затем проверяем страну через бэкенд
    // Пробуем несколько сервисов для получения IP
    const tryFetch = (url: string) =>
      fetch(url, { signal: AbortSignal.timeout(4000) }).then(r => r.json());

    const getIp = (): Promise<string | null> =>
      tryFetch('https://api.ipify.org?format=json').then(d => d.ip)
        .catch(() => tryFetch('https://api4.my-ip.io/v2/ip.json').then(d => d.ip))
        .catch(() => tryFetch('https://ipinfo.io/json').then(d => d.ip))
        .catch(() => null);

    getIp().then(ip => {
      if (!ip) { setBlocked(true); return; }
      tryFetch(`https://functions.poehali.dev/143762e6-0feb-4036-949e-69344e452617?ip=${ip}`)
        .then(data => setBlocked(data.blocked === true))
        .catch(() => setBlocked(true));
    }).catch(() => setBlocked(true));
  }, []);

  if (blocked === null) return null;
  if (blocked) return <BlockedPage />;

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