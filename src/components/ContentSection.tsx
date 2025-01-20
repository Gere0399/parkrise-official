import { useState } from "react";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

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

  return (
    <div className="min-h-screen bg-navy py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-secondary mb-2">
          Live here in a furnished apartment-style suite.
        </h2>
        <p className="text-4xl text-secondary mb-8">Or, stay for a quick trip.</p>

        <div className="flex flex-wrap gap-4 mb-12">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant="outline"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border-2 transition-colors ${
                activeTag === tag 
                  ? 'bg-white text-navy border-white hover:bg-white/90' 
                  : 'bg-transparent text-white border-white hover:bg-white/10'
              }`}
            >
              {tag}
            </Button>
          ))}
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {slideContent[activeTag].map((slide, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={slide.image}
                      alt="Experience"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className="flex items-center">
                    <p className="text-3xl text-white leading-relaxed">
                      {slide.text}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white border-white" />
          <CarouselNext className="text-white border-white" />
        </Carousel>
      </div>
    </div>
  );
};