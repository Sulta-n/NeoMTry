import { ArrowDown } from "lucide-react";
import Hero from "/images/Hero.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative px-4 min-h-screen flex flex-col items-center justify-center "
    >
      <div className="container  max-w-4xl mx-auto text-center z-10">
        <div className="space-y-4 md:mt-22">
          <h1 className="text-2xl md:text-6xl text-secondary tracking-tight font-bold">
            Neo{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Memories
            </span>
          </h1>
          <p className="text-primary/60 opacity-0 animate-fade-in-delay-2">
            Relive That Feeling
          </p>
          <div className="flex items-center justify-center opacity-0 animate-fade-in-delay-3">
            <img src={Hero} className="opacity-90 object-cover" />
          </div>
          <p className="text-primary/70 italic">
            Moments fade, but emotions last forever. With Neo Memories, rekindle
            the essence of your most cherished memories capturing, preserving,
            and reliving the feelings that define you.
          </p>
          <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce md:hidden">
            <span className="text-sm text-primary">Scroll</span>

            <ArrowDown className="text-secondary h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
