import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ContentSection } from "@/components/ContentSection";
import { PerksSection } from "@/components/PerksSection";
import CommunitySection from "@/components/CommunitySection";
import HelpButton from "@/components/HelpButton";

const Index = () => {
  return (
    <div>
      <Nav />
      <ContentSection />
      <PerksSection />
      <CommunitySection />
      <Footer />
      <HelpButton />
    </div>
  );
};

export default Index;