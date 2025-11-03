import { Check } from "lucide-react";

const benefits = [
  "Reduce operational costs by up to 50%",
  "24/7 customer support without hiring more staff",
  "Qualify leads automatically and boost conversions",
  "Integrate seamlessly with your existing systems",
  "Scale effortlessly as your business grows",
  "Get actionable insights from AI-powered analytics",
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-gradient-accent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Why Choose <span className="text-primary">FlowAlchemy</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform your business operations with intelligent automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <p className="text-lg text-foreground font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
