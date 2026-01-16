import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const MentorsSection = () => {
  const [activeTab, setActiveTab] = useState("Live Now");
  const tabs = ["Live Now", "Most Active", "New"];

  const mentors = [
    {
      name: "Dr. Sarah Chen",
      skills: ["Python", "Data Science", "AI"],
      students: "2,500",
      isLive: true,
    },
    {
      name: "Alex Rivera",
      skills: ["UI/UX", "Design", "Figma"],
      students: "1,800",
      isLive: true,
    },
    {
      name: "Marcus Kim",
      skills: ["Robotics", "Arduino", "IoT"],
      students: "1,200",
      isLive: true,
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        {/* Section Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="section-title">Mentors</h2>
            <p className="mt-2 text-muted-foreground">
              Learn from industry experts
            </p>
          </div>
          <div className="flex items-center gap-4">
            {/* Tabs */}
            <div className="flex items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    activeTab === tab
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {tab}
                </button>
              ))}
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
        </div>

        {/* Mentors Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center rounded-3xl border border-border/30 bg-card p-6 transition-all hover:border-primary/30"
            >
              {/* Avatar Circle */}
              <div className="relative mb-4">
                {mentor.isLive && (
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                    <div className="live-badge">LIVE</div>
                  </div>
                )}
                <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-secondary bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="h-28 w-28 md:h-36 md:w-36 rounded-full bg-muted/50" />
                </div>
              </div>

              {/* Mentor Info */}
              <h3 className="mb-3 text-lg font-semibold text-foreground">{mentor.name}</h3>

              {/* Skills */}
              <div className="mb-4 flex flex-wrap justify-center gap-2">
                {mentor.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Students */}
              <p className="text-sm text-muted-foreground">
                {mentor.students} students
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
