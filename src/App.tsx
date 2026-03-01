import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CafesPage from "./pages/CafesPage";
import SobrePage from "./pages/SobrePage";
import FacPage from "./pages/FacPage";
import LandingPage from "./pages/LandingPage";
import RitualPage from "./pages/RitualPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/pe-de-serra">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cafes" element={<CafesPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/fac" element={<FacPage />} />
          <Route path="/oferta" element={<LandingPage />} />
          <Route path="/ritual" element={<RitualPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
