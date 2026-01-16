import { Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveNowSection = () => {
  const sessions = [
    {
      title: "Python Fundamentals",
      mentor: "Sarah Chen",
      viewers: 124,
    },
    {
      title: "UI Design Workshop",
      mentor: "Alex Rivera",
      viewers: 89,
    },
    {
      title: "Public Speaking",
      mentor: "Priya Sharma",
      viewers: 14,
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="flex items-center gap-2 section-title">
              <span className="h-3 w-3 rounded-full bg-primary animate-pulse" />
              Live Now
            </h2>
            <p className="mt-2 text-muted-foreground">
              Join these sessions happening right now
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

        {/* Sessions Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sessions.map((session, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-secondary to-card p-5 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* Live Badge */}
                  <div className="live-badge">
                    LIVE
                  </div>
                  
                  {/* Session Info */}
                  <div>
                    <h3 className="font-semibold text-foreground">{session.title}</h3>
                    <p className="text-sm text-muted-foreground">with {session.mentor}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  {/* Viewers */}
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{session.viewers}</span>
                  </div>

                  {/* Join Button */}
                  <Button variant="gold" size="sm">
                    Join Now →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveNowSection;
