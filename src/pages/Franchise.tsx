import { Navbar } from "@/components/Navbar";
import { supabase } from "@/integrations/supabase/client";
import { Building, DollarSign, BarChart3, Briefcase, Users, ChartBar, Award, Store } from "lucide-react";
import { Button } from "@/components/ui/button";

const Franchise = () => {
  const videoUrl = supabase.storage
    .from('videos-landing')
    .getPublicUrl('Professional_Mode_16x9_The_2_man_are_talking_and_there_.mp4')
    .data.publicUrl;

  const features = [
    {
      icon: Building,
      title: "Perfect for Conversions",
      description: "Quickly transform existing properties with minimal downtime and expense"
    },
    {
      icon: Store,
      title: "Underserved Midscale & Upper-Midscale",
      description: "Capture growth in these booming markets for greater returns"
    },
    {
      icon: Award,
      title: "Renovation Flexibility",
      description: "Upgrade on your terms, respecting your budget and timeline"
    },
    {
      icon: DollarSign,
      title: "60%+ Operating Margins",
      description: "Enjoy impressive profitability backed by our proven model"
    },
    {
      icon: Briefcase,
      title: "Turn-Key Operational Platform",
      description: "From staffing to marketing—everything you need, all in one place"
    },
    {
      icon: Users,
      title: "Strategic Exit Assistance",
      description: "Secure maximum value with expert guidance when you're ready to sell"
    },
    {
      icon: ChartBar,
      title: "New Business Development Support",
      description: "Expand confidently with dedicated help to attract and retain customers"
    },
    {
      icon: BarChart3,
      title: "Stable Occupancy for Reliable Cashflow",
      description: "Depend on consistent demand and year-round earnings"
    }
  ];

  return (
    <div className="h-screen overflow-hidden font-montserrat">
      <Navbar />
      
      {/* Title Section */}
      <div className="pt-8 pb-4 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#222222] mb-2">
          Empower your hospitality future
        </h1>
        <p className="text-sm text-[#8E9196] mb-4 max-w-2xl mx-auto leading-relaxed">
          Explore the benefits of joining Parkrise Franchise Network.
          Maximize your apartments with hotel/real estate investment with Parkrise
          effective strategies to help you and guests, the most from your place
        </p>
        <Button 
          className="bg-transparent hover:bg-transparent text-black border-2 border-transparent bg-gradient-to-r from-[#FF9898] to-[#FFE4E4] bg-clip-text font-medium px-8 py-2 rounded-full text-sm relative"
          style={{
            backgroundClip: 'padding-box, text',
            border: '2px solid transparent',
            backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #FF9898, #FFE4E4)',
          }}
        >
          Schedule a call
        </Button>
      </div>

      {/* Video Background Section */}
      <div className="relative h-[30vh]">
        <div className="absolute inset-0">
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="bg-[#F2F2F2] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#FFE4E4] rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-[#FF9898]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#222222] mb-1 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-[#8E9196] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franchise;