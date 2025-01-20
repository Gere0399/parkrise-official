import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/3232ef68-4d90-47b1-af6c-cbce7ac2c0e5.png" 
            alt="Parkrise Logo" 
            className="h-6 w-auto"
          />
          <span className="text-[#00B2B2] text-xl font-semibold tracking-wider font-montserrat">PARKRISE</span>
        </div>

        <div className="flex items-center px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-full">
          <MapPin className="w-4 h-4 text-white/70" />
          <input
            type="text"
            placeholder="Chandler, AZ"
            className="bg-transparent border-none focus:outline-none text-white text-sm px-2 w-24 font-montserrat"
          />
        </div>

        <div className="flex items-center space-x-10">
          <Button variant="ghost" className="text-white hover:text-[#00B2B2] text-sm font-montserrat">Home</Button>
          <Button variant="ghost" className="text-white hover:text-[#00B2B2] text-sm font-montserrat">Destinations</Button>
          <Button variant="ghost" className="text-white hover:text-[#00B2B2] text-sm font-montserrat">Our brand</Button>
          <Button variant="ghost" className="text-white hover:text-[#00B2B2] text-sm font-montserrat">For businesses</Button>
          <Button variant="ghost" className="text-white hover:text-[#00B2B2] text-sm font-montserrat">Franchise</Button>
        </div>
      </div>
    </nav>
  );
};