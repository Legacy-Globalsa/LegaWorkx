import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import CarCareDetailing from "./pages/CarCareDetailing.tsx";
import MechanicalMaintenance from "./pages/MechanicalMaintenance.tsx";
import CarCustomization from "./pages/CarCustomization.tsx";
import AITechnology from "./pages/AITechnology.tsx";
import CarSales from "./pages/CarSales.tsx";
import AccessoriesParts from "./pages/AccessoriesParts.tsx";
import AdditionalServices from "./pages/AdditionalServices.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/car-care-detailing" element={<CarCareDetailing />} />
          <Route path="/services/mechanical-maintenance" element={<MechanicalMaintenance />} />
          <Route path="/services/customization" element={<CarCustomization />} />
          <Route path="/services/ai-technology" element={<AITechnology />} />
          <Route path="/services/car-sales" element={<CarSales />} />
          <Route path="/services/accessories-parts" element={<AccessoriesParts />} />
          <Route path="/services/additional" element={<AdditionalServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
