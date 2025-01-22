import { Navbar } from "@/components/Navbar";
import { supabase } from "@/integrations/supabase/client";
import { Building, DollarSign, BarChart3, Briefcase, Users, ChartBar, Award, Store } from "lucide-react";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";
import { useIsMobile } from "@/hooks/use-mobile";

const Franchise = () => {
  const videoUrl = supabase.storage
    .from('videos-landing')
    .getPublicUrl('Professional_Mode_16x9_The_2_man_are_talking_and_there_.mp4')
    .data.publicUrl;

  const isMobile = useIsMobile();

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

  const handleOpenDialog = () => {
    const dialogTrigger = document.querySelector('[role="dialog"]') as HTMLButtonElement | null;
    if (dialogTrigger) {
      dialogTrigger.click();
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F2F2] font-montserrat">
      <div className="h-20 bg-[#F2F2F2]">
        <Navbar showSearch={false} variant="dark" />
      </div>
      
      {/* Video Background Section */}
      <div className="relative h-[calc(65vh-5rem)]">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Empower your hospitality future
          </h1>
          <p className="text-sm text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
            Explore the benefits of joining Parkrise Franchise Network.
            Maximize your apartments with hotel/real estate investment with Parkrise
            effective strategies to help you and guests, the most from your place
          </p>
          {!isMobile && <ScheduleCallDialog />}
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="bg-[#F2F2F2] py-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 h-auto md:h-[calc(40vh-4rem)]"
                >
                  <div className="w-12 h-12 bg-[#FFE4E4] rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#FF9898]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#222222] mb-3 leading-tight">
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

      {/* Mobile CTA */}
      {isMobile && (
        <div className="fixed bottom-6 left-0 right-0 flex justify-center px-4 z-50">
          <ScheduleCallDialog />
        </div>
      )}
    </div>
  );
};

export default Franchise;
