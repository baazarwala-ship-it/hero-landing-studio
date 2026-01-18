const MentorsSection = () => {
  const mentors = [
    {
      name: "Dr. Sarah Chen",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
      skills: ["Python", "Data Science", "AI"],
      students: "2,500",
      isLive: true,
      bgColor: "bg-primary/20",
      borderColor: "border-primary/40",
    },
    {
      name: "Alex Rivera",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      skills: ["UI/UX", "Design", "Figma"],
      students: "1,800",
      isLive: false,
      bgColor: "bg-secondary",
      borderColor: "border-border",
    },
    {
      name: "Marcus Kim",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      skills: ["Robotics", "Arduino", "IoT"],
      students: "1,200",
      isLive: true,
      bgColor: "bg-primary",
      borderColor: "border-primary",
    },
  ];

  return (
    <section id="mentors" className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm text-primary mb-4">
            ☕ The Regulars
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Regulars at <span className="text-primary">the Dukaan</span>
          </h2>
        </div>

        {/* Mentors Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`relative rounded-[60px] border-2 ${mentor.borderColor} ${mentor.bgColor} p-6 flex flex-col items-center transition-all hover:scale-[1.02]`}
            >
              {/* Mentor Image */}
              <div className={`relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-4 ${mentor.isLive ? "border-primary" : "border-border"} mb-4`}>
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {mentor.name}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mb-3">
                {mentor.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-xs rounded-full border border-border bg-secondary text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Students */}
              <p className="text-sm text-muted-foreground mb-3">
                {mentor.students} students
              </p>

              {/* Live Badge */}
              {mentor.isLive && (
                <span className="live-badge">
                  LIVE
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
