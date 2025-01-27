import { Nav } from "@/components/Nav";
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

const SpaceDetail = () => {
  return (
    <div className="relative">
      <Nav />
      <div className="max-w-[1440px] mx-auto mt-32 mb-8">
        <div className="flex flex-col lg:flex-row justify-start items-start  mx-4 lg:mx-[20px] xl:mx-[60px]">
          <div className="flex-1">
            <Link to="/destinations">
              <img src="/icons/left-arrow.svg" alt="back arrow" />
            </Link>
            <h1 className="mt-4 font-montserrat text-[28px] lg:text-[40px] font-medium leading-[34px] lg:leading-[38px] tracking-[-0.01em] text-left text-[#092D58] w-full lg:w-[294px]">
              2 Bedroom Luxury apartment at the floating seahorse
            </h1>
            <div className="flex flex-row justify-start items-center gap-[11px] mt-4">
              <div className="flex flex-col justify-center items-center w-[44px] h-[44px] rounded-[15px] border-2 border-[#14365F]">
                <img src="/icons/heart-black.svg" alt="back arrow" />
              </div>
              <div className="flex flex-col justify-center items-center w-[44px] h-[44px] rounded-[15px] border-2 border-[#14365F]">
                <img src="/icons/link-black.svg" alt="back arrow" />
              </div>
            </div>
            <div className="flex flex-row justify-end items-center mt-[65px]">
              <div className="flex flex-col justify-end items-end">
                <p className="text-[#0B1A2E] font-sans text-[16px] font-semibold leading-[22px] tracking-[0.02em] text-right">
                  Made by Parkrise group
                </p>
                <button className="text-[#0A1B2F] w-[115px] h-[35px] border border-[#14365F] leading-[22px] rounded-[15px] text-[15px] font-bold mt-[7px]">
                  Contact us
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/lovable-uploads/detail-video.svg"
              alt="video"
              className="max-w-full lg:max-w-[400px] xl:max-w-[550px] h-auto object-cover ml-0 lg:ml-2 xl:ml-[54px] mt-4 lg:mt-0"
            />
            <div className="absolute bottom-4 left-2 md:left-20">
              <div className="flex justify-start items-center flex-wrap gap-[7px]">
                <div className="rounded-[45px]  flex flex-col justify-center items-center  px-5 h-[46px]  text-center text-white bg-[#141414]/50 blur-[4]">
                  View on map
                </div>
                <div className="rounded-[45px]  flex flex-col justify-center items-center  px-5 h-[46px]  text-center text-white bg-[#141414]/50 blur-[4]">
                  3D view
                </div>
                <div className="flex flex-col justify-center items-center rounded-full  w-[46px] h-[46px]  text-center text-white bg-[#141414]/50 blur-[4]">
                  <img src="/icons/download-white.svg" alt="download" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[20px] ml-0 lg:ml-[21px]">
            <p className="font-montserrat text-[26px] font-bold leading-[31px] text-[#FF723F]">
              $126{" "}
              <span className="font-montserrat text-[22px] font-medium leading-[31px] text-left text-[#3C3C3C]">
                /night
              </span>
            </p>
            <div className="flex flex-wrap justify-start items-center gap-[10px] mt-[7px]">
              <div className="flex justify-start items-center gap-0.5 text-[#0B1A2E]">
                <img src="/icons/paddle.svg" alt="back arrow" />
                <span className="text-[12px] font-semibold leading-[22px] tracking-[0.02em] text-left">
                  Ready
                </span>
              </div>
              <div className="flex justify-start items-center gap-0.5 text-[#0B1A2E]">
                <img src="/icons/paddle.svg" alt="back arrow" />
                <span className="text-[12px] font-semibold leading-[22px] tracking-[0.02em] text-left">
                  Reserve online
                </span>
              </div>
              <div className="flex justify-start items-center gap-0.5 text-[#0B1A2E]">
                <img src="/icons/paddle.svg" alt="back arrow" />
                <span className="text-[12px] font-semibold leading-[22px] tracking-[0.02em] text-left">
                  Easy
                </span>
              </div>
              <div className="flex justify-start items-center gap-0.5 text-[#0B1A2E]">
                <img src="/icons/paddle.svg" alt="back arrow" />
                <span className="text-[12px] font-semibold leading-[22px] tracking-[0.02em] text-left">
                  AI & human assistance{" "}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-[5px] mt-[29px]">
              <div className="w-[20px] h-[5px] rounded-[7px] bg-[#464646]"></div>
              <div className="w-[20px] h-[5px] rounded-[7px] border border-[#464646]"></div>
              <div className="w-[20px] h-[5px] rounded-[7px] border border-[#464646]"></div>
              <div className="w-[20px] h-[5px] rounded-[7px] border border-[#464646]"></div>
              <div className="w-[20px] h-[5px] rounded-[7px] border border-[#464646]"></div>
              <div className="w-[20px] h-[5px] rounded-[7px] border border-[#464646]"></div>
              <div className="w-[20px] h-[5px] rounded-[7px] border border-[#464646]"></div>
              <div className="w-[20px] h-[5px] rounded-[7px] border border-[#464646]"></div>
              <div className="w-[20px] h-[5px] rounded-[7px] border border-[#464646]"></div>
            </div>
            <p className="font-montserrat text-[14px] font-normal leading-[19px] tracking-[0.02em] text-left mt-[7px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently.
            </p>
            <p className="font-semibold leading-[22px] tracking-[0.02em] text-left text-[#0B1A2E] mt-[26px]">
              Features
            </p>
            <div className="flex flex-wrap gap-[10px] mt-[7px]">
              {tagsData.map((item, index) => (
                <div
                  key={index}
                  className="px-3 h-[30px] text-[#0B1A2E] rounded-tl-[12px] flex justify-center items-center gap-[3px] border border-[#E1E1E1] rounded-xl bg-[#F9F9F9] text-[15px] font-normal leading-[22px] tracking-[0.02em]"
                >
                  <img src={item.icon} alt={item.tag} />
                  {item.tag}
                </div>
              ))}
            </div>
            <div className="flex justify-end items-center">
              <Button
                className="bg-white hover:bg-white text-[##A1B2F] rounded-[15px] px-5 py-[22px] relative border-0 mt-[23px]"
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <span className="relative z-10 font-montserrat text-[15px] font-bold leading-[22px]">
                  Like it? Reserve
                </span>
                <div
                  className="absolute inset-0 rounded-[14px]"
                  style={{
                    border: "2px solid transparent",
                    borderRadius: "14px",
                    background:
                      "linear-gradient(135deg, #004BA4 35%, #FF4400 100%) border-box",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                  }}
                />
              </Button>
            </div>
          </div>
        </div>
        <div className="ml-4 md:ml-[175px] mt-[40px]">
          <div className="flex  justify-center md:justify-start items-center gap-[14px] flex-wrap lg:flex-nowrap">
            {imgListData.map((imgSrc, index) => (
              <div key={index} className="relative w-[245px] h-[150px]">
                <img
                  src={imgSrc}
                  alt={`detail-${index + 1}`}
                  className="w-full h-full object-cover rounded-[18px]"
                />
                <div className="absolute top-[7px] right-[7px]">
                  <div className="flex flex-col justify-center items-center rounded-full w-[32px] h-[32px] text-center text-white bg-[#141414]/50">
                    <img src="/icons/download-white.svg" alt="download" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="fixed right-3 bottom-6 w-[4.375rem] h-[4.375rem] bg-[#2E2E2E] rounded-full flex flex-col items-center justify-center ">
        {" "}
        <img
          src="/icons/questionSign.svg"
          alt="questionSign"
          className="w-[1.875rem] h-[1.875rem]"
        />
      </div>
    </div>
  );
};

export default SpaceDetail;
