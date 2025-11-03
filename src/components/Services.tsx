import { Card } from "@/components/ui/card";
import { MessageSquare, Zap, Target } from "lucide-react";

const Services = () => {
  const solutions = [
    {
      icon: MessageSquare,
      title: "Turn Website Visitors Into Paying Customers 24/7",
      description:
        "Transform anonymous traffic into qualified leads with intelligent chatbots that never sleep. Capture contact info, answer FAQs, and book appointments automatically - even at 3 AM.",
      result: "Average Result: 40% more leads, 60% less support tickets",
      color: "text-blue-400",
    },
    {
      icon: Zap,
      title: "Eliminate 80% of Repetitive Tasks Forever",
      description:
        "Stop wasting hours on data entry, follow-ups, and manual processes. Our Zapier-powered automations handle the boring stuff so you can focus on growing your business.",
      result: "Average Result: 15+ hours saved weekly, $3,200 monthly cost reduction",
      color: "text-teal-400",
    },
    {
      icon: Target,
      title: "Convert Cold Prospects Into Hot Sales Opportunities",
      description:
        "Automatically identify, qualify, and nurture leads through personalized AI-driven sequences. Turn your website into a lead-generating machine that works while you sleep.",
      result: "Average Result: 3x more qualified leads, 45% shorter sales cycles",
      color: "text-green-400",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Our Revenue-Driving Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop losing money on manual tasks. Start automating your way to higher profits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <solution.icon className={`w-12 h-12 ${solution.color} icon-glow group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{solution.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-primary flex items-start gap-2">
                  <span className="text-primary">→</span>
                  <span>{solution.result}</span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
