import { Nav } from "@/components/Nav";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <>
      <Nav />
      <div>
        <div className="flex justify-center items-center mt-[175px]">
          <div>
            <h1 className="font-montserrat font-bold text-[36px] leading-[31px] text-[#0A1B2F] text-center">
              Parkrise
            </h1>
            <p className="max-w-[667px] font-open-sans font-normal text-[22px] leading-[26px] text-center text-[#0B1A2E] mt-[12px]">
              At Parkrise, we understand that comfort comes from feeling at
              home. That’s why we provide thoughtfully designed spaces and
              essential resources that help you live life your way, no matter
              how long your stay.
            </p>
          </div>
        </div>
        {/* <div className=" flex flex-row justify-start items-center w-full h-[430px] flex-wrap bg-[#0A1B2F] mt-[52px]">
          <img
            src="/lovable-uploads/img-1.svg"
            alt="video"
            className="w-[576px] h-[338px]"
          />
          <img
            src="/lovable-uploads/img-2.svg"
            alt="video"
            className="w-[576px] h-[338px]"
          />
          <img
            src="/lovable-uploads/img-3.svg"
            alt="video"
            className="w-[289px] h-[336px]"
          />
        </div> */}
        <div className="xl:w-[1164px] w-full mt-[32px] sm:mt-[76px] xl:ml-[127px]">
          <p className="font-montserrat font-medium text-[48px] md:text-[130px] sm:text-[70px] leading-[136px] text-[#0A1B2F] ">
            OUR BRAND
          </p>
          <div className="flex flex-row justify-between flex-wrap xl:flex-nowrap items-start mt-[21px] gap-[24px] xl:gap-[185px]">
            <div className="w-full">
              <img
                src={
                  "/lovable-uploads/b64ac30e-4d72-4f40-94dc-da41b281490e.png"
                }
                alt="Parkrise Logo"
                className="w-[252px] h-[28px]"
              />
            </div>
            <div className="flex flex-row justify-start items-start flex-wrap lg:flex-nowrap gap-6">
              <div>
                <p className="font-open-sans font-bold text-[22px] leading-[16px] text-[#0A1B2F] ">
                  WHO WE ARE
                </p>
                <p className="font-open-sans font-normal text-[16px] leading-[22px] text-[#0A1B2F] mt-2">
                  Parkrise is an innovative hospitality brand; we offer
                  flexible-living spaces that create a seamless blend of
                  residential comfort, hotel convenience, and authentic local
                  immersion.
                </p>
                <p className="font-open-sans font-bold text-[22px] leading-[16px] text-[#0A1B2F] mt-8">
                  WHAT WE DO
                </p>
                <p className="font-open-sans font-normal text-[16px] leading-[22px] text-[#0A1B2F] mt-2">
                  We transform hotels into vibrant extended-stay properties that
                  immerse guests in the neighborhood through local designs,
                  curated events, and unique experiences.
                </p>
                <p className="font-open-sans font-bold text-[22px] leading-[24px] text-[#0A1B2F] mt-8">
                  OUR UNIQUE VALUE TO RESIDENTS AND OWNERS
                </p>
                <p className="font-open-sans font-normal text-[16px] leading-[22px] text-[#0A1B2F] mt-2">
                  Our Brand and Culture Delivery team creates a space that
                  allows guests to feel like a local. Hotel owners are left with
                  a sought-after destination where everyone wants to live,
                  resulting in higher occupancy, lower expenses, improved
                  margins, and boosted property value.
                </p>
              </div>
              <div>
                <p className="font-open-sans font-bold text-[22px] leading-[16px] text-[#0A1B2F] ">
                  OUR VISION
                </p>
                <p className="font-open-sans font-normal text-[16px] leading-[22px] text-[#0A1B2F] mt-2">
                  Redefine flexible lodging by creating a seamless blend of
                  residential comfort, hotel convenience, and authentic local
                  immersion, while celebrating the unique personality of every
                  neighborhood.
                </p>
                <p className="font-open-sans font-bold text-[22px] leading-[16px] text-[#0A1B2F] mt-8">
                  OUR MISSION
                </p>
                <p className="font-open-sans font-normal text-[16px] leading-[22px] text-[#0A1B2F] mt-2">
                  Bridge the gap between long-term stays and meaningful travel
                  experiences by delivering consistent, values-driven
                  hospitality that is tailored to the community and empowers
                  properties to shine individually.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:ml-[167px] mt-[32px] md:mt-[73px] w-full md:w-[541px]">
          <p className="font-montserrat font-medium text-[36px] sm:text-[74px] leading-[46px] text-[#0A1B2F]">
            CONTACT
          </p>
          <div className="mt-[30px]">
            <label
              htmlFor="text"
              className="font-montserrat ml-5 font-medium text-[18px] leading-[31px] text-[#0A1B2F]"
            >
              Name and Surname
            </label>
            <input
              type="text"
              id="Geremy Italio"
              className="text-[#0A1B2F] py-[9px] px-[27px] w-full h-[50px] border border-[#4F4F4F] rounded-[15px] mt-[5px] placeholder:font-montserrat placeholder:font-medium placeholder:text-[16px] placeholder:leading-[31px] placeholder:text-[#D2D2D2]"
              placeholder="Geremy Italio"
              required
            />
          </div>
          <div className="mt-[10px]">
            <label
              htmlFor="text"
              className="font-montserrat ml-5 font-medium text-[18px] leading-[31px] text-[#0A1B2F]"
            >
              Company name (optional)
            </label>
            <input
              type="text"
              id="Type your company name"
              className="text-[#0A1B2F] py-[9px] px-[27px] w-full h-[50px] border border-[#4F4F4F] rounded-[15px] mt-[5px] placeholder:font-montserrat placeholder:font-medium placeholder:text-[16px] placeholder:leading-[31px] placeholder:text-[#D2D2D2]"
              placeholder="Type your company name"
              required
            />
          </div>
          <div className="mt-[10px]">
            <label
              htmlFor="text"
              className="font-montserrat ml-5 font-medium text-[18px] leading-[31px] text-[#0A1B2F]"
            >
              Email
            </label>
            <input
              type="text"
              id="hello@parkrise.com"
              className="text-[#0A1B2F] py-[9px] px-[27px] w-full h-[50px] border border-[#4F4F4F] rounded-[15px] mt-[5px] placeholder:font-montserrat placeholder:font-medium placeholder:text-[16px] placeholder:leading-[31px] placeholder:text-[#D2D2D2]"
              placeholder="hello@parkrise.com"
              required
            />
          </div>
          <div className="mt-[10px]">
            <label
              htmlFor="text"
              className="font-montserrat ml-5 font-medium text-[18px] leading-[31px] text-[#0A1B2F]"
            >
              Phone number (optional)
            </label>
            <input
              type="text"
              id="+02 3024940494"
              className="text-[#0A1B2F] py-[9px] px-[27px] w-full h-[50px] border border-[#4F4F4F] rounded-[15px] mt-[5px] placeholder:font-montserrat placeholder:font-medium placeholder:text-[16px] placeholder:leading-[31px] placeholder:text-[#D2D2D2]"
              placeholder="+02 3024940494"
              required
            />
          </div>
          <div className="mt-[10px]">
            <label
              htmlFor="text"
              className="font-montserrat ml-5 font-medium text-[18px] leading-[31px] text-[#0A1B2F]"
            >
              Text
            </label>
            <textarea
              id="Tell us more..."
              className="text-[#0A1B2F] py-[9px] px-[27px] w-full h-[90px] border border-[#4F4F4F] rounded-[15px] mt-[5px] placeholder:font-montserrat placeholder:font-medium placeholder:text-[16px] placeholder:leading-[31px] placeholder:text-[#D2D2D2]"
              placeholder="Tell us more..."
              required
            />
          </div>
          <div className="flex justify-end">
            <button className="text-[#0A1B2F] w-[115px] h-[35px] border border-[#14365F] leading-[22px] rounded-[15px] text-[15px] font-bold mt-[7px]">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
