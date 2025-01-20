import { Calendar as CalendarIcon, MapPin, Check, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { format } from "date-fns";
import { useState } from "react";

const SAMPLE_LOCATIONS = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Miami, FL",
  "Seattle, WA",
  "Boston, MA",
  "Denver, CO",
  "Las Vegas, NV",
  "San Francisco, CA"
];

export const SearchBar = () => {
  const [arrival, setArrival] = useState<Date>();
  const [duration, setDuration] = useState<Date>();
  const [rooms, setRooms] = useState("1");
  const [guests, setGuests] = useState("1");
  const [location, setLocation] = useState("");
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [specialRate, setSpecialRate] = useState("");
  
  const getRoomGuestLabel = (rooms: string, guests: string) => {
    const roomText = `${rooms} ${Number(rooms) === 1 ? 'room' : 'rooms'}`;
    const guestText = `${guests} ${Number(guests) === 1 ? 'guest' : 'guests'}`;
    return `${roomText}, ${guestText}`;
  };

  return (
    <div className="flex items-center justify-center space-x-0 bg-white rounded-full h-14 w-full max-w-4xl">
      <Popover open={isLocationOpen} onOpenChange={setIsLocationOpen}>
        <PopoverTrigger asChild>
          <div className="flex items-center space-x-2 pl-2 pr-2 h-full cursor-pointer">
            <MapPin className="w-4 h-4 text-[#00B2B2] shrink-0" />
            <input
              type="text"
              placeholder="Search location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent border-none focus:outline-none text-gray-900 w-full font-montserrat text-sm placeholder:text-gray-500"
            />
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </PopoverTrigger>
        <PopoverContent 
          className="p-0 w-[300px] bg-white" 
          align="start"
          side="bottom"
          sideOffset={5}
          alignOffset={-10}
        >
          <div className="py-2">
            {SAMPLE_LOCATIONS.map((loc) => (
              <div
                key={loc}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm flex items-center justify-between"
                onClick={() => {
                  setLocation(loc);
                  setIsLocationOpen(false);
                }}
              >
                <span>{loc}</span>
                {location === loc && <Check className="h-4 w-4 text-green-500 ml-1" />}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      <div className="px-2 h-full flex items-center">
        <Select value={`${rooms}-${guests}`} onValueChange={(val) => {
          const [r, g] = val.split('-');
          setRooms(r);
          setGuests(g);
        }}>
          <SelectTrigger className="h-full border-0 bg-transparent w-[180px] text-gray-900">
            <SelectValue>{getRoomGuestLabel(rooms, guests)}</SelectValue>
          </SelectTrigger>
          <SelectContent className="bg-white w-[280px] overflow-hidden">
            <div className="px-3 py-2">
              <p className="text-sm font-semibold mb-2">Rooms</p>
              <div className="grid grid-cols-3 gap-2">
                {Array.from({length: 10}, (_, i) => i + 1).map((num) => (
                  <div
                    key={`room-${num}`}
                    onClick={() => {
                      setRooms(num.toString());
                    }}
                    className="px-2 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm flex items-center gap-1"
                  >
                    <span className="text-gray-900">{num}</span>
                    {num === Number(rooms) && <Check className="h-3.5 w-3.5 text-green-500" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-200 my-2" />
            <div className="px-3 py-2">
              <p className="text-sm font-semibold mb-2">Guests</p>
              <div className="grid grid-cols-3 gap-2">
                {Array.from({length: 7}, (_, i) => i + 1).map((num) => (
                  <div
                    key={`guest-${num}`}
                    onClick={() => {
                      setGuests(num.toString());
                    }}
                    className="px-2 py-1.5 rounded hover:bg-gray-100 cursor-pointer text-sm flex items-center gap-1"
                  >
                    <span className="text-gray-900">{num}</span>
                    {num === Number(guests) && <Check className="h-3.5 w-3.5 text-green-500" />}
                  </div>
                ))}
              </div>
            </div>
          </SelectContent>
        </Select>
      </div>

      <div className="px-2 h-full flex items-center">
        <Select value={specialRate} onValueChange={setSpecialRate}>
          <SelectTrigger className="h-full border-0 bg-transparent w-[140px] text-gray-900">
            <SelectValue placeholder="Special rates" />
          </SelectTrigger>
          <SelectContent className="bg-white overflow-hidden">
            <SelectItem value="group" className="cursor-pointer">Group</SelectItem>
            <SelectItem value="corporate" className="cursor-pointer">Corporate</SelectItem>
            <SelectItem value="seasonal" className="cursor-pointer">Seasonal</SelectItem>
            <SelectItem value="promotional" className="cursor-pointer">Promo</SelectItem>
            <SelectItem value="membership" className="cursor-pointer">Member</SelectItem>
            <SelectItem value="extended" className="cursor-pointer">Extended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white px-4 h-10 rounded-full font-montserrat text-sm mx-2">
        Let's GO!
      </Button>
    </div>
  );
};
