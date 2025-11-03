import { Card } from "@/components/ui/card";
import { Bot, Zap, Users } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "Intelligent conversational AI that handles customer queries, qualifies leads, and provides 24/7 support for your business.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Streamline repetitive tasks and processes. Let AI handle data entry, scheduling, and routine operations automatically.",
  },
  {
    icon: Users,
    title: "Lead Generation",
    description:
      "Automatically capture, qualify, and nurture leads. Turn website visitors into customers with intelligent automation.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Our <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful AI automation tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 shadow-glow">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
