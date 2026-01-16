import { MessageCircle, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
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
    <section className="py-16">
      <div className="container">
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="flex items-center gap-2 section-title">
              <MessageCircle className="h-6 w-6 text-primary" />
              Discussion Rooms
            </h2>
            <p className="mt-2 text-muted-foreground">
              Join expert-led conversations on trending topics
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

        {/* Discussions Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {discussions.map((discussion, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border-2 border-primary/30 bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              {/* Category Badge */}
              <div className="mb-4 w-fit rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-foreground">
                {discussion.category}
              </div>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold leading-snug text-foreground">
                {discussion.title}
              </h3>

              {/* Mentor */}
              <p className="mb-4 text-sm text-muted-foreground">
                with {discussion.mentor}
              </p>

              {/* Date and Time */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{discussion.date}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{discussion.time}</span>
                </div>
              </div>

              {/* Join Button */}
              <Button variant="gold" className="mt-auto w-full">
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
