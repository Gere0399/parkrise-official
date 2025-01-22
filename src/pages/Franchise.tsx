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
    <div className="min-h-screen font-montserrat bg-[#F2F2F2]">
      <div className="relative h-[40vh]">
        {/* Background Video with Overlay */}
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

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          
          <div className="container mx-auto px-4 pt-8">
            <div className="flex flex-col items-center justify-center">
              <img 
                src="/lovable-uploads/faa05e4a-c305-45cd-a254-f22cdcef605a.png" 
                alt="Parkrise Logo" 
                className="h-12 w-auto mb-6"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-[800px] mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#222222] mb-4 leading-tight">
            Empower your hospitality future
          </h1>
          <p className="text-base text-[#8E9196] mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore the benefits of joining Parkrise Franchise Network.
            Maximize your apartments with hotel/real estate investment with Parkrise
            effective strategies to help you and guests, the most from your place
          </p>
          <Button className="bg-[#222222] text-white hover:bg-[#222222]/90 font-medium px-8 py-2 rounded-full text-sm">
            Schedule a call
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#FFE4E4] rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#FF9898]" />
                </div>
                <h3 className="text-lg font-semibold text-[#222222] mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-[#8E9196] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Franchise;