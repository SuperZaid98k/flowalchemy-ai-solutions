import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sparkles, Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    // If not on home page, navigate to home first
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleAboutClick = () => {
    navigate('/about');
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={handleLogoClick} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Sparkles className="w-6 h-6 text-primary icon-glow" />
          <span className="text-xl font-black tracking-tight">
            FlowAlchemy
          </span>
        </button>

        {/* Desktop Menu */}
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
          <button
            onClick={handleAboutClick}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
          <Button
            variant="hero"
            size="sm"
            onClick={() => scrollToSection("contact")}
          >
            Book Free Audit
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-background border-border">
            <div className="flex flex-col gap-6 mt-8">
              <button
                onClick={() => scrollToSection("solutions")}
                className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection("results")}
                className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Results
              </button>
              <button
                onClick={handleAboutClick}
                className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <Button
                variant="hero"
                className="w-full"
                onClick={() => scrollToSection("contact")}
              >
                Book Free Audit
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
