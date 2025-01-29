import { Navbar } from "@/components/Navbar";
import { supabase } from "@/integrations/supabase/client";
import {
  Building,
  DollarSign,
  BarChart3,
  Briefcase,
  Users,
  ChartBar,
  Award,
  Store,
} from "lucide-react";
import { ScheduleCallDialog } from "@/components/ScheduleCallDialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { Nav } from "@/components/Nav";

const Franchise = () => {
  const videoUrl = supabase.storage
    .from("videos-landing")
    .getPublicUrl("Professional_Mode_16x9_The_2_man_are_talking_and_there_.mp4")
    .data.publicUrl;

  const isMobile = useIsMobile();

  const features = [
    {
      icon: Building,
      title: "Perfect for Conversions",
      description:
        "Quickly transform existing properties with minimal downtime and expense",
    },
    {
      icon: Store,
      title: "Underserved Midscale & Upper-Midscale",
      description:
        "Capture growth in these booming markets for greater returns",
    },
    {
      icon: Award,
      title: "Renovation Flexibility",
      description: "Upgrade on your terms, respecting your budget and timeline",
    },
    {
      icon: DollarSign,
      title: "60%+ Operating Margins",
      description: "Enjoy impressive profitability backed by our proven model",
    },
    {
      icon: Briefcase,
      title: "Turn-Key Operational Platform",
      description:
        "From staffing to marketing—everything you need, all in one place",
    },
    {
      icon: Users,
      title: "Strategic Exit Assistance",
      description:
        "Secure maximum value with expert guidance when you're ready to sell",
    },
    {
      icon: ChartBar,
      title: "New Business Development Support",
      description:
        "Expand confidently with dedicated help to attract and retain customers",
    },
    {
      icon: BarChart3,
      title: "Stable Occupancy for Reliable Cashflow",
      description: "Depend on consistent demand and year-round earnings",
    },
  ];

  const handleOpenDialog = () => {
    const dialogTrigger = document.querySelector(
      '[role="dialog"]'
    ) as HTMLButtonElement | null;
    if (dialogTrigger) {
      dialogTrigger.click();
    }
  };

  return (
    <div className="relative bg-white font-montserrat mt-20">
      <Nav />
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
            Explore the benefits of joining Parkrise Franchise Network. Maximize
            your apartments with hotel/real estate investment with Parkrise
            effective strategies to help you and guests, the most from your
            place
          </p>
          {!isMobile && <ScheduleCallDialog />}
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="bg-[#F2F2F2] pb-10 pt-[44px]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 h-auto shadow-[inset_0px_1px_4px_0px_rgba(0,0,0,0.25)] w-full md:max-w-[299px] max-w-[340px] hover:cursor-pointer"
                >
                  <div className="flex justify-center items-center">
                    <div className="w-12 h-12 bg-[#00B2B2] rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex justify-center items-center ">
                    <h3 className="text-sm  text-[#222222] mb-3  font-montserrat text-[15px] font-bold leading-[18px] text-center  max-w-[200px]">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-xs text-[#8E9196]  font-montserrat text-[13px] font-medium leading-[22px] text-center ">
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
        <div className="fixed bottom-6 left-0 right-0 flex justify-center px-4 z-30">
          <ScheduleCallDialog />
        </div>
      )}
      <div className="fixed right-3 bottom-6 w-[4.375rem] h-[4.375rem] bg-[#2E2E2E] rounded-full flex flex-col items-center justify-center ">
        {" "}
        <img
          src="/icons/questionSign.svg"
          alt="questionSign"
          className="w-[1.875rem] h-[1.875rem]"
        />
      </div>
    </div>
  );
};

export default Franchise;
