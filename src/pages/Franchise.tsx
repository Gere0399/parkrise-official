import { Navbar } from "@/components/Navbar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { Building, DollarSign, BarChart3, Briefcase, Users, ArrowUpRight, LineChart, PieChart } from "lucide-react";
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
      icon: BarChart3,
      title: "Underserved Midscale & Upper-Midscale",
      description: "Capture growth in these booming markets for greater returns"
    },
    {
      icon: ArrowUpRight,
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
      icon: LineChart,
      title: "New Business Development Support",
      description: "Expand confidently with dedicated help to attract and retain customers"
    },
    {
      icon: PieChart,
      title: "Stable Occupancy for Reliable Cashflow",
      description: "Depend on consistent demand and year-round earnings"
    }
  ];

  return (
    <div className="min-h-screen font-montserrat">
      <div className="relative h-screen">
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
          
          <div className="container mx-auto px-4 pt-20">
            <div className="flex flex-col items-center justify-center mb-12">
              <img 
                src="/lovable-uploads/faa05e4a-c305-45cd-a254-f22cdcef605a.png" 
                alt="Parkrise Logo" 
                className="h-12 w-auto mb-8"
              />
              <Tabs defaultValue="overview" className="w-full max-w-4xl">
                <TabsList className="w-full h-12 bg-[#222222]/90 backdrop-blur-sm rounded-lg p-1 space-x-1">
                  {[
                    "Overview",
                    "Investment",
                    "Requirements",
                    "Process",
                    "Support",
                    "Training",
                    "Technology",
                    "Next Steps"
                  ].map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab.toLowerCase()}
                      className="flex-1 h-10 text-sm font-montserrat font-medium text-white/70 data-[state=active]:text-white data-[state=active]:bg-white/10 rounded transition-all"
                    >
                      {tab}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-4">
                Empower your hospitality future
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Explore the benefits of joining Parkrise Franchise Network.
                Maximize your apartments with hotel/real estate investment with Parkrise
                effective strategies to help you and guests, the most from your place
              </p>
              <Button className="bg-white text-navy hover:bg-white/90 font-medium px-8 py-6">
                Schedule a call
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franchise;