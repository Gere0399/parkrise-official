import { Calendar as CalendarIcon, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { format } from "date-fns";
import { useState } from "react";

export const SearchBar = () => {
  const [arrival, setArrival] = useState<Date>();
  const [duration, setDuration] = useState<Date>();
  
  return (
    <div className="flex items-center justify-center space-x-3 bg-white rounded-full p-1.5 w-full max-w-4xl">
      <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-50">
        <MapPin className="w-5 h-5 text-[#00B2B2]" />
        <input
          type="text"
          placeholder="Chandler, Arizona US"
          className="bg-transparent border-none focus:outline-none text-gray-900 w-40 font-montserrat text-sm"
        />
      </div>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[140px] pl-3 text-left font-normal bg-gray-50 border-0">
            <CalendarIcon className="mr-2 h-4 w-4 text-[#00B2B2]" />
            {arrival ? format(arrival, "PPP") : <span className="text-gray-500">Arrival</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={arrival}
            onSelect={setArrival}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[140px] pl-3 text-left font-normal bg-gray-50 border-0">
            <CalendarIcon className="mr-2 h-4 w-4 text-[#00B2B2]" />
            {duration ? format(duration, "PPP") : <span className="text-gray-500">Duration</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={duration}
            onSelect={setDuration}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <Select>
        <SelectTrigger className="w-[180px] bg-gray-50 border-0">
          <SelectValue placeholder="1 Room, 1 Guest" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1-1">1 Room, 1 Guest</SelectItem>
          <SelectItem value="1-2">1 Room, 2 Guests</SelectItem>
          <SelectItem value="2-2">2 Rooms, 2 Guests</SelectItem>
          <SelectItem value="2-4">2 Rooms, 4 Guests</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[180px] bg-gray-50 border-0">
          <SelectValue placeholder="Special rates" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="group">Group Rates</SelectItem>
          <SelectItem value="corporate">Corporate Rates</SelectItem>
          <SelectItem value="seasonal">Seasonal Discounts</SelectItem>
          <SelectItem value="promotional">Promotional Rates</SelectItem>
          <SelectItem value="membership">Membership Rates</SelectItem>
          <SelectItem value="extended">Extended Stay Rates</SelectItem>
        </SelectContent>
      </Select>

      <Button className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white px-8 py-2 rounded-full font-montserrat">
        Let's GO!
      </Button>
    </div>
  );
};