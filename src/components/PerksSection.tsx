import React, { useState, useRef, useEffect } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const perks = [
  { id: 1, name: "Outdoor Space", video: "output.mp4" },
  { id: 2, name: "Premium Fitness", video: "Professional_Mode_Generated_Video.mp4" },
  { id: 3, name: "Food & Beverages", video: "Professional_Mode_the_girl_is_walking_gracefoully_.mp4" },
  { id: 4, name: "Living Plants & Natural Materials", video: "Professional_Mode_the_girl_is_turning_around_slowl.mp4" },
];

export const PerksSection = () => {
  const [selectedPerk, setSelectedPerk] = useState("Food & Beverages");
  const [slidePosition, setSlidePosition] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout>();

  const getVideoUrl = (fileName: string): string => {
    const { data } = supabase.storage
      .from('videos-landing')
      .getPublicUrl(fileName);
    console.log('Video URL for', fileName, ':', data?.publicUrl);
    return data?.publicUrl || '';
  };

  // Auto-slide functionality
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        const currentIndex = perks.findIndex(perk => perk.name === selectedPerk);
        const nextIndex = (currentIndex + 1) % perks.length;
        handlePerkChange(perks[nextIndex].name);
      }, 5000); // 5 seconds interval
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [selectedPerk]);

  // Handle video change when perk changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }
  }, [selectedPerk]);

  const handlePerkChange = (perkName: string) => {
    if (perkName !== selectedPerk) {
      setSlidePosition(-100);
      
      setTimeout(() => {
        setSelectedPerk(perkName);
        setSlidePosition(0);
      }, 500);

      // Reset autoplay timer
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }
  };

  const selectedVideo = perks.find(perk => perk.name === selectedPerk)?.video || perks[0].video;

  return (
    <div className="bg-navy">
      {/* Main content section */}
      <div className="min-h-screen py-20">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <div className="space-y-12 mb-16">
            <h2 className="text-3xl md:text-4xl text-secondary font-medium text-center leading-tight tracking-wide">
              Explore for yourself what makes<br />Parkrise perfect
            </h2>

            <p className="text-white text-2xl font-light leading-relaxed mb-8">
              This is your space, and our neighborhood is about to be yours. Check out some of 
              the Parkrise perks
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${slidePosition}%)` }}
              >
                <div className="text-white text-sm mb-4 font-light tracking-wider text-center w-full">
                  Perk: <span className="border-b border-white/30 ml-2 pb-0.5">{selectedPerk}</span>
                </div>
                <video
                  ref={videoRef}
                  src={getVideoUrl(selectedVideo)}
                  className="w-full max-w-[650px] rounded-lg"
                  muted
                  playsInline
                  loop
                  autoPlay
                />
              </div>
            </div>

            <div className="space-y-8">              
              <div className="space-y-4">
                {perks.map((perk) => (
                  <div
                    key={perk.id}
                    className="flex items-center space-x-4 text-white cursor-pointer group"
                    onClick={() => handlePerkChange(perk.name)}
                  >
                    <div className={`w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center border-2 ${
                      selectedPerk === perk.name 
                        ? "border-secondary bg-secondary/20" 
                        : "border-white/50 hover:border-white"
                    }`}>
                      {selectedPerk === perk.name && (
                        <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" />
                      )}
                    </div>
                    <span className={`text-lg font-light tracking-wide transition-all duration-300 ${
                      selectedPerk === perk.name
                        ? "text-secondary transform translate-x-2"
                        : "group-hover:text-secondary/80"
                    }`}>
                      {perk.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-24 text-white space-y-6">
            <Link to="/destinations" className="flex flex-col items-center space-y-4 group">
              <ArrowDown className="w-6 h-6 animate-bounce text-white" />
              <span className="text-lg tracking-wider font-light group-hover:text-secondary transition-colors">See our Places</span>
              <ArrowUp className="w-6 h-6 animate-bounce-delayed text-white" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer section */}
      <footer className="bg-[#F1F1F1]">
        {/* Top Navigation Row */}
        <div className="border-b border-[#E5E5E5]">
          <div className="max-w-[1200px] mx-auto px-8 md:px-12">
            <div className="flex justify-between items-center py-6">
              <div className="flex gap-12">
                <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Home</span>
                <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Residents</span>
                <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Our brand</span>
                <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">For Business</span>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-[13px] text-[#222222] font-light">hello@parkrise.com</span>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Facebook</span>
                  <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Instagram</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[13px] text-[#222222] font-light">©Copyright</span>
                  <span className="text-[13px] text-[#222222] font-light">Panama 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Row */}
        <div className="border-b border-[#E5E5E5]">
          <div className="max-w-[1200px] mx-auto px-8 md:px-12">
            <div className="flex justify-center py-12">
              <img 
                src="/lovable-uploads/892ce5e3-ffe0-420b-a9d5-5207bdf86152.png"
                alt="Parkrise Logo"
                className="h-24"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <div className="flex justify-center items-center gap-12 py-8">
            <span className="text-[13px] text-[#222222] font-light">Live. Stay. Belong.</span>
            
            <div className="flex items-center gap-12">
              <p className="text-[13px] text-[#222222] font-light max-w-[400px] text-center border-x border-[#E5E5E5] px-12">
                Parkrise redefines flexible working by creating a standard that is ahead of its time. With high-end amenities and services.
              </p>
              <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Need help?</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};