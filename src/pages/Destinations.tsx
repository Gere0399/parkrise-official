import { Navbar } from "@/components/Navbar";
import { PropertyCard } from "@/components/PropertyCard";
import { Map } from "@/components/Map";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/SearchBar";

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
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar showSearch={false} />
      <div className="pt-24 px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="mb-8">
          <SearchBar />
        </div>
        <div className="flex gap-2 mb-6">
          <Button
            variant="ghost"
            onClick={() => setSortBy("highest")}
            className={`text-sm ${sortBy === "highest" ? "text-[#00B2B2]" : "text-gray-600"}`}
          >
            Highest Price
          </Button>
          <Button
            variant="ghost"
            onClick={() => setSortBy("lowest")}
            className={`text-sm ${sortBy === "lowest" ? "text-[#00B2B2]" : "text-gray-600"}`}
          >
            Lowest Price
          </Button>
        </div>

        {/* Mobile Map Toggle Button */}
        <div className="md:hidden mb-4">
          <Button 
            onClick={() => setShowMap(!showMap)}
            variant="outline"
            className="w-full"
          >
            {showMap ? "Hide Map" : "Show Map"}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Properties List */}
          <div className={`w-full md:w-2/3 ${showMap ? 'hidden md:block' : 'block'}`}>
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
          
          {/* Map Container */}
          <div 
            className={`
              ${showMap ? 'fixed bottom-0 left-0 right-0 h-[60vh] z-10' : 'hidden'} 
              md:static md:block md:w-1/3 md:h-[calc(100vh-6rem)] md:sticky md:top-24
            `}
          >
            <Map properties={SAMPLE_PROPERTIES} selectedLocation={selectedLocation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;