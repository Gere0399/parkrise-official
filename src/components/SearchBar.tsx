import { Calendar, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export const SearchBar = () => {
  return (
    <div className="flex items-center justify-center space-x-4 bg-white/10 backdrop-blur-md rounded-lg p-2">
      <div className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white/5">
        <MapPin className="w-5 h-5 text-primary" />
        <input
          type="text"
          placeholder="Chandler, Arizona US"
          className="bg-transparent border-none focus:outline-none text-white"
        />
      </div>
      
      <div className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white/5">
        <Calendar className="w-5 h-5 text-primary" />
        <input
          type="text"
          placeholder="Arrival"
          className="bg-transparent border-none focus:outline-none text-white"
        />
      </div>

      <div className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white/5">
        <Calendar className="w-5 h-5 text-primary" />
        <input
          type="text"
          placeholder="Duration"
          className="bg-transparent border-none focus:outline-none text-white"
        />
      </div>

      <div className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white/5">
        <span className="text-white">1 Room, 1 Guest</span>
      </div>

      <div className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white/5">
        <span className="text-white">Special rates</span>
      </div>

      <Button className="bg-primary hover:bg-primary/90 text-white px-6">
        Let's GO!
      </Button>
    </div>
  );
};