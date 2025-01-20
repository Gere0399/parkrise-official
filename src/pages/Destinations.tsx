import React from "react";
import { Navbar } from "@/components/Navbar";

const Destinations = () => {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Navbar />
      
      <div className="max-w-[1200px] mx-auto px-8 md:px-12 py-24">
        <h1 className="text-5xl font-bold text-navy mb-12">Our Places</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample destination cards */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <img
                src="/lovable-uploads/5fe1c5dc-e65f-4ff0-b85e-aa3501d0132a.png"
                alt="Destination"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-medium text-navy mb-2">Panama City</h3>
            <p className="text-gray-600">Experience modern living in the heart of the city</p>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <img
                src="/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png"
                alt="Destination"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-medium text-navy mb-2">Costa del Este</h3>
            <p className="text-gray-600">Luxury living with ocean views</p>
          </div>

          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
              <img
                src="/lovable-uploads/bf46281c-e655-4a66-b172-fac8e6646f87.png"
                alt="Destination"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="text-xl font-medium text-navy mb-2">Obarrio</h3>
            <p className="text-gray-600">Urban comfort in a prime location</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;