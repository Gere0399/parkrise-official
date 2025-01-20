import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CommunitySection = () => {
  return (
    <div className="bg-[#F8F9FA] py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-16 text-center">
          Become immersed in an engaging community
        </h2>
        
        <div className="flex flex-col space-y-8">
          {/* First Card */}
          <Card className="border-0 shadow-none">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-8">
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 -rotate-2">
                    <img
                      src="/lovable-uploads/bf46281c-e655-4a66-b172-fac8e6646f87.png"
                      alt="Personalized Space"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed md:w-2/3 max-w-xl">
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
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 rotate-2">
                    <img
                      src="/lovable-uploads/5fdb10c4-bece-475b-a595-c875e30e9961.png"
                      alt="Wellness Activities"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed md:w-2/3 max-w-xl">
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
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                  <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 -rotate-1">
                    <img
                      src="/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png"
                      alt="Culinary Experience"
                      className="w-full object-contain"
                    />
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed md:w-2/3 max-w-xl">
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