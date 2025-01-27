import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import HelpButton from "@/components/HelpButton";

const Franchise = () => {
  return (
    <div>
      <Nav />
      <div className="max-w-[1440px] mx-auto mt-32 px-4 lg:px-[55px]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center mb-8">
            Franchise Opportunities
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mb-12">
            Join our growing network of successful franchisees and be part of a
            revolutionary space-sharing platform. We offer comprehensive support,
            proven business models, and extensive training to help you succeed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Initial Investment</h3>
              <p className="text-gray-600">
                Learn about the financial requirements and investment opportunities
                available for potential franchisees.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Training & Support</h3>
              <p className="text-gray-600">
                Comprehensive training programs and ongoing support to ensure your
                success in the market.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Market Analysis</h3>
              <p className="text-gray-600">
                Detailed market research and territory analysis to help you make
                informed decisions.
              </p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Request Information
          </button>
        </div>
      </div>
      <Footer />
      <HelpButton />
    </div>
  );
};

export default Franchise;