
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
    const lang = navigator.language || '';
    const langs = navigator.languages || [];
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';

    const ruTimezones = [
      'Europe/Moscow', 'Europe/Kaliningrad', 'Europe/Samara',
      'Asia/Yekaterinburg', 'Asia/Omsk', 'Asia/Krasnoyarsk',
      'Asia/Irkutsk', 'Asia/Yakutsk', 'Asia/Vladivostok',
      'Asia/Magadan', 'Asia/Kamchatka', 'Asia/Sakhalin', 'Asia/Anadyr'
    ];

    const isRuLang = langs.some(l => l.toLowerCase().startsWith('ru')) || lang.toLowerCase().startsWith('ru');
    const isRuTz = ruTimezones.includes(tz);

    setBlocked(isRuLang && isRuTz);
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