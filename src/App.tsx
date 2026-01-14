import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/CookieConsent";
import FloatingCTAs from "./components/FloatingCTAs";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Windows from "./pages/Windows";
import Doors from "./pages/Doors";
import SlidingSystems from "./pages/SlidingSystems";
import Aluminum from "./pages/Aluminum";
import Facades from "./pages/Facades";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Production from "./pages/Production";
import OurProducts from "./components/OurProducts";
import Products from "./pages/Products";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/windows" element={<Windows />} />
          <Route path="/doors" element={<Doors />} />
          <Route path="/sliding-systems" element={<SlidingSystems />} />
          <Route path="/aluminum" element={<Aluminum />} />
          <Route path="/facades" element={<Facades />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/production" element={<Production />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
        <FloatingCTAs />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
