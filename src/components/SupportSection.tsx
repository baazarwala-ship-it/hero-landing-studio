import { Pencil, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SupportSection = () => {
  const tasks = [
    {
      title: "Create a Logo",
      budget: "$20",
      deadline: "21st Jan",
    },
    {
      title: "Write a Thesis",
      budget: "$100",
      deadline: "25th Jan",
    },
    {
      title: "Write a blog post",
      budget: "$200",
      deadline: "20th Jan",
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        {/* Section Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="flex items-center gap-2 section-title">
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary">
                <span className="h-2 w-2 rounded-full bg-primary" />
              </span>
              Support
            </h2>
            <p className="mt-2 text-muted-foreground">
              Get your tasks done by Experts, quickly & affordably
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

        {/* Tasks Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-secondary via-card to-secondary/50 p-6 transition-all hover:border-primary/50"
            >
              {/* Task Title with Icon */}
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground">{task.title}</h3>
                <Pencil className="h-5 w-5 text-primary" />
              </div>

              {/* Divider */}
              <div className="mb-4 h-px w-full bg-border/50" />

              {/* Budget */}
              <div className="mb-4">
                <span className="text-muted-foreground">Budget：</span>
                <span className="ml-2 font-semibold text-foreground">{task.budget}</span>
              </div>

              {/* Divider */}
              <div className="mb-4 h-px w-full bg-border/50" />

              {/* Deadline */}
              <div>
                <span className="text-muted-foreground">Deadline：</span>
                <span className="ml-2 font-semibold text-foreground">{task.deadline}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
