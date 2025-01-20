import { MapPin, Search } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotAtTop, setIsNotAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar background when not at top (y > 0)
      setIsNotAtTop(window.scrollY > 0);
      
      // Show search when scrolled past 80vh
      const scrolled = window.scrollY > window.innerHeight * 0.8;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    // Handle search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Semi-transparent background - show when not at top */}
      {isNotAtTop && (
        <div className="absolute inset-x-0 top-0 h-24 bg-black/20 backdrop-blur-sm transition-opacity duration-300" />
      )}
      
      <div className="relative max-w-[1400px] mx-auto flex items-center justify-between px-8 py-8">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/3232ef68-4d90-47b1-af6c-cbce7ac2c0e5.png" 
            alt="Parkrise Logo" 
            className="h-6 w-auto"
          />
        </div>

        {isScrolled && (
          <div className="flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full w-64">
            <MapPin className="w-3 h-3 text-white/70 shrink-0" />
            <input
              type="text"
              placeholder="Search location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none focus:outline-none text-white text-xs px-2 w-full font-montserrat truncate"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleSearch}
              className="h-6 w-6 p-1 hover:bg-white/10"
            >
              <Search className="h-4 w-4 text-white/70" />
            </Button>
          </div>
        )}

        <div className="flex items-center space-x-2 mr-20">
          <Button variant="ghost" className="text-white hover:text-[#00B2B2] text-xs font-montserrat px-2">Home</Button>
          <Button variant="ghost" className="text-white hover:text-[#00B2B2] text-xs font-montserrat px-2">Destinations</Button>
          <Button variant="ghost" className="text-white hover:text-[#00B2B2] text-xs font-montserrat px-2">Our brand</Button>
          <Button variant="ghost" className="text-white hover:text-[#00B2B2] text-xs font-montserrat px-2">For businesses</Button>
          <Button variant="ghost" className="text-white hover:text-[#00B2B2] text-xs font-montserrat px-2">Franchise</Button>
        </div>
      </div>
    </nav>
  );
};