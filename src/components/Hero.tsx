import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in-up">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="w-5 h-5 text-primary animate-glow-pulse" />
          <span className="text-sm font-medium text-primary">AI Automation Simplified</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight font-display">
          Transform Your Business
          <br />
          <span 
            className="bg-clip-text text-transparent animate-gradient-shift"
            style={{
              backgroundImage: "linear-gradient(90deg, hsl(87 100% 44%), hsl(73 100% 60%), hsl(82 88% 52%), hsl(87 100% 44%))",
              backgroundSize: "200% 200%",
            }}
          >
            with AI Alchemy
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
          We help non-tech businesses integrate AI chatbots and workflow automation
          into their existing systems. Make your business faster, smarter, and more
          customer-focused.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" onClick={scrollToContact}>
            Start Your Transformation
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button variant="glass" size="lg">
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20">
          <div className="animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50%</div>
            <div className="text-sm text-muted-foreground">Time Saved</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">3x</div>
            <div className="text-sm text-muted-foreground">Lead Generation</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Automation</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
