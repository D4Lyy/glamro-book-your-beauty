import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index.tsx";
import { ClientsPage, ProsPage } from "./pages/FeaturePage.tsx";
import About from "./pages/About.tsx";
import FAQ from "./pages/FAQ.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import Privacy from "./pages/legal/Privacy.tsx";
import CookiePolicy from "./pages/legal/CookiePolicy.tsx";
import Terms from "./pages/legal/Terms.tsx";
import LegalNotice from "./pages/legal/LegalNotice.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/professionals" element={<ProsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/legal-notice" element={<LegalNotice />} />
            {/* Legacy IT routes → redirect */}
            <Route path="/clienti" element={<Navigate to="/clients" replace />} />
            <Route path="/professionisti" element={<Navigate to="/professionals" replace />} />
            <Route path="/chi-siamo" element={<Navigate to="/about" replace />} />
            <Route path="/contatti" element={<Navigate to="/contact" replace />} />
            <Route path="/note-legali" element={<Navigate to="/legal-notice" replace />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
