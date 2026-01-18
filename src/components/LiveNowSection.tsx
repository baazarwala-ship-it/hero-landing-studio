import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const LiveNowSection = () => {
  const liveNow = [
    {
      title: "Python Fundamentals",
      mentor: "Sarah Chen",
      viewers: 124,
      gradient: "from-orange-500 via-orange-400 to-yellow-400",
    },
    {
      title: "UI Design Workshop",
      mentor: "Alex Rivera",
      viewers: 89,
      gradient: "from-rose-500 via-pink-500 to-orange-400",
    },
    {
      title: "Public Speaking",
      mentor: "Priya Sharma",
      viewers: 56,
      gradient: "from-yellow-500 via-amber-500 to-orange-500",
    },
    {
      title: "Data Science",
      mentor: "Marcus Kim",
      viewers: 67,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    },
  ];

  return (
    <section id="live" className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Live Addas <span className="text-primary">Right Now</span>
          </h2>
          <p className="mt-2 text-muted-foreground">
            People talking. Ideas flowing. No scripts.
          </p>
        </div>

        {/* Live Sessions Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {liveNow.map((session, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-full bg-gradient-to-r ${session.gradient} p-[2px]`}
            >
              <div className="flex items-center justify-between gap-3 rounded-full bg-gradient-to-r from-background/90 to-transparent px-4 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  {/* Live Badge */}
                  <span className="live-badge text-xs">
                    LIVE
                  </span>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{session.title}</p>
                    <p className="text-xs text-muted-foreground">with {session.mentor}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    {session.viewers}
                  </div>
                  <Button size="sm" variant="secondary" className="h-7 px-3 text-xs rounded-full">
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
