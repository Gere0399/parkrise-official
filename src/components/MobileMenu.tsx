import { useState } from "react";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/destinations", label: "Destinations" },
    { path: "/franchise", label: "Franchise" },
  ];

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className={`relative z-50 p-2 transition-all duration-1000 ${
          isOpen ? "rotate-360 animate-pulse" : ""
        }`}
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-40">
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-montserrat ${
                  location.pathname === item.path
                    ? "text-[#00B2B2]"
                    : "text-gray-700 hover:text-[#00B2B2]"
                } transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};