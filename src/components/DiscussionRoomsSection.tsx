import { Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const DiscussionRoomsSection = () => {
  const discussions = [
    {
      category: "Robotics",
      title: "Will AI-Powered Robots Replace Human Jobs?",
      mentor: "Dr. James Martinez",
      date: "Today",
      time: "6 PM",
    },
    {
      category: "Arts",
      title: "Is AI-Generated Art the Future of Creativity?",
      mentor: "Emma Thompson",
      date: "Tomorrow",
      time: "5 PM",
    },
    {
      category: "Communication",
      title: "Why Communication Skills Matter More Than Technical Skills",
      mentor: "Sarah Chen",
      date: "Friday",
      time: "7 PM",
    },
  ];

  return (
    <section id="charcha" className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm text-primary mb-4">
              💬 Always Open
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Charcha Rooms <span className="text-pink-500">(No PPTs Allowed)</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Discussions where you can speak — or just listen.
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

        {/* Discussion Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {discussions.map((discussion, index) => (
            <div
              key={index}
              className="relative rounded-[60px] border-2 border-pink-500/40 p-6 bg-card/50 backdrop-blur-sm hover:border-pink-500/60 transition-colors"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground mb-4">
                {discussion.category}
              </div>

              {/* Title */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">
                {discussion.title}
              </h3>

              {/* Mentor */}
              <p className="text-sm text-muted-foreground mb-4">
                with {discussion.mentor}
              </p>

              {/* Date & Time */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                  <Calendar className="h-3 w-3" />
                  {discussion.date}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground border border-border rounded-full px-3 py-1">
                  <Clock className="h-3 w-3" />
                  {discussion.time}
                </div>
              </div>

              {/* Join Button */}
              <Button variant="gold" className="w-full rounded-full">
                Join Discussion →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiscussionRoomsSection;
