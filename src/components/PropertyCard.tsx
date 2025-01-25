import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Property } from "@/pages/Destinations";
import { useNavigate } from "react-router-dom";

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard = ({ property }: PropertyCardProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    console.log("Card clicked, navigating to /space-detail");
    navigate('/space-detail');
  };

  const handleHeartClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking heart
    console.log("Heart clicked");
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-sm border p-4 cursor-pointer hover:shadow-md transition-shadow"
      onClick={handleCardClick}
    >
      <div className="flex gap-6">
        <div className="w-72 h-48 rounded-lg overflow-hidden">
          <img 
            src={property.image} 
            alt={property.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-medium text-gray-900">{property.name}</h3>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-500 hover:text-red-500"
              onClick={handleHeartClick}
            >
              <Heart className="h-5 w-5" />
            </Button>
          </div>
          
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {property.description}
          </p>

          <div className="flex gap-4 mt-4">
            {property.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-1 text-sm text-gray-600">
                <span>{amenity}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="text-2xl font-semibold text-[#FF5A5F]">
              ${property.price}
              <span className="text-sm text-gray-600 font-normal">/night</span>
            </div>
            <Button onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}>Details</Button>
          </div>
        </div>
      </div>
    </div>
  );
};