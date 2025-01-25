import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export function Nav() {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation(); // Get the current location/path

  const handleOpenSidebar = () => {
    if (sidebarRef?.current) {
      sidebarRef?.current?.classList.remove("translate-x-[120%]");
      sidebarRef?.current?.classList.add("translate-x-0");
    }
  };
  const handleCloseSidebar = () => {
    if (sidebarRef?.current) {
      sidebarRef?.current?.classList.remove("translate-x-0");
      sidebarRef?.current?.classList.add("translate-x-[120%]");
    }
  };

  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Destinations",
      link: "/destinations",
    },
    {
      name: "Our brand",
      link: "/our-brand",
    },
    {
      name: "Franchise",
      link: "/franchise",
    },
    {
      name: "For businesses",
      link: "/for-businesses",
    },
  ];

  return (
    <nav>
      <div className="max-w-[1440px] mx-auto ">
        <div className="flex justify-between items-center py-6   mx-4 lg:mx-[20px] xl:mx-[60px] ">
          <img
            src={"/lovable-uploads/b64ac30e-4d72-4f40-94dc-da41b281490e.png"}
            alt="Parkrise Logo"
            className="w-[131px] h-[15px]"
          />
          <ul className="justify-start items-center gap-5 hidden md:flex lg:mr-[180px]">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`font-montserrat text-[14px] font-medium leading-[30px] text-center [text-underline-position:from-font] [text-decoration-skip-ink:none] hover:text-[#00B2B2] cursor-pointer ${
                  location.pathname === item.link
                    ? "text-[#00B2B2]"
                    : "text-black"
                }`}
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
          {/* Todo- menu icon */}
          <img
            src="/icons/menu.svg"
            alt="menu"
            onClick={handleOpenSidebar}
            className="block md:hidden size-8"
          />
        </div>
      </div>

      <div
        ref={sidebarRef}
        className={` bg-white  md:hidden translate-x-[120%] shadow-primary  w-full h-full max-h-full  fixed z-[50] shadow-grey transition-transform duration-[0.5s] ease-[ease-in-out] overflow-y-auto left-0 top-0 p-4`}
      >
        <div>
          <div className="flex justify-end items-center w-full">
            <img
              src="/icons/cross.svg"
              alt="back arrow"
              onClick={handleCloseSidebar}
            />
          </div>
          <div className="flex justify-center items-center">
            {/* Todo- cross icon */}
            <img
              src={"/lovable-uploads/b64ac30e-4d72-4f40-94dc-da41b281490e.png"}
              alt="Parkrise Logo"
              className="w-[131px] h-[15px]"
            />
          </div>
          <ul className="flex flex-col justify-start items-center gap-5   mt-10">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`font-montserrat text-[14px] font-medium leading-[30px] text-center [text-underline-position:from-font] [text-decoration-skip-ink:none] hover:text-[#00B2B2] cursor-pointer ${
                  location.pathname === item.link
                    ? "text-[#00B2B2]"
                    : "text-black"
                }`}
              >
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
