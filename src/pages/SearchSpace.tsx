import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const tagsData = [
  { tag: "Pool", icon: "/icons/swimming-pool.svg" },
  { tag: "Pickleball", icon: "/icons/paddle.svg" },
  { tag: "Gym room", icon: "/icons/weight-lifting.svg" },
  { tag: "Pickleball", icon: "/icons/paddle.svg" },
  { tag: "Gym room", icon: "/icons/weight-lifting.svg" },
  { tag: "Plants", icon: "/icons/plant.svg" },
  { tag: "Pool", icon: "/icons/swimming-pool.svg" },
  { tag: "Pickleball", icon: "/icons/swimming-pool.svg" },
  { tag: "Gym room", icon: "/icons/paddle.svg" },
];
const imgListData = [
  "/lovable-uploads/pic-1.png",
  "/lovable-uploads/pic-2.png",
  "/lovable-uploads/pic-3.png",
  "/lovable-uploads/pic-4.png",
  "/lovable-uploads/pic-5.png",
];

const SearchSpace = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-start gap-[10px] flex-wrap md:flex-nowrap">
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
        <div className="h-[37px] w-0 border border-[#B5B5B5] ml-[14px] mr-[14px]" />
        <div className="flex flex-row justify-between items-center w-[171px] h-[34px] border border-[#CDCDCD] rounded-[5px] p-[7px]">
          <p className="font-open-sans font-semibold text-[14px] leading-[20px] text-[#0A1B2F]">
            1 Room, 1 Guest
          </p>
          <img
            src="/icons/arrow-down.svg"
            alt="back arrow"
            className="w-[12px] h-[12px]"
          />
        </div>
        <div className="flex flex-row justify-between items-center w-[171px] h-[34px] border border-[#CDCDCD] rounded-[5px] p-[7px]">
          <p className="font-open-sans font-semibold text-[14px] leading-[20px] text-[#0A1B2F]">
            Special rates
          </p>
          <img
            src="/icons/arrow-down.svg"
            alt="back arrow"
            className="w-[12px] h-[12px]"
          />
        </div>
      </div>
      <div className="flex flex-row items-center justify-start flex-wrap md:flex-nowrap gap-[7px] mt-[12px]">
        <div className="flex flex-row justify-between items-center w-[622px] h-[44px] border border-gradient-to-r from-[#003F89] via-[#003F89] to-[#FF4400] p-[10px] rounded-[25px]">
          <div className="flex flex-row justify-start items-center gap-[19px]">
            <img
              src="/icons/location.svg"
              alt="back arrow"
              className="w-[24px] h-[24px]"
            />
            <p className="font-open-sans font-normal text-[14px] leading-[20px] text-[#0A1B2F]">
              Osaka, Japan
            </p>
          </div>
          <img
            src="/icons/arrow-down.svg"
            alt="back arrow"
            className="w-[12px] h-[14px]"
          />
        </div>
        <div className="h-[44px] w-0 border border-[#B5B5B5] mr-[12px]" />
        <div className="w-[43px] h-[40px] bg-[#0A1B2F] rounded-[5px] px-[7px] py-[6px]">
          <img
            src="/icons/search.svg"
            alt="Search"
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
      {/* <div className="bg-[#f9f8fc] hover:bg-[#F7FBFF] border-l border-t border-b border-[#F5F5F5] shadow-[0px_2px_2px_rgba(0,0,0,0.13)] rounded-[25px] flex flex-row items-center justify-between gap-[23px] w-full md:w-[865px] py-[18px] px-[9px] flex-wrap md:flex-nowrap">
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
            <img
              src="/icons/heart-outline.svg"
              alt="back arrow"
              className="w-[28px] h-[28px]"
            />
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
          <div className="flex flex-row justify-end items-center gap-[15px]">
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
      </div> */}
    </>
  );
};

export default SearchSpace;
