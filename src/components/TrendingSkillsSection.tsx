import { TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

const TrendingSkillsSection = () => {
  const skills = [
    {
      title: "AI & Prompt Engineering",
      description: "Master ChatGPT and AI tools",
      level: "Beginner",
      learners: "3,200",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=200&fit=crop",
    },
    {
      title: "Full-Stack Development",
      description: "Build complete web applications",
      level: "Intermediate",
      learners: "2,800",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
    },
    {
      title: "Motion Graphics",
      description: "Create stunning animations",
      level: "Intermediate",
      learners: "1,900",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=200&fit=crop",
    },
    {
      title: "IoT & Smart Devices",
      description: "Build connected devices",
      level: "Advanced",
      learners: "1,500",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=200&fit=crop",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-cyan-400" />
              <span className="text-cyan-400">Trending Skills</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Hot topics everyone's learning right now
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button className="p-2 rounded-full border border-border bg-secondary hover:bg-secondary/80 transition-colors">
              <ChevronLeft className="h-5 w-5 text-foreground" />
            </button>
            <button className="p-2 rounded-full border border-border bg-secondary hover:bg-secondary/80 transition-colors">
              <ChevronRight className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-cyan-500/30 bg-card overflow-hidden hover:border-cyan-500/50 transition-all hover:scale-[1.02]"
            >
              {/* Header with Level & Learners */}
              <div className="flex items-center justify-between p-4">
                <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                  skill.level === "Beginner" ? "bg-teal-500/20 text-teal-400" :
                  skill.level === "Intermediate" ? "bg-cyan-500/20 text-cyan-400" :
                  "bg-purple-500/20 text-purple-400"
                }`}>
                  {skill.level}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3" />
                  {skill.learners}
                </div>
              </div>

              {/* Image */}
              <div className="px-4">
                <div className="h-32 rounded-lg overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSkillsSection;
