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
    <div className="min-h-screen bg-[#1A1F2C] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#F97316] mb-4">
          Live here in a furnished apartment-style suite.
        </h2>
        <p className="text-2xl text-white/90 mb-12">Or, stay for a quick trip.</p>

        <div className="flex flex-wrap gap-4 mb-12">
          {tags.map((tag) => (
            <Button
              key={tag}
              variant={activeTag === tag ? "secondary" : "outline"}
              onClick={() => setActiveTag(tag)}
              className={`rounded-full border-white/20 ${
                activeTag === tag ? 'bg-white text-navy' : 'text-white hover:bg-white/10'
              }`}
            >
              {tag}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/lovable-uploads/adefe335-6086-47b1-8a67-f2081617da94.png"
              alt="Experience"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="flex items-center">
            <p className="text-3xl text-white leading-relaxed">
              Relax, enjoy local food and hang around the lounge... music and good vibes on us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};