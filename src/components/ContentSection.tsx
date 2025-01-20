import { useState, useEffect } from "react";
import { TagButtons } from "./TagButtons";
import { SlideContent } from "./SlideContent";
import { tags, slideContent } from "../data/slideContent";

export const ContentSection = () => {
  const [activeTag, setActiveTag] = useState(tags[0]);
  const [isManualSelection, setIsManualSelection] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTextPulsing, setIsTextPulsing] = useState(false);
  const [slidePosition, setSlidePosition] = useState(0);
  const [nextTag, setNextTag] = useState(tags[1]);

  useEffect(() => {
    let autoChangeTimer: NodeJS.Timeout;

    if (!isManualSelection) {
      autoChangeTimer = setInterval(() => {
        handleSlideChange();
      }, 5000);
    }

    return () => {
      if (autoChangeTimer) {
        clearInterval(autoChangeTimer);
      }
    };
  }, [activeTag, isManualSelection]);

  const handleSlideChange = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsTextPulsing(true);
    
    const currentIndex = tags.indexOf(activeTag);
    const nextIndex = (currentIndex + 1) % tags.length;
    
    setNextTag(tags[nextIndex]);
    setSlidePosition(-100);
    
    // Increased timeout to allow reading the slide content
    setTimeout(() => {
      setActiveTag(tags[nextIndex]);
      setNextTag(tags[(nextIndex + 1) % tags.length]);
      setSlidePosition(0);
      setIsAnimating(false);
      setIsTextPulsing(false);
    }, 1000); // Increased from 500ms to 1000ms for smoother transition
  };

  const handleTagClick = (tag: string) => {
    if (tag !== activeTag && !isAnimating) {
      const currentIndex = tags.indexOf(activeTag);
      const newIndex = tags.indexOf(tag);
      
      setIsManualSelection(true);
      setIsAnimating(true);
      setIsTextPulsing(true);
      
      const direction = newIndex > currentIndex ? -100 : 100;
      setNextTag(tag);
      setSlidePosition(direction);
      
      setTimeout(() => {
        setActiveTag(tag);
        setNextTag(tags[(newIndex + 1) % tags.length]);
        setSlidePosition(0);
        setIsAnimating(false);
        setIsTextPulsing(false);
      }, 1000); // Increased from 500ms to 1000ms

      setTimeout(() => {
        setIsManualSelection(false);
      }, 15000);
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

        <TagButtons 
          tags={tags} 
          activeTag={activeTag} 
          onTagClick={handleTagClick} 
        />

        <div className="relative overflow-hidden">
          <div 
            className="transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(${slidePosition}%)` }}
          >
            <div className="flex">
              <div className="flex-shrink-0 w-full">
                <SlideContent 
                  image={slideContent[activeTag].image}
                  text={slideContent[activeTag].text}
                  isTextPulsing={isTextPulsing}
                />
              </div>
              <div className="flex-shrink-0 w-full">
                <SlideContent 
                  image={slideContent[nextTag].image}
                  text={slideContent[nextTag].text}
                  isTextPulsing={isTextPulsing}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};