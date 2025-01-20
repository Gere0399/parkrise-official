interface SlideContentProps {
  image: string;
  text: string;
  isTextPulsing: boolean;
}

export const SlideContent = ({ image, text, isTextPulsing }: SlideContentProps) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
        <img
          src={image}
          alt="Experience"
          className="w-full h-[400px] object-cover"
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