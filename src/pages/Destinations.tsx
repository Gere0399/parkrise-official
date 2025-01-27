import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import HelpButton from "@/components/HelpButton";

export interface Property {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  coordinates: [number, number];
  amenities: string[];
}

const Destinations = () => {
  return (
    <div>
      <Nav />
      <div className="max-w-[1440px] mx-auto mt-32 h-auto xl:max-h-[calc(100vh-160px)] overflow-auto xl:overflow-hidden">
        <div className="mx-4 lg:mx-0 lg:ml-[20px] xl:ml-[55px]">
          <div className="flex-wrap xl:flex-nowrap flex justify-start items-start gap-4">
            <div>
              <div className="flex flex-row items-center justify-start gap-[10px] flex-wrap md:flex-nowrap">
                <p className="font-open-sans font-semibold text-[14px] leading-[20px] text-[#0A1B2F]">
                  Destinations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <HelpButton />
    </div>
  );
};

export default Destinations;