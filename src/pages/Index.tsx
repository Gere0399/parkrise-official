import { ArrowDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { ContentSection } from "@/components/ContentSection";

const Index = () => {
  return (
    <div className="min-h-screen font-montserrat">
      <div className="relative h-screen">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-navy/80">
          <img
            src="/lovable-uploads/a6fe6c8e-8b3a-4ac5-9834-8ee868d8cc5d.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          
          <div className="h-screen flex flex-col items-center justify-center px-6">
            <h1 className="text-7xl font-bold text-white mb-12 animate-fade-in tracking-tight">
              Live. Stay. <span className="text-primary">Belong.</span>
            </h1>
            
            <div className="w-full max-w-5xl animate-fade-up">
              <SearchBar />
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-8 text-white flex items-center animate-scroll">
            <ArrowDown className="w-6 h-6 mr-2" />
            <span className="text-sm uppercase tracking-wider">Scroll</span>
          </div>
        </div>
      </div>

      <ContentSection />
    </div>
  );
};

export default Index;