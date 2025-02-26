import { MapPin, ChevronDown, Check } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Link, useLocation } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

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
  "San Francisco, CA",
];

export const Navbar = ({ showSearch = true, variant = "light" }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotAtTop, setIsNotAtTop] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsNotAtTop(window.scrollY > 0);
      const scrolled = window.scrollY > window.innerHeight * 0.8;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = variant === "dark";
  const isFranchise = location.pathname === "/franchise";

  return (
    <nav
      className={`${isDark ? "bg-[#F2F2F2]" : ""} ${
        !isFranchise ? "fixed top-0 left-0 right-0" : ""
      } z-50`}
    >
      {!isDark && isNotAtTop && (
        <div className="absolute inset-x-0 top-0 py-12 bg-black/20 backdrop-blur-sm transition-opacity duration-300" />
      )}

      <div className="relative max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-8 py-4 md:py-6">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={
                isDark
                  ? "/lovable-uploads/b64ac30e-4d72-4f40-94dc-da41b281490e.png"
                  : "/lovable-uploads/3232ef68-4d90-47b1-af6c-cbce7ac2c0e5.png"
              }
              alt="Parkrise Logo"
              className="md:h-8 h-4 w-auto"
            />
          </Link>
        </div>

        {showSearch && isScrolled && (
          <Popover open={isLocationOpen} onOpenChange={setIsLocationOpen}>
            <PopoverTrigger asChild>
              <div className="flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full ml-4 mr-1 w-64 cursor-pointer border border-white">
                <MapPin className="w-3 h-3 text-white shrink-0" />
                <input
                  type="text"
                  placeholder="Search location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none focus:outline-none text-white placeholder-white text-xs px-2 w-full font-montserrat truncate"
                />
                <ChevronDown className="w-3 h-3 text-white" />
              </div>
            </PopoverTrigger>
            <PopoverContent
              className="w-64 p-0 bg-white"
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
                      setSearchQuery(loc);
                      setIsLocationOpen(false);
                    }}
                  >
                    <span>{loc}</span>
                    {searchQuery === loc && (
                      <Check className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        )}

        <div className="hidden md:flex items-center space-x-2 mr-20">
          <Link to="/">
            <Button
              variant="ghost"
              className={`${
                isDark
                  ? "text-navy hover:text-[#00B2B2]"
                  : "text-white hover:text-[#00B2B2]"
              } text-xs font-montserrat px-2  text-[14px] font-medium leading-[30px] text-center [text-underline-position:from-font] [text-decoration-skip-ink:none] hover:text-[#00B2B2] cursor-pointer  ${
                location.pathname === "/" ? "text-[#00B2B2]" : ""
              }`}
            >
              Home
            </Button>
          </Link>
          <Link to="/destinations">
            <Button
              variant="ghost"
              className={`${
                isDark
                  ? "text-navy hover:text-[#00B2B2]"
                  : "text-white hover:text-[#00B2B2]"
              } text-xs font-montserrat text-[14px] font-medium leading-[30px] text-center [text-underline-position:from-font] [text-decoration-skip-ink:none] hover:text-[#00B2B2] cursor-pointer  px-2 ${
                location.pathname === "/destinations" ? "text-[#00B2B2]" : ""
              }`}
            >
              Destinations
            </Button>
          </Link>
          <Link to="/brands">
            <Button
              variant="ghost"
              className={`${
                isDark
                  ? "text-navy hover:text-[#00B2B2]"
                  : "text-white hover:text-[#00B2B2]"
              } text-xs  px-2 font-montserrat text-[14px] font-medium leading-[30px] text-center [text-underline-position:from-font] [text-decoration-skip-ink:none] hover:text-[#00B2B2] cursor-pointer ${
                location.pathname === "/brands" ? "text-[#00B2B2]" : ""
              }`}
            >
              Our Brand
            </Button>
          </Link>
          <Link to="/franchise">
            <Button
              variant="ghost"
              className={`${
                isDark
                  ? "text-navy hover:text-[#00B2B2]"
                  : "text-white hover:text-[#00B2B2]"
              } text-xs font-montserrat text-[14px] font-medium leading-[30px] text-center [text-underline-position:from-font] [text-decoration-skip-ink:none] hover:text-[#00B2B2] cursor-pointer  px-2 ${
                location.pathname === "/franchise" ? "text-[#00B2B2]" : ""
              }`}
            >
              Franchise
            </Button>
          </Link>
        </div>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};
