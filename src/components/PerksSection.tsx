import React, { useState, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const perks = [
  { id: 1, name: "Outdoor Space", video: "output.mp4" },
  { id: 2, name: "Premium Fitness", video: "Professional_Mode_Generated_Video (2).mp4" },
  { id: 3, name: "Food & Beverages", video: "Professional_Mode_the_girl_is_walking_gracefoully_.mp4" },
  { id: 4, name: "Living Plants & Natural Materials", video: "Professional_Mode_the_girl_is_turning_around_slowl.mp4" },
];

export const PerksSection = () => {
  const navigate = useNavigate();
  const [selectedPerk, setSelectedPerk] = useState(perks[0].name);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [videoUrl, setVideoUrl] = useState<string>('');
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
    setIsVideoLoading(true);
    
    if (pauseTimeoutRef.current) {
      clearTimeout(pauseTimeoutRef.current);
    }
    
    pauseTimeoutRef.current = setTimeout(() => {
      setIsAutoplayPaused(false);
    }, 15000);
  };

  // Update video URL when perk changes
  useEffect(() => {
    const selectedVideo = perks.find(perk => perk.name === selectedPerk)?.video;
    if (selectedVideo) {
      const url = getVideoUrl(selectedVideo);
      setVideoUrl(url);
    }
  }, [selectedPerk]);

  // Handle video loading and playback
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      
      const handleCanPlay = () => {
        setIsVideoLoading(false);
        videoRef.current?.play().catch(error => {
          if (error.name !== 'AbortError') {
            console.error('Error playing video:', error);
            toast.error('Error playing video. Please try again.');
          }
        });
      };

      videoRef.current.addEventListener('canplay', handleCanPlay);

      return () => {
        videoRef.current?.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, [videoUrl]);

  const handleNavigateToDestinations = () => {
    navigate('/destinations');
  };

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
                {isVideoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                  </div>
                )}
                <video
                  ref={videoRef}
                  src={videoUrl}
                  className={`w-full h-[350px] object-cover ${isVideoLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                  muted
                  playsInline
                  loop
                  preload="auto"
                />
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

          {/* Arrows and Text Section */}
          <div className="flex flex-col items-center mt-16 space-y-4 cursor-pointer" onClick={handleNavigateToDestinations}>
            <ArrowDown className="w-8 h-8 text-white animate-bounce" />
            <p className="text-white text-lg font-medium hover:text-[#F97316] transition-colors">See our spaces</p>
            <ArrowUp className="w-8 h-8 text-white animate-bounce-delayed" />
          </div>
        </div>
      </div>
    </div>
  );
};