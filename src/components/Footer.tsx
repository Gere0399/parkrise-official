// import { useIsMobile } from "@/hooks/use-mobile";

// export const Footer = () => {
//   const isMobile = useIsMobile();

//   if (isMobile) {
//     return (
//       <footer className="bg-[#F1F1F1] px-4 py-8">
//         {/* Logo */}
//         <div className="flex justify-center mb-8">
//           <img
//             src="/lovable-uploads/892ce5e3-ffe0-420b-a9d5-5207bdf86152.png"
//             alt="Parkrise Logo"
//             className="h-16"
//           />
//         </div>

//         {/* Navigation Links */}
//         <div className="grid grid-cols-2 gap-4 mb-8">
//           <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Home</span>
//           <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Residents</span>
//           <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Our brand</span>
//           <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">For Business</span>
//         </div>

//         {/* Social Links */}
//         <div className="flex justify-center gap-4 mb-8">
//           <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Facebook</span>
//           <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Instagram</span>
//         </div>

//         {/* Contact & Copyright */}
//         <div className="text-center space-y-4">
//           <p className="text-[13px] text-[#222222] font-light">hello@parkrise.com</p>
//           <div className="flex justify-center items-center gap-2">
//             <span className="text-[13px] text-[#222222] font-light">©Copyright</span>
//             <span className="text-[13px] text-[#222222] font-light">Panama 2024</span>
//           </div>
//         </div>

//         {/* Tagline & Description */}
//         <div className="text-center mt-8 space-y-4">
//           <p className="text-[13px] text-[#222222] font-light">Live. Stay. Belong.</p>
//           <p className="text-[13px] text-[#222222] font-light px-8">
//             Parkrise redefines flexible working by creating a standard that is ahead of its time. With high-end amenities and services.
//           </p>
//           <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer block">
//             Need help?
//           </span>
//         </div>
//       </footer>
//     );
//   }

//   return (
//     <footer className="bg-[#F1F1F1]">
//       {/* Top Navigation Row */}
//       <div className="border-b border-[#E5E5E5]">
//         <div className="max-w-[1200px] mx-auto px-8 md:px-12">
//           <div className="flex justify-between items-center py-6">
//             <div className="flex gap-12">
//               <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Home</span>
//               <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Residents</span>
//               <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Our brand</span>
//               <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">For Business</span>
//             </div>
//             <div className="flex items-center gap-8">
//               <span className="text-[13px] text-[#222222] font-light">hello@parkrise.com</span>
//               <div className="flex flex-col items-end gap-1">
//                 <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Facebook</span>
//                 <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Instagram</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="text-[13px] text-[#222222] font-light">©Copyright</span>
//                 <span className="text-[13px] text-[#222222] font-light">Panama 2024</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Logo Row */}
//       <div className="border-b border-[#E5E5E5]">
//         <div className="max-w-[1200px] mx-auto px-8 md:px-12">
//           <div className="flex justify-center py-12">
//             <img
//               src="/lovable-uploads/892ce5e3-ffe0-420b-a9d5-5207bdf86152.png"
//               alt="Parkrise Logo"
//               className="h-24"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Bottom Row */}
//       <div className="max-w-[1200px] mx-auto px-8 md:px-12">
//         <div className="flex justify-center items-center gap-12 py-8">
//           <span className="text-[13px] text-[#222222] font-light">Live. Stay. Belong.</span>

//           <div className="flex items-center gap-12">
//             <p className="text-[13px] text-[#222222] font-light max-w-[400px] text-center border-x border-[#E5E5E5] px-12">
//               Parkrise redefines flexible working by creating a standard that is ahead of its time. With high-end amenities and services.
//             </p>
//             <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Need help?</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

import React from "react";

export function Footer() {
  return (
    <footer>
      <div className="w-full h-[28px] bg-[#0A1B2F]"></div>
      <div className="w-full bg-[#EFECE7] border-[0.5px] border-[#D9D9D9] shadow-[0px_1px_1.8px_#9F9D9A] ">
        <div className="flex flex-row justify-between items-center px-8 md:px-[52px] py-5 flex-wrap lg:flex-nowrap gap-4 container">
          <div className="flex flex-row justify-start items-center flex-wrap md:flex-nowrap gap-5 md:gap-10">
            <p className="font-montserrat font-normal text-[20px] leading-[22px] text-[#0A1B2F]">
              Home
            </p>
            <p className="font-montserrat font-normal text-[20px] leading-[22px] text-[#0A1B2F]">
              Residents
            </p>
            <p className="font-montserrat font-normal text-[20px] leading-[22px] text-[#0A1B2F]">
              Our brand
            </p>
            <p className="font-montserrat font-normal text-[20px] leading-[22px] text-[#0A1B2F]">
              For Business
            </p>
          </div>
          <div className="flex flex-row justify-start items-center gap-10 mr-0 lg:mr-40">
            <p className="font-montserrat font-normal text-[12px] leading-[13px] text-[#0A1B2F]">
              <span className="border-b-[2px] border-[#A8A8A8]">
                hello@parkrise
              </span>
              .com
            </p>
            <div className="flex flex-col gap-1">
              <p className="font-montserrat font-normal text-[12px] leading-[13px] text-[#0A1B2F]">
                <span className="border-b-[2px] border-[#A8A8A8]">Facebo</span>
                ok
              </p>

              <p className="font-montserrat font-normal text-[12px] leading-[13px] text-[#0A1B2F]">
                <span className="border-b-[2px] border-[#A8A8A8]">
                  Instagra
                </span>
                m
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
        <p className="font-open-sans font-normal text-[12px] leading-[12px] text-[#717171] max-w-[271px]">
          Parkrise redefines flexible lodging by creating a seamless blend of
          residential comfort, hotel convenience, and authentic local immersion.
        </p>
      </div>
    </footer>
  );
}
