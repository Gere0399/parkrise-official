import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

interface SlideVideo {
  url: string;
  duration: number;
}

interface SlideContentProps {
  videos: SlideVideo[];
  text: string;
  isTextPulsing: boolean;
  onAllVideosEnded: () => void;
  preloadedVideos: Record<string, boolean>;
  isMobile?: boolean;
}

export const SlideContent = ({ 
  videos, 
  text, 
  isTextPulsing, 
  onAllVideosEnded,
  preloadedVideos,
  isMobile = false
}: SlideContentProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentVideoIndex(0);
    setIsVideoLoading(true);
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [videos]);

  // Handle video visibility and playback
  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current && !isVideoLoading) {
            if (!isVideoPlaying) {
              videoRef.current.play().catch((error) => {
                if (error.name !== 'AbortError') {
                  console.error('Error playing video:', error);
                  toast.error('Error playing video. Please try again.');
                }
              });
              setIsVideoPlaying(true);
            }
          } else if (videoRef.current && isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isVideoLoading, isVideoPlaying]);

  const handleVideoEnd = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
      setIsVideoLoading(true);
      setIsVideoPlaying(false);
    } else {
      onAllVideosEnded();
    }
  };

  const handleVideoError = () => {
    const currentVideo = videos[currentVideoIndex];
    if (currentVideo) {
      console.error('Error loading video:', currentVideo.url);
      toast.error('Error loading video. Please try again.');
    }
    setIsVideoLoading(false);
  };

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  if (!videos || videos.length === 0) {
    return (
      <>
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl relative">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500">No video available</p>
          </div>
        </div>
        <div className={`flex items-center ${isMobile ? 'mt-4' : ''}`}>
          <p className={`text-2xl md:text-3xl text-white leading-tight ${isMobile ? 'text-center w-full' : 'max-w-[80%]'} transition-all duration-300 ${
            isTextPulsing ? 'scale-110' : 'scale-100'
          }`}>
            {text}
          </p>
        </div>
      </>
    );
  }

  const currentVideo = videos[currentVideoIndex];

  return (
    <>
      <div ref={containerRef} className="bg-white rounded-2xl overflow-hidden shadow-xl relative">
        {isVideoLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy"></div>
          </div>
        )}
        {currentVideo && (
          <video
            ref={videoRef}
            src={currentVideo.url}
            className={`w-full ${isMobile ? 'h-[300px]' : 'h-[400px]'} object-cover ${isVideoLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
            muted
            playsInline
            preload="auto"
            onEnded={handleVideoEnd}
            onError={handleVideoError}
            onLoadedData={handleVideoLoad}
          />
        )}
      </div>
      <div className={`flex items-center ${isMobile ? 'mt-4' : ''}`}>
        <p className={`text-2xl md:text-3xl text-white leading-tight ${isMobile ? 'text-center w-full' : 'max-w-[80%]'} transition-all duration-300 ${
          isTextPulsing ? 'scale-110' : 'scale-100'
        }`}>
          {text}
        </p>
      </div>
    </>
  );
};