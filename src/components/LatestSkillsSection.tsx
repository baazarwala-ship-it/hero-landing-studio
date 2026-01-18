import { Users, Clock, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const LatestSkillsSection = () => {
  const skills = [
    {
      title: "Python Programming",
      mentor: "Sarah Chen",
      students: "2,500",
      duration: "8 weeks",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=200&fit=crop",
      isNew: true,
    },
    {
      title: "UI/UX Design",
      mentor: "Alex Rivera",
      students: "1,800",
      duration: "6 weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=200&fit=crop",
      isNew: true,
    },
    {
      title: "Data Science",
      mentor: "Marcus Kim",
      students: "3,200",
      duration: "12 weeks",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
      isNew: false,
    },
    {
      title: "Digital Marketing",
      mentor: "Priya Sharma",
      students: "1,500",
      duration: "4 weeks",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop",
      isNew: false,
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h2 className="section-title">Latest Skills</h2>
            <p className="mt-2 text-muted-foreground">
              Start learning something new today
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
              className="group rounded-2xl border border-rose-500/30 bg-card overflow-hidden hover:border-rose-500/50 transition-all hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative p-4">
                <div className="h-40 rounded-xl overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* New Badge */}
                {skill.isNew && (
                  <div className="absolute top-6 right-6 flex items-center gap-1 px-2 py-1 rounded-full bg-rose-500 text-white text-xs font-medium">
                    <Sparkles className="h-3 w-3" />
                    NEW
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 pt-0">
                {/* Level Badge */}
                <span className={`inline-block px-3 py-1 text-xs rounded-full font-medium mb-2 ${
                  skill.level === "Beginner" ? "bg-primary/20 text-primary" :
                  skill.level === "Intermediate" ? "bg-cyan-500/20 text-cyan-400" :
                  "bg-purple-500/20 text-purple-400"
                }`}>
                  {skill.level}
                </span>

                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {skill.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  by {skill.mentor}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    {skill.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {skill.duration}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestSkillsSection;
