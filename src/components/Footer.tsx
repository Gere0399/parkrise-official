import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <div className="w-full h-[28px] bg-[#0A1B2F]"></div>
      <div className="w-full bg-[#EFECE7] border-[0.5px] border-[#D9D9D9] shadow-[0px_1px_1.8px_#9F9D9A] ">
        <div className="flex flex-row justify-between items-center px-8 md:px-[52px] py-5 flex-wrap lg:flex-nowrap gap-4 container">
          <div className="flex flex-row justify-start items-center flex-wrap md:flex-nowrap gap-5 md:gap-10">
            <Link to="/" className="font-montserrat font-normal text-[18px] leading-[22px] text-[#0A1B2F]">
              Home
            </Link>
            <Link to="/destinations" className="font-montserrat font-normal text-[18px] leading-[22px] text-[#0A1B2F]">
              Destinations
            </Link>
            <Link to="/brands" className="font-montserrat font-normal text-[18px] leading-[22px] text-[#0A1B2F]">
              Our Brand
            </Link>
            <Link to="/franchise" className="font-montserrat font-normal text-[18px] leading-[22px] text-[#0A1B2F]">
              For Business
            </Link>
          </div>
          <div className="flex flex-row justify-between items-center gap-10 mr-0 lg:mr-40">
            <p className="font-montserrat font-normal text-[14px] leading-[13px] text-[#0A1B2F]">
              <span className="border-b-[2px] border-[#A8A8A8]">
                hello@parkrise
              </span>
              .com
            </p>
            <div className="flex flex-row justify-between items-center gap-10">
              <div className="flex flex-col gap-1">
                <p className="font-montserrat font-normal text-[14px] leading-[13px] text-[#0A1B2F]">
                  <span className="border-b-[2px] border-[#A8A8A8]">Facebo</span>
                  ok
                </p>
                <p className="font-montserrat font-normal text-[14px] leading-[13px] text-[#0A1B2F]">
                  <span className="border-b-[2px] border-[#A8A8A8]">
                    Instagra
                  </span>
                  m
                </p>
              </div>
              <p className="font-montserrat font-normal text-[14px] leading-[13px] text-[#0A1B2F]">
                © 2025
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-0 border-[1px] border-[#979693] "></div>
        <div className="px-[20px] py-[23px] sm:px-[27px] sm:py-[30px] md:px-[37px] md:py-[40px] lg:px-[57px] lg:py-[60px] xl:px-[77px] xl:py-[80px] container">
          <img
            src={"/lovable-uploads/b64ac30e-4d72-4f40-94dc-da41b281490e.png"}
            alt="Parkrise Logo"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="w-full h-0 border-[1px] border-[#979693] "></div>
      <div className="flex flex-row justify-between items-center w-full bg-[#FFFFFF] py-5 px-5 md:px-[117px] flex-wrap md:flex-nowrap gap-4 container">
        <p className="font-montserrat font-bold text-[20px] leading-[15px] text-[#0A1A31]">
          Live. Stay. Belong.
        </p>
        <p className="font-open-sans font-normal text-[13px] leading-[22px] text-[#717171] max-w-[271px] line-clamp-3">
          Parkrise redefines flexible lodging by creating a seamless blend of
          residential comfort, hotel convenience, and authentic local immersion.
        </p>
      </div>
    </footer>
  );
}