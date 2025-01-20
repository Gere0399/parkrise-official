import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-primary text-2xl font-bold">PARKRISE</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="text-white hover:text-primary">
            <MapPin className="w-4 h-4 mr-2" />
            Chandler, AZ
          </Button>
        </div>

        <div className="flex items-center space-x-6">
          <Button variant="ghost" className="text-white hover:text-primary">Home</Button>
          <Button variant="ghost" className="text-white hover:text-primary">Destinations</Button>
          <Button variant="ghost" className="text-white hover:text-primary">Our brand</Button>
          <Button variant="ghost" className="text-white hover:text-primary">For businesses</Button>
          <Button variant="ghost" className="text-white hover:text-primary">Franchise</Button>
        </div>
      </div>
    </nav>
  );
};