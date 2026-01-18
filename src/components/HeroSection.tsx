import { Play, Globe, Zap, Lightbulb, BookOpen, MessageSquare, GraduationCap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => {
  const floatingIcons = [
    { Icon: CheckCircle, position: "top-4 right-4", delay: "0s", color: "bg-cyan-500" },
    { Icon: Globe, position: "top-1/4 -right-6", delay: "0.5s", color: "bg-teal-500" },
    { Icon: Zap, position: "top-1/2 -right-4", delay: "1s", color: "bg-primary" },
    { Icon: Lightbulb, position: "bottom-1/3 -left-6", delay: "1.5s", color: "bg-primary" },
    { Icon: Play, position: "bottom-1/4 left-1/4", delay: "2s", color: "bg-pink-500" },
    { Icon: BookOpen, position: "bottom-8 right-1/4", delay: "2.5s", color: "bg-teal-500" },
    { Icon: MessageSquare, position: "bottom-4 right-0", delay: "3s", color: "bg-cyan-400" },
    { Icon: GraduationCap, position: "bottom-16 -right-2", delay: "3.5s", color: "bg-primary" },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 animate-fade-in">
            {/* Heading */}
            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl text-foreground">
              Welcome to the Online
              <br />
              <span className="text-primary">Paan ki Dukaan</span>
              <br />
              for Ideas
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl">
              <span className="text-primary">Talk freely</span>{" "}
              <span className="text-pink-400">Learn casually</span>{" "}
              <span className="text-cyan-400">Grow seriously</span>
            </p>

            {/* No pressure text */}
            <div className="space-y-1">
              <p className="text-muted-foreground">
                No pressure to <span className="text-primary font-medium">learn</span>
              </p>
              <p className="text-muted-foreground">
                No pressure to <span className="text-primary font-medium">perform</span>
              </p>
            </div>

            <p className="text-muted-foreground italic">
              Just good conversations that accidentally make you smarter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="gold" size="lg" className="gap-2">
                🏠 Join the Adda &gt;
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-secondary/50 border-border hover:bg-secondary">
                ☕ Sit & Listen
              </Button>
              <Button variant="outline" size="lg" className="gap-2 bg-secondary/50 border-border hover:bg-secondary">
                💬 Start a Charcha
              </Button>
            </div>
          </div>

          {/* Right Content - Circular Image */}
          <div className="relative flex items-center justify-center animate-slide-in-right">
            {/* Multiple decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute h-80 w-80 md:h-[400px] md:w-[400px] lg:h-[480px] lg:w-[480px] rounded-full border-2 border-primary/30" />
              <div className="absolute h-72 w-72 md:h-[360px] md:w-[360px] lg:h-[440px] lg:w-[440px] rounded-full border-2 border-pink-500/50" />
            </div>
            
            {/* Main circle with image */}
            <div className="relative h-64 w-64 md:h-80 md:w-80 lg:h-96 lg:w-96 overflow-hidden rounded-full border-4 border-pink-500">
              <img
                src={heroImage}
                alt="Students learning together"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Icons */}
            {floatingIcons.map(({ Icon, position, delay, color }, index) => (
              <div
                key={index}
                className={`absolute ${position} animate-float`}
                style={{ animationDelay: delay }}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${color} md:h-12 md:w-12`}>
                  <Icon className="h-5 w-5 text-white md:h-6 md:w-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
