import { Calendar as CalendarIcon, MapPin, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { format } from "date-fns";
import { useState } from "react";

export const SearchBar = () => {
  const [arrival, setArrival] = useState<Date>();
  const [duration, setDuration] = useState<Date>();
  const [rooms, setRooms] = useState("1");
  const [guests, setGuests] = useState("1");
  
  const getRoomGuestLabel = (rooms: string, guests: string) => {
    const roomText = `${rooms} ${Number(rooms) === 1 ? 'Room' : 'Rooms'}`;
    const guestText = `${guests} ${Number(guests) === 1 ? 'Guest' : 'Guests'}`;
    return `${roomText}, ${guestText}`;
  };

  return (
    <div className="flex items-center justify-center space-x-0 bg-white rounded-full h-14 w-full max-w-4xl divide-x divide-gray-200">
      <div className="flex items-center space-x-2 pl-4 pr-2 h-full">
        <MapPin className="w-4 h-4 text-[#00B2B2] shrink-0" />
        <input
          type="text"
          placeholder="Chandler, AZ"
          className="bg-transparent border-none focus:outline-none text-gray-900 w-full font-montserrat text-sm"
        />
      </div>
      
      <div className="px-2 h-full flex items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="h-full pl-0 pr-2 font-normal">
              <CalendarIcon className="mr-2 h-4 w-4 text-[#00B2B2] shrink-0" />
              <span className="text-sm">
                {arrival ? format(arrival, "MMM d") : <span className="text-gray-500">Arrival</span>}
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

      <div className="px-2 h-full flex items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" className="h-full pl-0 pr-2 font-normal">
              <CalendarIcon className="mr-2 h-4 w-4 text-[#00B2B2] shrink-0" />
              <span className="text-sm">
                {duration ? format(duration, "MMM d") : <span className="text-gray-500">Duration</span>}
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

      <div className="px-2 h-full flex items-center">
        <Select value={`${rooms}-${guests}`} onValueChange={(val) => {
          const [r, g] = val.split('-');
          setRooms(r);
          setGuests(g);
        }}>
          <SelectTrigger className="h-full border-0 bg-transparent w-[180px]">
            <SelectValue placeholder={getRoomGuestLabel(rooms, guests)} />
          </SelectTrigger>
          <SelectContent className="bg-white w-[280px]">
            <div className="px-3 py-2">
              <p className="text-sm font-bold mb-2">Rooms</p>
              <div className="grid grid-cols-3 gap-1">
                {Array.from({length: 10}, (_, i) => i + 1).map((num) => (
                  <SelectItem 
                    key={`room-${num}`} 
                    value={`${num}-${guests}`}
                    className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer text-center"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>{num}</span>
                      {num === Number(rooms) && <Check className="h-4 w-4 text-green-500 ml-1" />}
                    </div>
                  </SelectItem>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-200 my-1" />
            <div className="px-3 py-2">
              <p className="text-sm font-bold mb-2">Guests</p>
              <div className="grid grid-cols-3 gap-1">
                {Array.from({length: 5}, (_, i) => i + 1).map((num) => (
                  <SelectItem 
                    key={`guest-${num}`} 
                    value={`${rooms}-${num}`}
                    className="px-2 py-1 rounded hover:bg-gray-100 cursor-pointer text-center"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span>{num}</span>
                      {num === Number(guests) && <Check className="h-4 w-4 text-green-500 ml-1" />}
                    </div>
                  </SelectItem>
                ))}
              </div>
            </div>
          </SelectContent>
        </Select>
      </div>

      <div className="px-2 h-full flex items-center">
        <Select>
          <SelectTrigger className="h-full border-0 bg-transparent w-[140px]">
            <SelectValue placeholder="Special rates" className="text-sm" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="group">Group</SelectItem>
            <SelectItem value="corporate">Corporate</SelectItem>
            <SelectItem value="seasonal">Seasonal</SelectItem>
            <SelectItem value="promotional">Promo</SelectItem>
            <SelectItem value="membership">Member</SelectItem>
            <SelectItem value="extended">Extended</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white px-4 h-10 rounded-full font-montserrat text-sm mx-2">
        Let's GO!
      </Button>
    </div>
  );
};