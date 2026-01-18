import { Lightbulb } from "lucide-react";

const CategoriesSection = () => {
  // Create a 3x6 grid layout with some cells being categories and some being placeholders
  const grid = [
    [null, "Development", null, "Design", null, "Communication"],
    ["Business", null, "Marketing", null, "Leadership", "Featured"],
    [null, "Music & Arts", null, null, "Trending", "Technology"],
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="section-title">Categories</h2>
          <p className="mt-2 text-muted-foreground">
            Explore skills across diverse categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="rounded-[32px] border border-primary/30 p-6 md:p-8 bg-card/30">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
            {grid.flat().map((item, index) => (
              <div
                key={index}
                className={`
                  aspect-square rounded-xl flex items-center justify-center p-2 text-center transition-all
                  ${item 
                    ? "bg-primary text-primary-foreground font-medium text-xs md:text-sm hover:scale-105 cursor-pointer shadow-lg" 
                    : "bg-secondary/50 border border-border"
                  }
                `}
              >
                {item ? (
                  <span>{item}</span>
                ) : (
                  <Lightbulb className="h-5 w-5 md:h-6 md:w-6 text-primary/60" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
