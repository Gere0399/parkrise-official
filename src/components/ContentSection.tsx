import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import AutoplayPlugin from "embla-carousel-autoplay";

const tags = [
  "Socializing",
  "Cooking",
  "Technology",
  "Feeling at Home",
  "Wellness",
  "Bed & Bath",
  "Exploration",
];

const slideContent = {
  "Socializing": {
    image: "/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png",
    text: "Relax, enjoy local food and hang around the lounge... music and good vibes on us"
  },
  "Cooking": {
    image: "/lovable-uploads/d5f82026-7671-4842-8dff-35fd2dec6b34.png",
    text: "Cook your favorite meals in our fully equipped shared kitchen spaces"
  },
  "Technology": {
    image: "/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png",
    text: "Stay connected with high-speed WiFi and smart home features throughout"
  },
  "Feeling at Home": {
    image: "/lovable-uploads/d5f82026-7671-4842-8dff-35fd2dec6b34.png",
    text: "Experience the comfort of home with our thoughtfully designed living spaces"
  },
  "Wellness": {
    image: "/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png",
    text: "Maintain your fitness routine in our 24/7 wellness center"
  },
  "Bed & Bath": {
    image: "/lovable-uploads/d5f82026-7671-4842-8dff-35fd2dec6b34.png",
    text: "Premium bedding and luxurious bath amenities for ultimate comfort"
  },
  "Exploration": {
    image: "/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png",
    text: "Discover local attractions with our curated city guides"
  }
};

export const ContentSection = () => {
  const [activeTag, setActiveTag] = useState(tags[0]);
  const [autoplayPlugin, setAutoplayPlugin] = useState<ReturnType<typeof AutoplayPlugin> | null>(null);
  const [isManualSelection, setIsManualSelection] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const plugin = AutoplayPlugin({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    });
    setAutoplayPlugin(plugin);

    return () => {
      if (plugin) {
        plugin.stop();
      }
    };
  }, []);

  useEffect(() => {
    if (isManualSelection && autoplayPlugin) {
      autoplayPlugin.stop();
      const timer = setTimeout(() => {
        setIsManualSelection(false);
        autoplayPlugin.play();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isManualSelection, autoplayPlugin]);

  useEffect(() => {
    if (!isManualSelection) {
      const autoChangeTimer = setInterval(() => {
        setIsAnimating(true);
        setActiveTag((prevTag) => {
          const nextIndex = (tags.indexOf(prevTag) + 1) % tags.length;
          return tags[nextIndex];
        });
        setTimeout(() => setIsAnimating(false), 500);
      }, 5000);

      return () => clearInterval(autoChangeTimer);
    }
  }, [isManualSelection]);

  const handleTagClick = (tag: string) => {
    setIsAnimating(true);
    setActiveTag(tag);
    setIsManualSelection(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="min-h-screen bg-navy py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-secondary mb-2">
          Live here in a furnished apartment-style suite.
        </h2>
        <p className="text-4xl font-semibold text-secondary mb-8">
          Or, stay for a quick trip.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant="outline"
              onClick={() => handleTagClick(tag)}
              className={`rounded-full border text-sm py-1.5 px-4 transition-colors ${
                activeTag === tag 
                  ? 'bg-white text-navy border-white hover:bg-white/90' 
                  : 'bg-transparent text-white border-white hover:bg-white/10'
              }`}
            >
              {tag}
            </Button>
          ))}
        </div>

        <Carousel 
          className="w-full px-8"
          plugins={autoplayPlugin ? [autoplayPlugin] : undefined}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            <CarouselItem key={activeTag} className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={slideContent[activeTag].image}
                    alt="Experience"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                <div className="flex items-center">
                  <p className="text-3xl text-white leading-tight max-w-[80%]">
                    {slideContent[activeTag].text}
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-white/10 hover:bg-white/20 border-none text-white" />
          <CarouselNext className="right-0 bg-white/10 hover:bg-white/20 border-none text-white" />
        </Carousel>
      </div>
    </div>
  );
};