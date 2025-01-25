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
      <div className="bg-[#f9f8fc] hover:bg-[#F7FBFF] border-l border-t border-b border-[#F5F5F5] shadow-[0px_2px_2px_rgba(0,0,0,0.13)] rounded-[25px] flex flex-row items-center justify-between gap-[23px] w-full md:w-[865px] py-[18px] px-[9px] flex-wrap md:flex-nowrap">
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
      </div>
    </>
  );
};

export default SearchSpace;
