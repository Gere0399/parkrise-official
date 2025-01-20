import { useState } from "react";
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

export const ContentSection = () => {
  const [activeTag, setActiveTag] = useState(tags[0]);

  return (
    <div className="min-h-screen bg-[#1E3A8A] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-secondary mb-4">
          Live here in a furnished apartment-style suite.
        </h2>
        <p className="text-2xl text-white/90 mb-12">Or, stay for a quick trip.</p>

        <div className="flex flex-wrap gap-4 mb-12">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={activeTag === tag ? "secondary" : "outline"}
              onClick={() => setActiveTag(tag)}
              className="rounded-full"
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden">
            <img
              src="/lovable-uploads/5fdb10c4-bece-475b-a595-c875e30e9961.png"
              alt="Experience"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="flex items-center">
            <p className="text-2xl text-white">
              Relax, enjoy local food and hang around the lounge... music and good
              vibes on us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};