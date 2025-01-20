import { Button } from "./ui/button";

interface TagButtonsProps {
  tags: string[];
  activeTag: string;
  onTagClick: (tag: string) => void;
}

export const TagButtons = ({ tags, activeTag, onTagClick }: TagButtonsProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-12">
      {tags.map((tag) => (
        <Button
          key={tag}
          variant="outline"
          onClick={() => onTagClick(tag)}
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
  );
};