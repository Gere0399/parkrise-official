import { Nav } from "@/components/Nav";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="px-4 py-4 md:px-[89px] md:py-[126px]">
        <img
          src="/icons/backArrow.svg"
          alt="dropdown arrow"
          className="w-[30px] h-[30px] mb-5 lg:mb-[112px]"
        />
        <div className="flex justify-start items-start flex-wrap lg:flex-nowrap gap-5 xl:gap-[112px] xl:ml-[58px]">
          <div>
            <p className="max-w-[496px] text-center font-montserrat font-semibold text-2xl leading-[35px] text-[#242424] mt-[29px]">
              Build your customized space, considering local flavours
            </p>
          </div>
          <div className="w-[501px]">
            <button className="flex justify-center items-center w-full h-[61px] gap-2 bg-[#242424] border border-[#393939] rounded-[6px]">
              <img
                src="/icons/google.svg"
                alt="dropdown arrow"
                className="w-[30px] h-[30px]"
              />
              <p className="font-poppins font-medium text-sm leading-[21px] text-[#DADADA]">
                Google
              </p>
            </button>
            <button className="flex justify-center items-center w-full h-[61px] gap-2 bg-[#242424] border border-[#393939] rounded-[6px] mt-[14px]">
              <img
                src="/icons/fb.svg"
                alt="dropdown arrow"
                className="w-[32px] h-[32px]"
              />
              <p className="font-poppins font-medium text-sm leading-[21px] text-[#DADADA]">
                Facebook
              </p>
            </button>
            <div className="flex justify-start items-center flex-wrap sm:flex-nowrap mt-[19px] gap-[26px]">
              <hr className="w-[174px] border-t border-[#3B3940]" />
              <p className="font-poppins font-medium text-[14px] w-[109px] leading-[21px] text-[#242424]">
                Or register with
              </p>
              <hr className="w-[174px] border-t border-[#3B3940]" />
            </div>
            <input
              type="text"
              id="place"
              className="w-full h-[62px] p-4 mt-[23px] bg-[#F3F3F3] border border-[#6A6A6A] rounded-[6px] font-poppins font-medium text-[15px] leading-[21px] placeholder:text-[#575757]"
              placeholder="Email"
              required
            />
            <div className="relative mt-[14px]">
              <input
                type="text"
                id="place"
                className="w-full h-[62px] p-4 pr-[40px] bg-[#F3F3F3] border border-[#6A6A6A] rounded-[6px] font-poppins font-medium text-[15px] leading-[21px] placeholder:text-[#575757] focus:outline-none focus:border-blue-500"
                placeholder="Password"
                required
              />
              <img
                src="/icons/eye.svg"
                alt="Facebook icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[26px] h-[26px] pointer-events-none"
              />
            </div>
            <div className="relative mt-[14px]">
              <input
                type="text"
                id="place"
                className="w-full h-[62px] p-4 pr-[40px] bg-[#F3F3F3] border border-[#6A6A6A] rounded-[6px] font-poppins font-medium text-[15px] leading-[21px] placeholder:text-[#575757] focus:outline-none focus:border-blue-500"
                placeholder="Confirm Password"
                required
              />
              <img
                src="/icons/eye.svg"
                alt="Facebook icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-[26px] h-[26px] pointer-events-none"
              />
            </div>
            <button className="mt-[25px] flex justify-center items-center w-full h-[61px] bg-gradient-to-r from-[#226fff] via-[#ffcc99] to-[#fffffd] border-2 border-[#414141] rounded-[6px]">
              <p className="font-poppins font-medium text-[15px] leading-[21px] text-[#000000]">
                Log in
              </p>
            </button>
            <p className="font-poppins font-bold text-[14px] leading-[21px] text-[#242424] text-center mt-[17px] mb-[2px]">
              Forgot password?
            </p>
            <p className="font-poppins font-normal text-[14px] leading-[21px] text-[#242424] mr-1 text-center">
              Don’t have an account?
              <span className="font-poppins font-semibold text-[14px] leading-[21px] text-[#242424] text-center">
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
