import { useState, useEffect } from "react";
import { Button } from "./ui/button";

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
  const [isManualSelection, setIsManualSelection] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTextPulsing, setIsTextPulsing] = useState(false);
  const [slidePosition, setSlidePosition] = useState(0);
  const [nextTag, setNextTag] = useState(tags[1]);

  useEffect(() => {
    if (!isManualSelection) {
      const autoChangeTimer = setInterval(() => {
        handleSlideChange();
      }, 5000);

      return () => clearInterval(autoChangeTimer);
    }
  }, [activeTag, isManualSelection]);

  const handleSlideChange = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsTextPulsing(true);
    
    const currentIndex = tags.indexOf(activeTag);
    const nextIndex = (currentIndex + 1) % tags.length;
    setNextTag(tags[nextIndex]);
    
    // Start slide animation
    setSlidePosition(-100);
    
    // After animation completes, update active tag and reset position
    setTimeout(() => {
      setActiveTag(tags[nextIndex]);
      setNextTag(tags[(nextIndex + 1) % tags.length]);
      setSlidePosition(0);
      setIsAnimating(false);
      setIsTextPulsing(false);
    }, 500);
  };

  const handleTagClick = (tag: string) => {
    if (tag !== activeTag && !isAnimating) {
      const currentIndex = tags.indexOf(activeTag);
      const newIndex = tags.indexOf(tag);
      
      // Determine direction of slide
      const direction = newIndex > currentIndex ? -100 : 100;
      
      setNextTag(tag);
      setSlidePosition(direction);
      setIsManualSelection(true);
      
      setTimeout(() => {
        setActiveTag(tag);
        setNextTag(tags[(newIndex + 1) % tags.length]);
        setSlidePosition(0);
        setIsManualSelection(false);
      }, 500);
    }
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
              className={`rounded-full border text-sm py-1.5 px-4 transition-all transform ${
                activeTag === tag 
                  ? 'bg-white text-navy border-white hover:bg-white/90 scale-110' 
                  : 'bg-transparent text-white border-white hover:bg-white/10'
              }`}
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${slidePosition}%)` }}
          >
            <div className="flex">
              <div className="flex-shrink-0 w-full">
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={slideContent[activeTag].image}
                      alt="Experience"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className="flex items-center">
                    <p className={`text-3xl text-white leading-tight max-w-[80%] ${
                      isTextPulsing ? 'animate-text-pulse' : ''
                    }`}>
                      {slideContent[activeTag].text}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-full">
                <div className="grid grid-cols-2 gap-8">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={slideContent[nextTag].image}
                      alt="Next Experience"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  <div className="flex items-center">
                    <p className={`text-3xl text-white leading-tight max-w-[80%] ${
                      isTextPulsing ? 'animate-text-pulse' : ''
                    }`}>
                      {slideContent[nextTag].text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};