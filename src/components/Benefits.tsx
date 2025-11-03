import { CheckCircle2 } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Slash operational costs by up to 50% in 90 days",
    "Never miss a lead again with 24/7 AI-powered responses",
    "Scale effortlessly without hiring expensive staff",
    "Get enterprise-level automation at startup prices",
    "Watch your competitors struggle while you profit automatically",
    "Free up 15+ hours weekly to focus on strategy, not busy work",
  ];

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Why Smart Business Owners Choose FlowAlchemy
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't let your competitors automate past you. Here's what happens when you work with us:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1 icon-glow" />
                <p className="text-lg font-semibold">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="text-center p-8 rounded-lg bg-gradient-accent border border-primary/20 animate-fade-in">
            <p className="text-xl md:text-2xl font-bold leading-relaxed">
              "Join the 500+ business owners who stopped working IN their business 
              and started working ON it."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
