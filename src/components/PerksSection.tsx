import React, { useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const perks = [
  { id: 1, name: "Outdoor Space" },
  { id: 2, name: "Premium Fitness" },
  { id: 3, name: "Food & Beverages" },
  { id: 4, name: "Living Plants & Natural Materials" },
];

export const PerksSection = () => {
  const [selectedPerk, setSelectedPerk] = useState("Food & Beverages");

  return (
    <div className="bg-navy min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-secondary font-medium text-center mb-24 leading-tight tracking-wide">
          Explore for yourself what makes<br />Parkrise perfect
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative">
            <div className="text-white text-sm mb-4 font-light tracking-wider absolute -top-8">
              Perk: <span className="border-b border-white/30 ml-2 pb-0.5">{selectedPerk}</span>
            </div>
            <img
              src="/lovable-uploads/5fe1c5dc-e65f-4ff0-b85e-aa3501d0132a.png"
              alt="Parkrise Space"
              className="w-full max-w-[650px] mx-auto"
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
                  <span className="text-lg font-light tracking-wide group-hover:text-secondary transition-colors">
                    {perk.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-24 text-white space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <ArrowDown className="w-6 h-6" />
            <span className="text-lg tracking-wider">See this space</span>
            <ArrowUp className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};