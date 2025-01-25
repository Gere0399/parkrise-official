import { Link } from "react-router-dom";
import { Nav } from "@/components/Nav";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const SearchSpace = () => {
  const [selectedOption, setSelectedOption] = useState("1 Room, 1 Guest");
  const options = ["1 Room, 1 Guest", "2 Rooms, 2 Guests", "3 Rooms, 4 Guests"];
  const [selectedRate, setSelectedRate] = useState("Special rates");
  const rates = [
    "Special rates",
    "Corporate rates",
    "Military rates",
    "Senior rates",
  ];
  const [selectedLocation, setSelectedLocation] = useState("Osaka, Japan");
  const locations = [
    "Osaka, Japan",
    "Tokyo, Japan",
    "Kyoto, Japan",
    "Hokkaido, Japan",
  ];
  return (
    <>
      <Nav />
      <div className="max-w-[1440px] mx-auto mt-8 mb-8">
        <div className="mx-4 lg:mx-[20px] xl:mx-[55px]">
          <div className="flex flex-row items-center justify-start gap-[10px] flex-wrap md:flex-nowrap ">
            <p className="font-open-sans font-semibold text-[14px] leading-[20px] text-[#0A1B2F]">
              Arrival 26 dec
            </p>
            <img
              src="/icons/calendar.svg"
              alt="back arrow"
              className="w-[24px] h-[24px] ml-[7px]"
            />
            <p className="font-open-sans font-semibold text-[14px] leading-[20px] text-[#0A1B2F] ml-[20px]">
              Duration 30 feb
            </p>
            <img
              src="/icons/calendar.svg"
              alt="back arrow"
              className="w-[24px] h-[24px] ml-[7px]"
            />
            <div className="h-[37px] w-0 border border-[#B5B5B5] ml-[14px] mr-[14px] hidden sm:block" />
            <div className="relative w-[171px]">
              {/* Selected Option */}
              <button
                className="flex flex-row justify-between items-center w-full h-[34px] border border-[#CDCDCD] rounded-[5px] p-[7px] bg-white"
                onClick={() =>
                  document
                    .getElementById("dropdown-menu")
                    .classList.toggle("hidden")
                }
              >
                <p className="font-open-sans font-semibold text-[14px] leading-[20px] text-[#0A1B2F]">
                  {selectedOption}
                </p>
                <img
                  src="/icons/arrow-down.svg"
                  alt="dropdown arrow"
                  className="w-[12px] h-[12px]"
                />
              </button>
              <ul
                id="dropdown-menu"
                className="absolute top-[40px] left-0 w-full bg-white border border-[#CDCDCD] rounded-[5px] shadow-lg hidden z-[999]"
              >
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="p-[7px] text-[14px] leading-[20px] text-[#0A1B2F] cursor-pointer hover:bg-[#F5F5F5]"
                    onClick={() => {
                      setSelectedOption(option);
                      document
                        .getElementById("dropdown-menu")
                        .classList.add("hidden");
                    }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            </div>
            {/* Special rates */}
            <div className="relative w-[171px]">
              {/* Selected Rate */}
              <button
                className="flex flex-row justify-between items-center w-full h-[34px] border border-[#CDCDCD] rounded-[5px] p-[7px] bg-white"
                onClick={() =>
                  document
                    .getElementById("special-rates-dropdown")
                    .classList.toggle("hidden")
                }
              >
                <p className="font-open-sans font-semibold text-[14px] leading-[20px] text-[#0A1B2F]">
                  {selectedRate}
                </p>
                <img
                  src="/icons/arrow-down.svg"
                  alt="dropdown arrow"
                  className="w-[12px] h-[12px]"
                />
              </button>

              {/* Dropdown Menu */}
              <ul
                id="special-rates-dropdown"
                className="absolute top-[40px] z-[999] left-0 w-full bg-white border border-[#CDCDCD] rounded-[5px] shadow-lg hidden"
              >
                {rates.map((rate, index) => (
                  <li
                    key={index}
                    className="p-[7px] text-[14px] leading-[20px] text-[#0A1B2F] cursor-pointer hover:bg-[#F5F5F5]"
                    onClick={() => {
                      setSelectedRate(rate);
                      document
                        .getElementById("special-rates-dropdown")
                        .classList.add("hidden");
                    }}
                  >
                    {rate}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Search */}
          <div className="flex flex-row items-center justify-start gap-[7px] mt-[23px]">
            {/* Location Dropdown */}
            <div className="relative w-[622px]">
              <button
                className="bg-white hover:bg-white text-[#0A1B2F] rounded-[15px] px-5 py-[22px] relative border flex flex-row justify-between items-center w-full h-[44px] p-[10px]"
                onClick={() =>
                  document
                    .getElementById("location-dropdown")
                    .classList.toggle("hidden")
                }
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div className="flex flex-row justify-start items-center gap-[19px]">
                  <img
                    src="/icons/location.svg"
                    alt="Location Icon"
                    className="w-[24px] h-[24px]"
                  />
                  <p className="font-open-sans font-normal text-[14px] leading-[20px] text-[#0A1B2F]">
                    {selectedLocation}
                  </p>
                </div>
                <img
                  src="/icons/arrow-down.svg"
                  alt="Dropdown Arrow"
                  className="w-[12px] h-[14px]"
                />
                {/* Gradient border */}
                <div
                  className="absolute inset-0 rounded-[14px]"
                  style={{
                    border: "1px solid transparent",
                    borderRadius: "14px",
                    background:
                      "linear-gradient(135deg, #004BA4 35%, #FF4400 100%) border-box",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                  }}
                />
              </button>

              {/* Dropdown Menu */}
              <ul
                id="location-dropdown"
                className="absolute top-[48px] left-0 w-full bg-white border border-[#CDCDCD] rounded-[15px] shadow-lg hidden z-10"
              >
                {locations.map((location, index) => (
                  <li
                    key={index}
                    className="p-[10px] flex items-center gap-[19px] text-[14px] leading-[20px] text-[#0A1B2F] cursor-pointer hover:bg-[#F5F5F5]"
                    onClick={() => {
                      setSelectedLocation(location);
                      document
                        .getElementById("location-dropdown")
                        .classList.add("hidden");
                    }}
                  >
                    <img
                      src="/icons/location.svg"
                      alt="Location Icon"
                      className="w-[24px] h-[24px]"
                    />
                    {location}
                  </li>
                ))}
              </ul>
            </div>

            {/* Divider */}
            <div className="h-[44px] w-0 border border-[#B5B5B5] mr-[12px] hidden sm:block" />

            {/* Search Icon */}
            <div className="min-w-[43px] min-h-[40px] w-[43px] h-[40px] bg-[#0A1B2F] rounded-[5px] px-[7px] py-[6px]">
              <img
                src="/icons/search.svg"
                alt="Search Icon"
                className="w-[28px] h-[28px]"
              />
            </div>
          </div>
          <div className="flex flex-row justify-start items-center gap-[11px] mt-6 w-[272px] h-[36px] bg-[#F0F4F9] rounded-[25px] px-[8px] py-1">
            <button className="ml-[15px] font-montserrat font-medium text-[14px] leading-[23px] text-[#0A1B2F]">
              Highest Price
            </button>
            <button className="w-[131px] h-[28px] bg-[#FFFFFF] rounded-[25px] font-montserrat font-semibold text-[14px] leading-[23px] text-[#0A1B2F]">
              Lowest Price
            </button>{" "}
          </div>
          {/* card */}
          <div className="bg-[#f9f8fc] hover:bg-[#F7FBFF] border-l border-t border-b border-[#F5F5F5] shadow-[0px_2px_2px_rgba(0,0,0,0.13)] rounded-[25px] flex flex-row items-center justify-between gap-[23px] w-full md:w-[750px] lg:w-[865px] py-[18px] px-[9px] flex-wrap md:flex-nowrap mt-[18px] hover:cursor-pointer pr-7">
            <img
              src="/lovable-uploads/parkCard.png"
              alt="video"
              className="w-[290] md:w-[250px] ld:w-[290px] h-[203px]"
            />
            <div className="w-full">
              <div className="flex flex-row justify-between items-center w-full">
                <p className="font-montserrat font-bold text-[17px] leading-[31px] text-[#0B1A2E]">
                  Osaka Sample name apartment
                </p>
                <div className="flex flex-col justify-center items-center min-w-[40px] min-h-[40px] rounded-full border border-[[#DFDFDF]]">
                  <img
                    src="/icons/heart-outline.svg"
                    alt="back arrow"
                    className="w-[28px] h-[28px]"
                  />
                </div>
              </div>
              <p className="font-montserrat font-normal text-[15px] leading-[19px] text-[#555555] mt-[2px]">
                Sample - Experience a new level of luxury in the heart of Osaka,
                just a 5-minute stroll from the magnificent Osaka Castle. Enjoy
                spacious, elegantly designed rooms, panoramic city views...
              </p>
              <div className="flex flex-row justify-start items-center gap-[22px] mt-[12px]">
                <div className="flex flex-row justify-start items-center gap-[4px]">
                  <img
                    src="/icons/paddle.svg"
                    alt="back arrow"
                    className="w-[30px] h-[30px]"
                  />
                  <p className="font-open-sans font-normal text-[15px] leading-[22px] text-center text-[#0B1A2E]">
                    Pickleball
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-[4px]">
                  <img
                    src="/icons/swimming-pool.svg"
                    alt="back arrow"
                    className="w-[30px] h-[30px]"
                  />
                  <p className="font-open-sans font-normal text-[15px] leading-[22px] text-center text-[#0B1A2E]">
                    Pool
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center gap-[15px] mt-[6px]">
                <div className="flex flex-row justify-start items-center gap-[4px]">
                  <img
                    src="/icons/weight-lifting.svg"
                    alt="back arrow"
                    className="w-[30px] h-[30px]"
                  />
                  <p className="font-open-sans font-normal text-[15px] leading-[22px] text-center text-[#0B1A2E]">
                    Gym room
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center gap-[4px]">
                  <img
                    src="/icons/plant.svg"
                    alt="back arrow"
                    className="w-[30px] h-[30px]"
                  />
                  <p className="font-open-sans font-normal text-[15px] leading-[22px] text-center text-[#0B1A2E]">
                    Plants
                  </p>
                </div>
              </div>
              <div className="flex flex-row justify-end items-center gap-[15px] mt-8 md:mt-0">
                <p className="font-montserrat font-bold text-[21px] leading-[31px] text-[#FF723F]">
                  $32
                  <span className="font-montserrat font-medium text-[18px] leading-[31px] text-[#3C3C3C]">
                    /night
                  </span>
                </p>
                <button className="w-[91px] h-[40px] bg-[#ECECEC] border border-[#D8D8D8] rounded-[5px] font-open-sans font-normal text-[16px] leading-[22px] text-[#292929]">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSpace;
