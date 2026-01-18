import { Palette, ChevronLeft, ChevronRight } from "lucide-react";

const SupportSection = () => {
  const tasks = [
    {
      title: "Create a Logo",
      description: "Need a visual identity? Let's figure it out together.",
      budget: "₹5k - ₹20k",
      timeline: "2-3 weeks",
    },
    {
      title: "Write a Thesis",
      description: "Need a visual identity? Let's figure it out together.",
      budget: "₹5k - ₹20k",
      timeline: "2-3 weeks",
    },
    {
      title: "Write a Blog",
      description: "Need a visual identity? Let's figure it out together.",
      budget: "₹5k - ₹20k",
      timeline: "2-3 weeks",
    },
  ];

  return (
    <section id="support" className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm text-primary mb-4">
              💛 Always Here
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              <span className="text-primary">Stuck? Sit.</span>{" "}
              <span className="text-foreground">Someone Will Help.</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Doubts. Confusion. Work. Conversations start here — judgment-free.
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

        {/* Task Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="relative rounded-[40px] border border-cyan-500/30 bg-card p-6 hover:border-cyan-500/50 transition-colors"
            >
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600 mb-6 mx-auto">
                <Palette className="h-6 w-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-semibold text-foreground text-center mb-2">
                {task.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground text-center mb-6">
                {task.description}
              </p>

              {/* Budget & Timeline */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Budget</span>
                  <span className="text-primary font-medium">{task.budget}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Timeline</span>
                  <span className="text-foreground">{task.timeline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
