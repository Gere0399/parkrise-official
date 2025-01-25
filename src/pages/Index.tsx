import { ArrowDown } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar";
import { ContentSection } from "@/components/ContentSection";
import CommunitySection from "@/components/CommunitySection";
import { PerksSection } from "@/components/PerksSection";
import { Footer } from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

const Index = () => {
  const headerVideoUrl = supabase.storage
    .from("videos-landing")
    .getPublicUrl("0121.mp4").data.publicUrl;

  return (
    <div className="font-montserrat">
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <video
            src={headerVideoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Error playing header video:", e);
            }}
          />
          <div className="absolute inset-0 bg-black/90" />
        </div>

        <div className="relative z-10">
          <Navbar />

          <div className="h-screen flex flex-col items-center justify-center px-6">
            <h1 className="text-7xl font-bold text-white mb-8 animate-[slide-in_0.5s_ease-out] tracking-tight">
              <span className="inline-block transform translate-x-0">
                Live. Stay.{" "}
              </span>
              <span className="text-[#00B2B2]">Belong.</span>
            </h1>

            <div className="w-full max-w-5xl animate-fade-up">
              <SearchBar />
            </div>
          </div>

          <div className="absolute bottom-8 left-8 text-white flex items-center animate-scroll">
            <ArrowDown className="w-6 h-6 mr-2" />
            <span className="text-sm uppercase tracking-wider">Scroll</span>
          </div>
        </div>
      </div>

      <ContentSection />
      <CommunitySection />
      <PerksSection />
      <Footer />
    </div>
  );
};

export default Index;
