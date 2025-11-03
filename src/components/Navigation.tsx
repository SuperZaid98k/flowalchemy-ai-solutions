import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-primary icon-glow" />
          <span className="text-xl font-black tracking-tight">
            FlowAlchemy
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("solutions")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Solutions
          </button>
          <button
            onClick={() => scrollToSection("industries")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Industries
          </button>
          <button
            onClick={() => scrollToSection("results")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Results
          </button>
          <Button
            variant="hero"
            size="sm"
            onClick={() => scrollToSection("contact")}
          >
            Book Free Audit
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
