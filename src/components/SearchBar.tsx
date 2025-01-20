import { Calendar, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export const SearchBar = () => {
  return (
    <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-md rounded-full p-2 w-full max-w-4xl">
      <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5">
        <MapPin className="w-5 h-5 text-primary" />
        <input
          type="text"
          placeholder="Chandler, Arizona US"
          className="bg-transparent border-none focus:outline-none text-white w-40 font-montserrat"
        />
      </div>
      
      <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5">
        <Calendar className="w-5 h-5 text-primary" />
        <input
          type="text"
          placeholder="Arrival"
          className="bg-transparent border-none focus:outline-none text-white w-24 font-montserrat"
        />
      </div>

      <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5">
        <Calendar className="w-5 h-5 text-primary" />
        <input
          type="text"
          placeholder="Duration"
          className="bg-transparent border-none focus:outline-none text-white w-24 font-montserrat"
        />
      </div>

      <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5">
        <span className="text-white text-sm font-montserrat">1 Room, 1 Guest</span>
      </div>

      <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5">
        <span className="text-white text-sm font-montserrat">Special rates</span>
      </div>

      <Button className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white px-8 rounded-full font-montserrat">
        Let's GO!
      </Button>
    </div>
  );
};