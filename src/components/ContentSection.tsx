import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const tags = [
  "Socializing",
  "Cooking",
  "Technology",
  "Feeling at Home",
  "Wellness",
  "Bed & Bath",
  "Exploration",
];

// Content for each tag's slides
const slideContent = {
  "Socializing": [
    {
      image: "/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png",
      text: "Relax, enjoy local food and hang around the lounge... music and good vibes on us"
    },
    {
      image: "/lovable-uploads/d5f82026-7671-4842-8dff-35fd2dec6b34.png",
      text: "Connect with fellow travelers in our communal spaces designed for memorable moments"
    }
  ],
  "Cooking": [
    {
      image: "/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png",
      text: "Cook your favorite meals in our fully equipped shared kitchen spaces"
    },
    {
      image: "/lovable-uploads/d5f82026-7671-4842-8dff-35fd2dec6b34.png",
      text: "Join our weekly cooking workshops and learn new recipes from around the world"
    }
  ],
  "Technology": [
    {
      image: "/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png",
      text: "Stay connected with high-speed WiFi and smart home features throughout"
    },
    {
      image: "/lovable-uploads/d5f82026-7671-4842-8dff-35fd2dec6b34.png",
      text: "Work remotely from our tech-enabled co-working spaces"
    }
  ],
  "Feeling at Home": [
    {
      image: "/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png",
      text: "Experience the comfort of home with our thoughtfully designed living spaces"
    },
    {
      image: "/lovable-uploads/d5f82026-7671-4842-8dff-35fd2dec6b34.png",
      text: "Personalize your space with our flexible furnishing options"
    }
  ],
  "Wellness": [
    {
      image: "/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png",
      text: "Maintain your fitness routine in our 24/7 wellness center"
    },
    {
      image: "/lovable-uploads/d5f82026-7671-4842-8dff-35fd2dec6b34.png",
      text: "Join our yoga and meditation sessions for mind-body balance"
    }
  ],
  "Bed & Bath": [
    {
      image: "/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png",
      text: "Premium bedding and luxurious bath amenities for ultimate comfort"
    },
    {
      image: "/lovable-uploads/d5f82026-7671-4842-8dff-35fd2dec6b34.png",
      text: "Spacious bathrooms with modern fixtures and rainfall showers"
    }
  ],
  "Exploration": [
    {
      image: "/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png",
      text: "Discover local attractions with our curated city guides"
    },
    {
      image: "/lovable-uploads/d5f82026-7671-4842-8dff-35fd2dec6b34.png",
      text: "Join our guided tours and explore the neighborhood like a local"
    }
  ]
};

export const ContentSection = () => {
  const [activeTag, setActiveTag] = useState(tags[0]);
  const [autoplayPlugin, setAutoplayPlugin] = useState<Autoplay | null>(null);
  const [isManualSelection, setIsManualSelection] = useState(false);

  useEffect(() => {
    // Create autoplay plugin with options
    const plugin = Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    });
    setAutoplayPlugin(plugin);

    return () => {
      plugin.stop();
    };
  }, []);

  useEffect(() => {
    if (isManualSelection) {
      // Stop autoplay for 20 seconds after manual selection
      autoplayPlugin?.stop();
      const timer = setTimeout(() => {
        setIsManualSelection(false);
        autoplayPlugin?.play();
      }, 20000);

      return () => clearTimeout(timer);
    }
  }, [isManualSelection, autoplayPlugin]);

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    setIsManualSelection(true);
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
          plugins={[autoplayPlugin]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {slideContent[activeTag].map((slide, index) => (
              <CarouselItem key={index} className="transition-opacity duration-500">
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl transition-transform duration-500 hover:scale-105">
                    <img
                      src={slide.image}
                      alt="Experience"
                      className="w-full h-[400px] object-cover transition-transform duration-500"
                    />
                  </div>
                  <div className="flex items-center">
                    <p className="text-3xl text-white leading-tight max-w-[80%] animate-fade-in">
                      {slide.text}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};