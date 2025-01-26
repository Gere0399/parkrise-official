import { Nav } from "@/components/Nav";
import HelpButton from "@/components/HelpButton";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SpaceDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/lovable-uploads/parkCard.png",
    "/lovable-uploads/osaka.svg",
    "/lovable-uploads/parkCard.png",
    "/lovable-uploads/osaka.svg",
  ];

  const amenities = [
    { icon: "/icons/paddle.svg", label: "Pickleball" },
    { icon: "/icons/swimming-pool.svg", label: "Pool" },
    { icon: "/icons/weight-lifting.svg", label: "Gym room" },
    { icon: "/icons/plant.svg", label: "Plants" },
  ];

  return (
    <div>
      <Nav />
      <div className="max-w-[1440px] mx-auto mt-32 px-4 lg:px-[55px]">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Image Gallery */}
          <div className="lg:w-2/3">
            <div className="relative">
              <img
                src={images[selectedImage]}
                alt="Main view"
                className="w-full h-[400px] object-cover rounded-[25px]"
              />
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-3 h-3 rounded-full ${
                      selectedImage === index ? "bg-white" : "bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-24 object-cover rounded-[15px] cursor-pointer ${
                    selectedImage === index
                      ? "border-2 border-blue-500"
                      : "opacity-70"
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-[25px] shadow-lg">
              <h1 className="text-2xl font-bold mb-4">
                Osaka Sample name apartment
              </h1>
              <p className="text-gray-600 mb-6">
                Experience a new level of luxury in the heart of Osaka, just a
                5-minute stroll from the magnificent Osaka Castle. Enjoy spacious,
                elegantly designed rooms, panoramic city views...
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <img
                      src={amenity.icon}
                      alt={amenity.label}
                      className="w-6 h-6"
                    />
                    <span>{amenity.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="text-2xl font-bold text-[#FF723F]">
                  $32
                  <span className="text-gray-600 text-lg font-normal">
                    /night
                  </span>
                </div>
                <button className="bg-[#0A1B2F] text-white px-6 py-2 rounded-md">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HelpButton />
    </div>
  );
};

export default SpaceDetail;