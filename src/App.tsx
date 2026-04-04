
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
  window.location.replace('https://http.cat/403');
  return null;
};

const App = () => {
  const [blocked, setBlocked] = useState<boolean | null>(null);

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

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Captcha />} />
            <Route path="/check" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;