import React, { useState, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, ArrowRight } from "lucide-react";

const perks = [
  { id: 1, name: "Outdoor Space", video: "output.mp4" },
  { id: 2, name: "Premium Fitness", video: "Professional_Mode_Generated_Video (2).mp4" },
  { id: 3, name: "Food & Beverages", video: "Professional_Mode_the_girl_is_walking_gracefoully_.mp4" },
  { id: 4, name: "Living Plants & Natural Materials", video: "Professional_Mode_the_girl_is_turning_around_slowl.mp4" },
];

export const PerksSection = () => {
  const [selectedPerk, setSelectedPerk] = useState(perks[0].name);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const autoplayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getVideoUrl = (fileName: string): string => {
    const { data } = supabase.storage
      .from('videos-landing')
      .getPublicUrl(fileName);
    return data?.publicUrl || '';
  };

  // Handle auto-sliding
  useEffect(() => {
    const startAutoplay = () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
      
      autoplayTimeoutRef.current = setInterval(() => {
        if (!isAutoplayPaused) {
          const currentIndex = perks.findIndex(perk => perk.name === selectedPerk);
          const nextIndex = (currentIndex + 1) % perks.length;
          setSelectedPerk(perks[nextIndex].name);
        }
      }, 5000);
    };

    startAutoplay();

    return () => {
      if (autoplayTimeoutRef.current) {
        clearTimeout(autoplayTimeoutRef.current);
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [selectedPerk, isAutoplayPaused]);

  // Handle manual selection
  const handlePerkSelect = (perkName: string) => {
    setSelectedPerk(perkName);
    setIsAutoplayPaused(true);
    
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    
    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoplayPaused(false);
    }, 15000);
  };

  // Preload all videos
  useEffect(() => {
    perks.forEach(perk => {
      const video = new Audio();
      video.src = getVideoUrl(perk.video);
      video.preload = "auto";
    });
  }, []);

  // Handle video change when perk changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Error playing video:', error);
        }
      });
    }
  }, [selectedPerk]);

  const selectedVideo = perks.find(perk => perk.name === selectedPerk)?.video || perks[0].video;

  return (
    <div className="bg-navy">
      <div className="min-h-screen py-20">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-secondary font-medium leading-tight tracking-wide mb-6">
              Explore for yourself what makes Parkrise perfect
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-12 justify-center">
            {/* Video Section */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl transition-all duration-500 transform">
                <video
                  ref={videoRef}
                  src={getVideoUrl(selectedVideo)}
                  className="w-full h-[400px] object-cover"
                  muted
                  playsInline
                  loop
                  autoPlay
                />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <span className="text-white text-lg font-medium">See our spaces</span>
                  <div className="flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5 text-white" />
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/3 space-y-8">
              <div className="space-y-6">
                <p className="text-white text-xl font-light leading-relaxed">
                  This is your space, and our neighborhood is about to be yours. Check out some of 
                  the Parkrise perks
                </p>
              </div>

              <div className="space-y-3">
                {perks.map((perk) => (
                  <div
                    key={perk.id}
                    className="flex items-center space-x-3 text-white cursor-pointer group transition-all duration-300"
                    onClick={() => handlePerkSelect(perk.name)}
                  >
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 flex items-center justify-center ${
                      selectedPerk === perk.name 
                        ? "bg-transparent border-2 border-white scale-110" 
                        : "border border-white/50 hover:border-white"
                    }`}>
                      {selectedPerk === perk.name && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-fade-in" />
                      )}
                    </div>
                    <span className={`text-base font-light tracking-wide transition-all duration-300 ${
                      selectedPerk === perk.name
                        ? "text-secondary translate-x-1"
                        : "group-hover:text-secondary/80"
                    }`}>
                      {perk.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};