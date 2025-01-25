import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";

export function Nav() {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="main">
      <nav className="main_content">
        <div className="bg-white">
          <div className="main">
            <div className="flex justify-between items-center py-6 px-6 lg:px-12 main_content">
              <img
                src={
                  "/lovable-uploads/3232ef68-4d90-47b1-af6c-cbce7ac2c0e5.png"
                }
                alt="Parkrise Logo"
                className="md:h-8 h-4 w-auto"
              />
              <div className="flex justify-center items-center gap-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo temporibus reiciendis praesentium odio voluptate saepe
                corporis modi. Sequi nulla accusamus atque tempora eius ad
                blanditiis mollitia, fugiat error quibusdam quos.
              </div>
              <div className="flex justify-start items-center gap-8">
                <img
                  src="/icons/left-arrow.svg"
                  alt="back arrow"
                  onClick={handleOpenSidebar}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          ref={sidebarRef}
          className={` bg-white translate-x-[120%] shadow-primary  w-full h-full max-h-full  fixed z-[50] shadow-grey transition-transform duration-[0.5s] ease-[ease-in-out] overflow-y-auto left-0 top-0 p-4`}
        >
          <div>
            <div className="flex justify-end items-center w-full">
              <img src="/icons/left-arrow.svg" alt="back arrow" />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={
                  "/lovable-uploads/3232ef68-4d90-47b1-af6c-cbce7ac2c0e5.png"
                }
                alt="Parkrise Logo"
                className="md:h-8 h-4 w-auto"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-8 w-full mt-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              hic, deleniti quo velit, quae rem, optio adipisci sunt minima enim
              reprehenderit? Fugit obcaecati dolor esse corrupti illo voluptates
              voluptate quod.
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
