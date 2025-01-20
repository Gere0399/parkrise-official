import React, { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const perks = [
  { id: 1, name: "Outdoor Space" },
  { id: 2, name: "Premium Fitness" },
  { id: 3, name: "Food & Beverages" },
  { id: 4, name: "Living Plants & Natural Materials" },
];

export const PerksSection = () => {
  const [selectedPerk, setSelectedPerk] = useState("Food & Beverages");

  return (
    <div className="bg-navy">
      {/* Main content section */}
      <div className="min-h-screen py-20">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <h2 className="text-3xl md:text-4xl text-secondary font-medium text-center mb-24 leading-tight tracking-wide">
            Explore for yourself what makes<br />Parkrise perfect
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative flex flex-col items-center">
              <div className="text-white text-sm mb-4 font-light tracking-wider text-center w-full">
                Perk: <span className="border-b border-white/30 ml-2 pb-0.5">{selectedPerk}</span>
              </div>
              <img
                src="/lovable-uploads/5fe1c5dc-e65f-4ff0-b85e-aa3501d0132a.png"
                alt="Parkrise Space"
                className="w-full max-w-[650px]"
              />
            </div>

            <div className="space-y-12 lg:pt-16">
              <p className="text-white text-2xl font-light leading-relaxed">
                This is your space, and our neighborhood is about to be yours. Check out some of 
                the Parkrise perks
              </p>
              
              <div className="space-y-6">
                {perks.map((perk) => (
                  <div
                    key={perk.id}
                    className="flex items-center space-x-4 text-white cursor-pointer group"
                    onClick={() => setSelectedPerk(perk.name)}
                  >
                    <div className={`w-5 h-5 rounded-full transition-all duration-200 flex items-center justify-center ${
                      selectedPerk === perk.name 
                        ? "bg-transparent border-2 border-white" 
                        : "border-2 border-white/50"
                    }`}>
                      {selectedPerk === perk.name && (
                        <div className="w-2.5 h-2.5 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-base font-light tracking-wide group-hover:text-secondary transition-colors">
                      {perk.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mt-24 text-white space-y-6">
            <Link to="/destinations" className="flex flex-col items-center space-y-4 group">
              <ArrowUp className="w-6 h-6 animate-bounce text-secondary" />
              <span className="text-lg tracking-wider font-light group-hover:text-secondary transition-colors">See our Places</span>
              <ArrowDown className="w-6 h-6 animate-bounce text-secondary" />
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