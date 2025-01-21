import { useState, useEffect, useRef } from "react";
import { TagButtons } from "./TagButtons";
import { SlideContent } from "./SlideContent";
import { tags, slideContent } from "../data/slideContent";

export const ContentSection = () => {
  const [activeTag, setActiveTag] = useState(tags[0]);
  const [isManualSelection, setIsManualSelection] = useState(false);
  const [isTextPulsing, setIsTextPulsing] = useState(false);
  const [slidePosition, setSlidePosition] = useState(0);
  const [preloadedVideos, setPreloadedVideos] = useState<Record<string, boolean>>({});
  const videoEndedRef = useRef<boolean>(false);

  // Preload videos for all tags
  useEffect(() => {
    const preloadVideos = async () => {
      const preloaded: Record<string, boolean> = {};
      
      for (const tag of tags) {
        const videos = slideContent[tag].videos;
        for (const video of videos) {
          try {
            const response = await fetch(video.url);
            if (response.ok) {
              preloaded[video.url] = true;
            }
          } catch (error) {
            console.error(`Error preloading video for ${tag}:`, error);
          }
        }
      }
      
      setPreloadedVideos(preloaded);
    };

    preloadVideos();
  }, []);

  useEffect(() => {
    let autoChangeTimer: NodeJS.Timeout;
    let textPulseTimer: NodeJS.Timeout;

    if (!isManualSelection && videoEndedRef.current) {
      // Calculate total duration of all videos for the current tag
      const totalDuration = slideContent[activeTag].videos.reduce(
        (acc, video) => acc + (video.duration || 5),
        0
      );

      // Add a small buffer time for transitions (500ms)
      const totalDurationWithBuffer = totalDuration + 0.5;

      autoChangeTimer = setTimeout(() => {
        handleSlideChange();
      }, totalDurationWithBuffer * 1000); // Convert to milliseconds
    }

    return () => {
      if (autoChangeTimer) clearTimeout(autoChangeTimer);
      if (textPulseTimer) clearTimeout(textPulseTimer);
    };
  }, [activeTag, isManualSelection, videoEndedRef.current]);

  const handleSlideChange = () => {
    const currentIndex = tags.indexOf(activeTag);
    const nextIndex = (currentIndex + 1) % tags.length;
    
    setSlidePosition(-100);
    videoEndedRef.current = false;
    
    setTimeout(() => {
      setActiveTag(tags[nextIndex]);
      setSlidePosition(0);
      setIsTextPulsing(true);
      
      setTimeout(() => {
        setIsTextPulsing(false);
      }, 300);
    }, 500);
  };

  const handleTagClick = (tag: string) => {
    if (tag !== activeTag) {
      setIsManualSelection(true);
      setSlidePosition(-100);
      videoEndedRef.current = false;
      
      setTimeout(() => {
        setActiveTag(tag);
        setSlidePosition(0);
        setIsTextPulsing(true);
        
        setTimeout(() => {
          setIsTextPulsing(false);
        }, 300);
      }, 500);

      // Reset manual selection after all videos have played
      const totalDuration = slideContent[tag].videos.reduce(
        (acc, video) => acc + (video.duration || 5),
        0
      );
      
      // Add buffer time for transitions
      const totalDurationWithBuffer = totalDuration + 0.5;
      
      setTimeout(() => {
        setIsManualSelection(false);
      }, totalDurationWithBuffer * 1000);
    }
  };

  const handleAllVideosEnded = () => {
    videoEndedRef.current = true;
    if (!isManualSelection) {
      handleSlideChange();
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
              videos={slideContent[activeTag].videos}
              text={slideContent[activeTag].text}
              isTextPulsing={isTextPulsing}
              onAllVideosEnded={handleAllVideosEnded}
              preloadedVideos={preloadedVideos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};