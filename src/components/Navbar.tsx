import { Search, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useTheme } from "@/components/ThemeProvider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-display text-lg font-bold text-primary-foreground">
            L
          </div>
          <span className="font-display text-xl font-semibold text-foreground">Lyfex</span>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden flex-1 max-w-md md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search skills"
              className="w-full pl-10 bg-secondary border-border/50 focus:border-primary"
            />
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-primary" />
            ) : (
              <Moon className="h-5 w-5 text-primary" />
            )}
          </button>
          <Button variant="gold" size="default">
            Subscribe
          </Button>
          <Button variant="goldOutline" size="default">
            Login
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-primary" />
            ) : (
              <Moon className="h-5 w-5 text-primary" />
            )}
          </button>
          <button
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border/40 bg-background p-4 md:hidden">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search skills"
              className="w-full pl-10 bg-secondary border-border/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Button variant="gold" className="w-full">
              Subscribe
            </Button>
            <Button variant="goldOutline" className="w-full">
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
