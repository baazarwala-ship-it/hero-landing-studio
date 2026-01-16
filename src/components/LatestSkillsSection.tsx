import { Sparkles, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const LatestSkillsSection = () => {
  const courses = [
    {
      title: "Python Programming",
      mentor: "Sarah Chen",
      students: "2,500",
      duration: "8 weeks",
      level: "Beginner",
      isNew: true,
    },
    {
      title: "UI/UX Design",
      mentor: "Alex Rivera",
      students: "1,800",
      duration: "6 weeks",
      level: "Intermediate",
      isNew: true,
    },
    {
      title: "Data Science",
      mentor: "Marcus Kim",
      students: "3,200",
      duration: "12 weeks",
      level: "Advanced",
      isNew: false,
    },
    {
      title: "Digital Marketing",
      mentor: "Priya Sharma",
      students: "1,500",
      duration: "4 weeks",
      level: "Beginner",
      isNew: false,
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="section-title">Latest Skills</h2>
            <p className="mt-2 text-muted-foreground">
              Start learning something new today
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

        {/* Courses Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl border border-border/30 bg-card overflow-hidden transition-all hover:border-primary/30 hover:shadow-lg"
            >
              {/* Course Preview Area */}
              <div className="relative flex flex-col items-center justify-center bg-secondary/50 p-6 min-h-[140px]">
                {course.isNew && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground">
                      <Sparkles className="h-3 w-3" />
                      NEW
                    </span>
                  </div>
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted border border-border">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <span className="mt-3 text-sm text-muted-foreground">Course Preview</span>
              </div>

              {/* Course Info */}
              <div className="flex flex-col p-5">
                {/* Level Badge */}
                <span className="mb-2 w-fit rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground">
                  {course.level}
                </span>

                {/* Title */}
                <h3 className="mb-2 font-semibold text-foreground">{course.title}</h3>

                {/* Mentor */}
                <p className="mb-4 text-sm text-muted-foreground">by {course.mentor}</p>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
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
