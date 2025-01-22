import { Calendar as CalendarIcon, MapPin, Check, ChevronDown, Search } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { format } from "date-fns";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMobile } from "@/hooks/use-mobile";

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
  const navigate = useNavigate();
  const isMobile = useMobile();
  
  const getRoomGuestLabel = (rooms: string, guests: string) => {
    const roomText = `${rooms} ${Number(rooms) === 1 ? 'room' : 'rooms'}`;
    const guestText = `${guests} ${Number(guests) === 1 ? 'guest' : 'guests'}`;
    return `${roomText}, ${guestText}`;
  };

  const handleLocationSelect = (loc: string) => {
    setLocation(loc);
    setIsLocationOpen(false);
  };

  if (isMobile) {
    return (
      <div className="flex flex-col gap-4 w-full bg-white/90 backdrop-blur-sm rounded-3xl p-4">
        <Popover open={isLocationOpen} onOpenChange={setIsLocationOpen}>
          <PopoverTrigger asChild>
            <div className="flex items-center p-3 bg-white rounded-xl border cursor-pointer">
              <MapPin className="w-4 h-4 text-[#00B2B2] shrink-0" />
              <input
                type="text"
                placeholder="Search location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent border-none focus:outline-none text-[#222222] w-full font-montserrat text-sm placeholder:text-[#222222] px-2"
              />
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-[calc(100vw-3rem)] bg-white p-0" align="start">
            <div className="py-2 max-h-[50vh] overflow-auto">
              {SAMPLE_LOCATIONS.map((loc) => (
                <div
                  key={loc}
                  className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm flex items-center justify-between"
                  onClick={() => handleLocationSelect(loc)}
                >
                  <span>{loc}</span>
                  {location === loc && <Check className="h-4 w-4 text-green-500 ml-1" />}
                </div>
              ))}
            </div>
          </PopoverContent>
        </Popover>

        <div className="flex gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex-1 justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {arrival ? format(arrival, "MMM dd") : "Check in"}
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
              <Button variant="outline" className="flex-1 justify-start text-left font-normal">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {duration ? format(duration, "MMM dd") : "Check out"}
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
        </div>

        <Select value={`${rooms}-${guests}`} onValueChange={(val) => {
          const [r, g] = val.split('-');
          setRooms(r);
          setGuests(g);
        }}>
          <SelectTrigger className="w-full">
            <SelectValue>{getRoomGuestLabel(rooms, guests)}</SelectValue>
          </SelectTrigger>
          <SelectContent className="w-[280px]">
            <div className="p-2">
              <h3 className="font-medium mb-2">Rooms & Guests</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm mb-2">Rooms</p>
                  <div className="grid grid-cols-5 gap-2">
                    {Array.from({length: 5}, (_, i) => i + 1).map((num) => (
                      <div
                        key={`room-${num}`}
                        onClick={() => setRooms(num.toString())}
                        className={`p-2 text-center rounded cursor-pointer ${
                          num === Number(rooms) 
                            ? 'bg-primary text-white' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm mb-2">Guests</p>
                  <div className="grid grid-cols-5 gap-2">
                    {Array.from({length: 5}, (_, i) => i + 1).map((num) => (
                      <div
                        key={`guest-${num}`}
                        onClick={() => setGuests(num.toString())}
                        className={`p-2 text-center rounded cursor-pointer ${
                          num === Number(guests) 
                            ? 'bg-primary text-white' 
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SelectContent>
        </Select>

        <Select value={specialRate} onValueChange={setSpecialRate}>
          <SelectTrigger>
            <SelectValue placeholder="Special rates" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="group">Group</SelectItem>
            <SelectItem value="corporate">Corporate</SelectItem>
            <SelectItem value="seasonal">Seasonal</SelectItem>
            <SelectItem value="promotional">Promo</SelectItem>
            <SelectItem value="membership">Member</SelectItem>
            <SelectItem value="extended">Extended</SelectItem>
          </SelectContent>
        </Select>

        <Button 
          className="w-full bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white h-12 rounded-xl font-montserrat text-sm"
          onClick={() => navigate('/destinations')}
        >
          <Search className="w-4 h-4 mr-2" />
          Search
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between bg-white rounded-full h-12 w-full max-w-5xl">
      <Popover open={isLocationOpen} onOpenChange={setIsLocationOpen}>
        <PopoverTrigger asChild>
          <div className="flex items-center pl-4 h-full cursor-pointer">
            <MapPin className="w-4 h-4 text-[#00B2B2] shrink-0" />
            <input
              type="text"
              placeholder="Search location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="bg-transparent border-none focus:outline-none text-[#222222] w-full font-montserrat text-sm placeholder:text-[#222222] px-2"
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
                onClick={() => handleLocationSelect(loc)}
              >
                <span>{loc}</span>
                {location === loc && <Check className="h-4 w-4 text-green-500 ml-1" />}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      <div className="flex items-center h-full -ml-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="h-full border-0 bg-white/5 backdrop-blur-sm hover:bg-gray-50 hover:text-[#00B2B2] px-2"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {arrival ? (
                <span className="text-[#222222]">{format(arrival, "MMM dd, yyyy")}</span>
              ) : (
                <span className="text-[#222222]">Check in</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white shadow-lg rounded-lg border" align="start">
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
            <Button
              variant="ghost"
              className="h-full border-0 bg-white/5 backdrop-blur-sm hover:bg-gray-50 hover:text-[#00B2B2] px-2"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {duration ? (
                <span className="text-[#222222]">{format(duration, "MMM dd, yyyy")}</span>
              ) : (
                <span className="text-[#222222]">Check out</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 bg-white shadow-lg rounded-lg border" align="start">
            <Calendar
              mode="single"
              selected={duration}
              onSelect={setDuration}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="h-full flex items-center -ml-2">
        <Select value={`${rooms}-${guests}`} onValueChange={(val) => {
          const [r, g] = val.split('-');
          setRooms(r);
          setGuests(g);
        }}>
          <SelectTrigger className="h-full border-0 bg-transparent w-[140px] text-[#222222] px-2">
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

      <div className="h-full flex items-center -ml-2">
        <Select value={specialRate} onValueChange={setSpecialRate}>
          <SelectTrigger className="h-full border-0 bg-transparent w-[130px] text-[#222222] px-2">
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

      <Button 
        className="bg-[#4F46E5] hover:bg-[#4F46E5]/90 text-white px-4 h-10 rounded-full font-montserrat text-sm mr-1"
        onClick={() => navigate('/destinations')}
      >
        Let's GO!
      </Button>
    </div>
  );
};
