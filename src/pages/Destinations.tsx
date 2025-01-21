import { Navbar } from "@/components/Navbar";
import { PropertyCard } from "@/components/PropertyCard";
import { Map } from "@/components/Map";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export type Property = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
  coordinates: [number, number];
};

const SAMPLE_PROPERTIES: Property[] = [
  {
    id: "1",
    name: "Osaka Sample name apartment",
    description: "Sample - Experience a new level of luxury in the heart of Osaka, just a 5-minute stroll from the magnificent Osaka Castle. Enjoy spacious, elegantly designed rooms, panoramic city views...",
    price: 32,
    image: "/lovable-uploads/faa05e4a-c305-45cd-a254-f22cdcef605a.png",
    amenities: ["Pickleball", "Pool", "Gym room", "Plants"],
    coordinates: [135.5023, 34.6937],
  },
  {
    id: "2",
    name: "Osaka Luxury Suites, 10 min walk to Castle",
    description: "Sample - Experience a new level of luxury in the heart of Osaka, just a 5-minute stroll from the magnificent Osaka Castle. Enjoy spacious, elegantly designed rooms, panoramic city views...",
    price: 126,
    image: "/lovable-uploads/faa05e4a-c305-45cd-a254-f22cdcef605a.png",
    amenities: ["Pickleball", "Pool", "Gym room", "Plants"],
    coordinates: [135.5123, 34.6837],
  }
];

const Destinations = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("Osaka, Japan");
  const [sortBy, setSortBy] = useState<"highest" | "lowest">("highest");

  return (
    <div className="min-h-screen bg-white">
      <Navbar showSearch={false} />
      <div className="pt-24 px-8 max-w-[1400px] mx-auto">
        <div className="flex gap-6">
          {/* Left side - Property listings */}
          <div className="w-2/3">
            <h1 className="text-3xl font-semibold mb-6">Featured Destinations</h1>
            <div className="space-y-6">
              {SAMPLE_PROPERTIES
                .sort((a, b) => 
                  sortBy === "highest" ? b.price - a.price : a.price - b.price
                )
                .map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
            </div>
          </div>
          
          {/* Right side - Map */}
          <div className="w-1/3 sticky top-24 h-[calc(100vh-6rem)]">
            <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/892ce5e3-ffe0-420b-a9d5-5207bdf86152.png"
                alt="3D Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
