import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

const videos = [
  {
    id: "1",
    title: "Working from your suite",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    description: "Learn how to set up your perfect work environment"
  },
  {
    id: "2",
    title: "Tech amenities overview",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    description: "Discover all the tech features available"
  },
  {
    id: "3",
    title: "Smart home features",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    description: "Explore our smart home integration"
  }
];

export const VideoSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className="bg-[#EFECE7] py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-medium text-navy mb-16 text-center">
          Experience the Parkrise lifestyle
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Main Video Display */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={selectedVideo.image}
              alt={selectedVideo.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Right side - Video Selection */}
          <div className="flex flex-col justify-center">
            <RadioGroup
              defaultValue={videos[0].id}
              onValueChange={(value) => {
                const video = videos.find((v) => v.id === value);
                if (video) setSelectedVideo(video);
              }}
              className="space-y-6"
            >
              {videos.map((video) => (
                <div key={video.id} className="flex items-start space-x-4">
                  <RadioGroupItem
                    value={video.id}
                    id={video.id}
                    className="mt-1"
                  />
                  <Label
                    htmlFor={video.id}
                    className="flex-1 cursor-pointer space-y-1"
                  >
                    <div className="font-semibold text-lg text-navy">
                      {video.title}
                    </div>
                    <div className="text-gray-600">
                      {video.description}
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>
    </div>
  );
};