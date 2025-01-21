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
}

export const SlideContent = ({ videos, text, isTextPulsing }: SlideContentProps) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && videoRef.current) {
            videoRef.current.play().catch((error) => {
              console.error('Error playing video:', error);
              toast.error('Error playing video. Please try again.');
            });
          } else if (videoRef.current) {
            videoRef.current.pause();
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
  }, []);

  useEffect(() => {
    setCurrentVideoIndex(0);
    setIsVideoLoading(true);
  }, [videos]);

  const handleVideoEnd = () => {
    if (videos && videos.length > 0) {
      setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
      setIsVideoLoading(true);
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

  // Early return if no videos are available
  if (!videos || videos.length === 0) {
    return (
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl overflow-hidden shadow-xl relative">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <p className="text-gray-500">No video available</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-3xl text-white leading-tight max-w-[80%]">
            {text}
          </p>
        </div>
      </div>
    );
  }

  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="grid grid-cols-2 gap-8" ref={containerRef}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl relative">
        {isVideoLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-navy"></div>
          </div>
        )}
        {currentVideo && (
          <video
            ref={videoRef}
            src={currentVideo.url}
            className="w-full h-[400px] object-cover"
            muted
            playsInline
            onEnded={handleVideoEnd}
            onError={handleVideoError}
            onLoadedData={handleVideoLoad}
          />
        )}
      </div>
      <div className="flex items-center">
        <p className={`text-3xl text-white leading-tight max-w-[80%] transition-all duration-300 ${
          isTextPulsing ? 'scale-110' : 'scale-100'
        }`}>
          {text}
        </p>
      </div>
    </div>
  );
};