export const Footer = () => {
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