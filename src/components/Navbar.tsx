import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MapPin className="w-6 h-6 text-primary transform rotate-180" />
          <span className="text-primary text-2xl font-bold tracking-wider font-montserrat">PARKRISE</span>
        </div>

        <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
          <MapPin className="w-4 h-4 text-white/70" />
          <input
            type="text"
            placeholder="Chandler, AZ"
            className="bg-transparent border-none focus:outline-none text-white text-sm px-2 w-28 font-montserrat"
          />
        </div>

        <div className="flex items-center space-x-8">
          <Button variant="ghost" className="text-white hover:text-primary text-sm font-montserrat">Home</Button>
          <Button variant="ghost" className="text-white hover:text-primary text-sm font-montserrat">Destinations</Button>
          <Button variant="ghost" className="text-white hover:text-primary text-sm font-montserrat">Our brand</Button>
          <Button variant="ghost" className="text-white hover:text-primary text-sm font-montserrat">For businesses</Button>
          <Button variant="ghost" className="text-white hover:text-primary text-sm font-montserrat">Franchise</Button>
        </div>
      </div>
    </nav>
  );
};