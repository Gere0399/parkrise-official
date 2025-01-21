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
  }, [videos]);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
  };

  const handleVideoError = () => {
    console.error('Error loading video:', videos[currentVideoIndex].url);
    toast.error('Error loading video. Please try again.');
  };

  return (
    <div className="grid grid-cols-2 gap-8" ref={containerRef}>
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
        <video
          ref={videoRef}
          src={videos[currentVideoIndex].url}
          className="w-full h-[400px] object-cover"
          muted
          playsInline
          onEnded={handleVideoEnd}
          onError={handleVideoError}
        />
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