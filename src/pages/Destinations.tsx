import { SearchBar } from "@/components/SearchBar";
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
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="max-w-[1400px] mx-auto px-8 py-4">
          <SearchBar />
          <div className="flex gap-4 mt-4">
            <Button
              variant={sortBy === "highest" ? "default" : "outline"}
              onClick={() => setSortBy("highest")}
              className="text-sm"
            >
              Highest Price
            </Button>
            <Button
              variant={sortBy === "lowest" ? "default" : "outline"}
              onClick={() => setSortBy("lowest")}
              className="text-sm"
            >
              Lowest Price
            </Button>
          </div>
        </div>
      </div>

      <div className="flex max-w-[1400px] mx-auto px-8 pt-32">
        <div className="w-3/5 pr-6">
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
        <div className="w-2/5 fixed right-8 top-32 bottom-8">
          <Map properties={SAMPLE_PROPERTIES} selectedLocation={selectedLocation} />
        </div>
      </div>
    </div>
  );
};

export default Destinations;