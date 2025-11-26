import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Windows from "./pages/Windows";
import Doors from "./pages/Doors";
import SlidingSystems from "./pages/SlidingSystems";
import Aluminum from "./pages/Aluminum";
import Facades from "./pages/Facades";
import GarageSystems from "./pages/GarageSystems";
import AdditionalElements from "./pages/AdditionalElements";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/windows" element={<Windows />} />
          <Route path="/doors" element={<Doors />} />
          <Route path="/sliding-systems" element={<SlidingSystems />} />
          <Route path="/aluminum" element={<Aluminum />} />
          <Route path="/facades" element={<Facades />} />
          <Route path="/garage-systems" element={<GarageSystems />} />
          <Route path="/additional-elements" element={<AdditionalElements />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
