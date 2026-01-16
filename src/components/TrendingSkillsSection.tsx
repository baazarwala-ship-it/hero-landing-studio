import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrendingSkillsSection = () => {
  const skills = [
    {
      title: "AI & Prompt Engineering",
      description: "Master ChatGPT and AI tools",
      level: "Beginner",
      learners: "3,200",
    },
    {
      title: "Full-Stack Development",
      description: "Build complete web applications",
      level: "Intermediate",
      learners: "2,800",
    },
    {
      title: "Motion Graphics",
      description: "Create stunning animations",
      level: "Intermediate",
      learners: "1,900",
    },
    {
      title: "IoT & Smart Devices",
      description: "Build connected devices",
      level: "Advanced",
      learners: "1,500",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="flex items-center gap-2 section-title">
              <TrendingUp className="h-6 w-6 text-primary" />
              Trending Skills
            </h2>
            <p className="mt-2 text-muted-foreground">
              Hot topics everyone's learning right now
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full border border-border">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full border border-border">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl border border-primary/30 bg-card p-5 transition-all hover:border-primary hover:shadow-lg min-h-[200px]"
            >
              {/* Header */}
              <div className="mb-auto flex items-center justify-between">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                  {skill.level}
                </span>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <TrendingUp className="h-3.5 w-3.5 text-primary" />
                  <span>{skill.learners}</span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="mb-2 text-lg font-semibold text-foreground">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSkillsSection;
