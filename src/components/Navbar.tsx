import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/3232ef68-4d90-47b1-af6c-cbce7ac2c0e5.png" 
            alt="Parkrise Logo" 
            className="h-6 w-auto" // Reduced logo size
          />
        </div>

        <div className="flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full w-32"> {/* Increased width */}
          <MapPin className="w-3 h-3 text-white/70" /> {/* Smaller icon */}
          <input
            type="text"
            placeholder="Chandler, AZ"
            className="bg-transparent border-none focus:outline-none text-white text-xs px-2 w-full font-montserrat" // Smaller text
          />
        </div>

        <div className="flex items-center space-x-2 mr-20"> {/* Reduced space between items */}
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