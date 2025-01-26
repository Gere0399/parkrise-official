import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import HelpButton from "@/components/HelpButton";

const Brands = () => {
  return (
    <div>
      <Nav />
      <div className="max-w-[1440px] mx-auto mt-32 px-4 lg:px-0">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center mb-8">Our Brands</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
            Discover our collection of premium brands that offer unique experiences and exceptional quality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="/brand1.jpg" alt="Brand 1" className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold mb-2">Brand Name 1</h2>
              <p className="text-gray-600">Description of brand 1 and its unique offerings.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="/brand2.jpg" alt="Brand 2" className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold mb-2">Brand Name 2</h2>
              <p className="text-gray-600">Description of brand 2 and its unique offerings.</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <img src="/brand3.jpg" alt="Brand 3" className="w-full h-48 object-cover rounded-md mb-4" />
              <h2 className="text-xl font-semibold mb-2">Brand Name 3</h2>
              <p className="text-gray-600">Description of brand 3 and its unique offerings.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <HelpButton />
    </div>
  );
};

export default Brands;