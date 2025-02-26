import React, { useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

const CommunitySection = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRefs = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            video.play().catch(console.error);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    const animationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in', 'opacity-100');
          }
        });
      },
      { 
        threshold: 0.8,
        rootMargin: '-50px'
      }
    );

    videoRefs.current.forEach((video) => {
      if (video) videoObserver.observe(video);
    });

    cardRefs.current.forEach((card) => {
      if (card) {
        card.classList.add('opacity-0');
        animationObserver.observe(card);
      }
    });

    textRefs.current.forEach((text) => {
      if (text) {
        text.classList.add('opacity-0');
        text.style.transitionDelay = '200ms';
        animationObserver.observe(text);
      }
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) videoObserver.unobserve(video);
      });
      cardRefs.current.forEach((card) => {
        if (card) animationObserver.unobserve(card);
      });
      textRefs.current.forEach((text) => {
        if (text) animationObserver.unobserve(text);
      });
    };
  }, []);

  const getVideoUrl = (fileName: string): string => {
    const { data } = supabase.storage
      .from('videos-landing')
      .getPublicUrl(fileName);
    return data?.publicUrl || '';
  };

  return (
    <div className="bg-[#F8F9FA] py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-medium text-navy mb-16 text-center">
          Become immersed in an engaging community
        </h2>
        
        <div className="flex flex-col space-y-8">
          {/* First Card */}
          <Card className="border-0 shadow-none">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                <div 
                  ref={el => cardRefs.current[0] = el}
                  className="w-full md:w-1/3 mb-6 md:mb-0 transition-all duration-700"
                >
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 -rotate-2">
                    <video
                      ref={el => videoRefs.current[0] = el}
                      src={getVideoUrl('Professional_Mode_the_guy_sly_down_and_the_tv_star.mp4')}
                      className="w-full h-48 object-cover rounded"
                      muted
                      playsInline
                      loop
                    />
                  </div>
                </div>
                <p 
                  ref={el => textRefs.current[0] = el}
                  className="text-lg text-gray-700 leading-relaxed md:w-2/3 max-w-xl transition-all duration-700"
                >
                  At Parkrise, we understand that comfort comes from feeling at home. 
                  That's why we provide thoughtfully designed spaces and essential 
                  resources that help you live life your way, no matter how long your stay.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Second Card */}
          <Card className="border-0 shadow-none">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                <div 
                  ref={el => cardRefs.current[1] = el}
                  className="w-full md:w-1/3 mb-6 md:mb-0 transition-all duration-700"
                >
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 rotate-2">
                    <video
                      ref={el => videoRefs.current[1] = el}
                      src={getVideoUrl('Professional_Mode_the_girl_is_watching_outside_tho.mp4')}
                      className="w-full h-48 object-cover rounded"
                      muted
                      playsInline
                      loop
                    />
                  </div>
                </div>
                <p 
                  ref={el => textRefs.current[1] = el}
                  className="text-lg text-gray-700 leading-relaxed md:w-2/3 max-w-xl transition-all duration-700"
                >
                  Wellness is woven into every part of your stay at Parkrise. 
                  Explore the best of health and culture with our walking maps, 
                  farmer's markets, and artist workshops—designed to inspire 
                  your body and mind.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Third Card */}
          <Card className="border-0 shadow-none">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                <div 
                  ref={el => cardRefs.current[2] = el}
                  className="w-full md:w-1/3 mb-6 md:mb-0 transition-all duration-700"
                >
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 -rotate-1">
                    <video
                      ref={el => videoRefs.current[2] = el}
                      src={getVideoUrl('Professional_Mode_people_having_fun_and_eating (1).mp4')}
                      className="w-full h-48 object-cover rounded"
                      muted
                      playsInline
                      loop
                    />
                  </div>
                </div>
                <p 
                  ref={el => textRefs.current[2] = el}
                  className="text-lg text-gray-700 leading-relaxed md:w-2/3 max-w-xl transition-all duration-700"
                >
                  At Parkrise, every meal is an opportunity to immerse yourself 
                  in the neighborhood. From grilling outdoors to savoring dishes 
                  from local food trucks that bring authentic flavors to life, 
                  or cooking in your fully equipped kitchenette, your culinary 
                  experience is a seamless reflection of the culture and vibrancy 
                  that surrounds you.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;