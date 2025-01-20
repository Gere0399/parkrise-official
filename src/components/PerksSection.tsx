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
        <h2 className="text-5xl text-secondary font-medium text-center mb-20">
          Explore for yourself what makes<br />Parkrise perfect
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="text-white text-sm mb-4">
              Perk: <span className="border-b border-white ml-2">{selectedPerk}</span>
            </div>
            <img
              src="/lovable-uploads/5fe1c5dc-e65f-4ff0-b85e-aa3501d0132a.png"
              alt="Parkrise Space"
              className="w-full max-w-[500px] mx-auto"
            />
          </div>

          <div className="space-y-4">
            <p className="text-white text-xl mb-8">
              This is your space, and our neighborhood is about to be yours. Check out some of the Parkrise perks
            </p>
            
            <div className="space-y-4">
              {perks.map((perk) => (
                <div
                  key={perk.id}
                  className="flex items-center space-x-3 text-white cursor-pointer group"
                  onClick={() => setSelectedPerk(perk.name)}
                >
                  <div className={`w-3 h-3 rounded-full ${
                    selectedPerk === perk.name ? "bg-secondary" : "border-2 border-white"
                  }`} />
                  <span className="text-lg group-hover:text-secondary transition-colors">
                    {perk.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-20 text-white">
          <span className="text-lg mb-2">See this space</span>
          <div className="flex flex-col items-center space-y-2">
            <ArrowDown className="w-6 h-6 animate-bounce" />
            <ArrowUp className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};