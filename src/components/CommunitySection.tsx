import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CommunitySection = () => {
  return (
    <div className="bg-[#F8F9FA] py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-16 text-center">
          Become immersed in an engaging community
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Card */}
          <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="mb-6">
                <img
                  src="/lovable-uploads/c020e51e-2540-45b0-aa26-224561ae9aab.png"
                  alt="Personalized Space"
                  className="w-full h-48 object-contain"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                At Parkrise, we understand that comfort comes from feeling at home. That's why we provide thoughtfully designed spaces and essential resources that help you live life your way, no matter how long your stay.
              </p>
            </CardContent>
          </Card>

          {/* Second Card */}
          <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="mb-6">
                <img
                  src="/lovable-uploads/5fdb10c4-bece-475b-a595-c875e30e9961.png"
                  alt="Wellness Activities"
                  className="w-full h-48 object-contain"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Wellness is woven into every part of your stay at Parkrise. Explore the best of health and culture with our walking maps, farmer's markets, and artist workshops—designed to inspire your body and mind.
              </p>
            </CardContent>
          </Card>

          {/* Third Card */}
          <Card className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="mb-6">
                <img
                  src="/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png"
                  alt="Culinary Experience"
                  className="w-full h-48 object-contain"
                />
              </div>
              <p className="text-gray-700 leading-relaxed">
                At Parkrise, every meal is an opportunity to immerse yourself in the neighborhood. From grilling outdoors to savoring dishes from local food trucks that bring authentic flavors to life, or cooking in your fully equipped kitchenette, your culinary experience is a seamless reflection of the culture and vibrancy that surrounds you.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;