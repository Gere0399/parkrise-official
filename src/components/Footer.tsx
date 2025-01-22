import { useIsMobile } from "@/hooks/use-mobile";

export const Footer = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <footer className="bg-[#F1F1F1] px-6 py-10">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img 
            src="/lovable-uploads/892ce5e3-ffe0-420b-a9d5-5207bdf86152.png"
            alt="Parkrise Logo"
            className="h-12"
          />
        </div>

        {/* Navigation Links with divider lines */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="flex flex-col space-y-4 border-r border-gray-300 pr-6">
            <span className="text-sm text-[#222222] hover:text-secondary cursor-pointer transition-colors">Home</span>
            <span className="text-sm text-[#222222] hover:text-secondary cursor-pointer transition-colors">Residents</span>
          </div>
          <div className="flex flex-col space-y-4">
            <span className="text-sm text-[#222222] hover:text-secondary cursor-pointer transition-colors">Our brand</span>
            <span className="text-sm text-[#222222] hover:text-secondary cursor-pointer transition-colors">For Business</span>
          </div>
        </div>

        {/* Social Links with modern styling */}
        <div className="flex justify-center gap-6 mb-10 border-t border-b border-gray-300 py-6">
          <span className="text-sm font-medium text-[#222222] hover:text-secondary cursor-pointer transition-colors">Facebook</span>
          <div className="h-6 w-px bg-gray-300"></div>
          <span className="text-sm font-medium text-[#222222] hover:text-secondary cursor-pointer transition-colors">Instagram</span>
        </div>

        {/* Contact & Copyright with enhanced styling */}
        <div className="text-center space-y-6 mb-10">
          <p className="text-sm text-[#222222] bg-white/50 backdrop-blur-sm py-2 rounded-full">hello@parkrise.com</p>
          <div className="flex justify-center items-center gap-3 bg-white/50 backdrop-blur-sm py-2 rounded-full">
            <span className="text-sm text-[#222222]">©Copyright</span>
            <div className="h-4 w-px bg-gray-300"></div>
            <span className="text-sm text-[#222222]">Panama 2024</span>
          </div>
        </div>

        {/* Tagline & Description with card-like styling */}
        <div className="text-center space-y-6 bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-sm">
          <p className="text-sm text-[#222222] font-medium">Live. Stay. Belong.</p>
          <div className="w-16 h-px bg-secondary mx-auto"></div>
          <p className="text-sm text-[#222222] leading-relaxed">
            Parkrise redefines flexible working by creating a standard that is ahead of its time. With high-end amenities and services.
          </p>
          <span className="text-sm text-secondary hover:text-secondary/80 cursor-pointer block transition-colors font-medium">
            Need help?
          </span>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#F1F1F1]">
      {/* Top Navigation Row */}
      <div className="border-b border-[#E5E5E5]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <div className="flex justify-between items-center py-6">
            <div className="flex gap-12">
              <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Home</span>
              <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Residents</span>
              <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Our brand</span>
              <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">For Business</span>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-[13px] text-[#222222] font-light">hello@parkrise.com</span>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Facebook</span>
                <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Instagram</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] text-[#222222] font-light">©Copyright</span>
                <span className="text-[13px] text-[#222222] font-light">Panama 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Row */}
      <div className="border-b border-[#E5E5E5]">
        <div className="max-w-[1200px] mx-auto px-8 md:px-12">
          <div className="flex justify-center py-12">
            <img 
              src="/lovable-uploads/892ce5e3-ffe0-420b-a9d5-5207bdf86152.png"
              alt="Parkrise Logo"
              className="h-24"
            />
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-[1200px] mx-auto px-8 md:px-12">
        <div className="flex justify-center items-center gap-12 py-8">
          <span className="text-[13px] text-[#222222] font-light">Live. Stay. Belong.</span>
          
          <div className="flex items-center gap-12">
            <p className="text-[13px] text-[#222222] font-light max-w-[400px] text-center border-x border-[#E5E5E5] px-12">
              Parkrise redefines flexible working by creating a standard that is ahead of its time. With high-end amenities and services.
            </p>
            <span className="text-[13px] text-[#222222] font-light hover:text-secondary cursor-pointer">Need help?</span>
          </div>
        </div>
      </div>
    </footer>
  );
};