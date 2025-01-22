import { Navbar } from "@/components/Navbar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";

const Franchise = () => {
  const videoUrl = supabase.storage
    .from('videos-landing')
    .getPublicUrl('Professional_Mode_16x9_The_2_man_are_talking_and_there_.mp4')
    .data.publicUrl;

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
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          
          <div className="container mx-auto px-4 pt-32">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franchise;