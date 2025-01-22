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
    <div className="h-screen overflow-hidden bg-[#F2F2F2] font-montserrat">
      <Navbar showSearch={false} />
      
      {/* Video Background Section */}
      <div className="relative h-[50vh]">
        <div className="absolute inset-0">
          <video
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Centered Content over video */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Empower your hospitality future
          </h1>
          <p className="text-sm text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
            Explore the benefits of joining Parkrise Franchise Network.
            Maximize your apartments with hotel/real estate investment with Parkrise
            effective strategies to help you and guests, the most from your place
          </p>
          <Button 
            className="bg-transparent hover:bg-transparent text-white border-2 font-medium px-8 py-2 rounded-full text-sm relative"
            style={{
              background: 'transparent',
              border: '2px solid',
              borderImage: 'linear-gradient(135deg, #004BA4 35%, #FF4400 100%) 1',
            }}
          >
            Schedule a call
          </Button>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="bg-[#F2F2F2] py-6">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-4 hover:shadow-lg transition-all duration-300 h-[calc(50vh-6rem)]"
                >
                  <div className="w-8 h-8 bg-[#FFE4E4] rounded-full flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-[#FF9898]" />
                  </div>
                  <h3 className="text-xs font-semibold text-[#222222] mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] text-[#8E9196] leading-relaxed">
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