import { Play, CheckCircle, Globe, Zap, Lightbulb, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const HeroSection = () => {
  const stats = [
    { value: "500+", label: "Expert Mentors" },
    { value: "10K+", label: "Active Learners" },
    { value: "50+", label: "Skill Tracks" },
  ];

  const floatingIcons = [
    { Icon: CheckCircle, position: "top-4 right-0", delay: "0s" },
    { Icon: Globe, position: "top-1/4 -right-4", delay: "0.5s" },
    { Icon: Zap, position: "top-1/2 -right-2", delay: "1s" },
    { Icon: Lightbulb, position: "bottom-1/3 -left-4", delay: "1.5s" },
    { Icon: Play, position: "bottom-1/4 left-1/4", delay: "2s" },
    { Icon: BookOpen, position: "bottom-4 right-1/4", delay: "2.5s" },
  ];

  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm">
              <span className="text-primary">✨</span>
              <span className="text-muted-foreground">The Future of LIVE Learning is Here</span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Discuss <span className="text-primary">Freely</span>
              <br />
              Develop
              <br />
              <span className="text-primary">Skills Naturally</span>
              <br />
              Grow <span className="text-primary">Continuously</span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-md text-lg text-muted-foreground">
              Join interactive LIVE classes with the flexibility to switch mentors anytime.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="gold" size="lg" className="gap-2">
                <Play className="h-4 w-4" />
                Join Live Classes →
              </Button>
              <Button variant="goldOutline" size="lg">
                Find The Course →
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="font-display text-2xl font-bold text-primary md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Circular Image */}
          <div className="relative flex items-center justify-center animate-slide-in-right">
            {/* Outer Ring */}
            <div className="relative">
              {/* Multiple decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />
              <div className="absolute inset-0 rounded-full border-2 border-primary/40 scale-105" />
              
              {/* Main circle with image */}
              <div className="relative h-72 w-72 md:h-96 md:w-96 lg:h-[450px] lg:w-[450px] overflow-hidden rounded-full border-4 border-primary">
                <img
                  src={heroImage}
                  alt="Students learning together"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating Icons */}
              {floatingIcons.map(({ Icon, position, delay }, index) => (
                <div
                  key={index}
                  className={`absolute ${position} animate-float`}
                  style={{ animationDelay: delay }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 border border-primary md:h-12 md:w-12">
                    <Icon className="h-5 w-5 text-primary md:h-6 md:w-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
