import { useState, useEffect } from "react";
import { TagButtons } from "./TagButtons";
import { SlideContent } from "./SlideContent";
import { tags, slideContent } from "../data/slideContent";

export const ContentSection = () => {
  const [activeTag, setActiveTag] = useState(tags[0]);
  const [isManualSelection, setIsManualSelection] = useState(false);
  const [isTextPulsing, setIsTextPulsing] = useState(false);
  const [slidePosition, setSlidePosition] = useState(0);

  useEffect(() => {
    let autoChangeTimer: NodeJS.Timeout;
    let textPulseTimer: NodeJS.Timeout;

    if (!isManualSelection) {
      autoChangeTimer = setInterval(() => {
        handleSlideChange();
      }, 5000);
    }

    return () => {
      if (autoChangeTimer) clearInterval(autoChangeTimer);
      if (textPulseTimer) clearTimeout(textPulseTimer);
    };
  }, [activeTag, isManualSelection]);

  const handleSlideChange = () => {
    const currentIndex = tags.indexOf(activeTag);
    const nextIndex = (currentIndex + 1) % tags.length;
    
    // Start slide transition
    setSlidePosition(-100);
    
    // After slide completes, update active tag and reset position
    setTimeout(() => {
      setActiveTag(tags[nextIndex]);
      setSlidePosition(0);
      
      // Trigger text pulse animation
      setIsTextPulsing(true);
      
      // Reset text pulse after 300ms
      setTimeout(() => {
        setIsTextPulsing(false);
      }, 300);
    }, 500);
  };

  const handleTagClick = (tag: string) => {
    if (tag !== activeTag) {
      const currentIndex = tags.indexOf(activeTag);
      const newIndex = tags.indexOf(tag);
      
      setIsManualSelection(true);
      setSlidePosition(-100);
      
      setTimeout(() => {
        setActiveTag(tag);
        setSlidePosition(0);
        setIsTextPulsing(true);
        
        setTimeout(() => {
          setIsTextPulsing(false);
        }, 300);
      }, 500);

      // Reset manual selection after 15 seconds
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
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${slidePosition}%)` }}
          >
            <SlideContent 
              image={slideContent[activeTag].image}
              text={slideContent[activeTag].text}
              isTextPulsing={isTextPulsing}
            />
          </div>
        </div>
      </div>
    </div>
  );
};