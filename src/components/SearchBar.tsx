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
    <div className="flex items-center justify-center space-x-0 bg-white rounded-full h-10 w-full max-w-4xl divide-x divide-gray-200">
      <div className="flex items-center space-x-2 px-4 h-full">
        <MapPin className="w-4 h-4 text-[#00B2B2]" />
        <input
          type="text"
          placeholder="Chandler, Arizona US"
          className="bg-transparent border-none focus:outline-none text-gray-900 w-32 font-montserrat text-sm truncate"
        />
      </div>
      
      <div className="px-4 h-full">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="h-full pl-0 pr-4 font-normal">
              <CalendarIcon className="mr-2 h-4 w-4 text-[#00B2B2]" />
              <span className="truncate w-24 text-sm">
                {arrival ? format(arrival, "PPP") : <span className="text-gray-500">Arrival</span>}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white" align="start">
            <Calendar
              mode="single"
              selected={arrival}
              onSelect={setArrival}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="px-4 h-full">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="h-full pl-0 pr-4 font-normal">
              <CalendarIcon className="mr-2 h-4 w-4 text-[#00B2B2]" />
              <span className="truncate w-24 text-sm">
                {duration ? format(duration, "PPP") : <span className="text-gray-500">Duration</span>}
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white" align="start">
            <Calendar
              mode="single"
              selected={duration}
              onSelect={setDuration}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="px-4 h-full">
        <Select>
          <SelectTrigger className="h-full border-0 bg-transparent w-[120px]">
            <SelectValue placeholder="1 Room, 1 Guest" className="truncate text-sm" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="1-1">1 Room, 1 Guest</SelectItem>
            <SelectItem value="1-2">1 Room, 2 Guests</SelectItem>
            <SelectItem value="2-2">2 Rooms, 2 Guests</SelectItem>
            <SelectItem value="2-4">2 Rooms, 4 Guests</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="px-4 h-full">
        <Select>
          <SelectTrigger className="h-full border-0 bg-transparent w-[120px]">
            <SelectValue placeholder="Special rates" className="truncate text-sm" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="group">Group Rates</SelectItem>
            <SelectItem value="corporate">Corporate Rates</SelectItem>
            <SelectItem value="seasonal">Seasonal Discounts</SelectItem>
            <SelectItem value="promotional">Promotional Rates</SelectItem>
            <SelectItem value="membership">Membership Rates</SelectItem>
            <SelectItem value="extended">Extended Stay Rates</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white px-8 h-full rounded-full font-montserrat text-sm">
        Let's GO!
      </Button>
    </div>
  );
};