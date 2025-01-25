import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Destinations from "./pages/Destinations";
import Franchise from "./pages/Franchise";
import SpaceDetail from "./pages/SpaceDetail";
import SearchSpace from "./pages/SearchSpace";
import Brands from "./pages/Brands";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/destinations" element={<Destinations />} /> */}
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/space-detail" element={<SpaceDetail />} />
          <Route path="/destinations" element={<SearchSpace />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
