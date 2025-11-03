import { Card } from "@/components/ui/card";
import { Building2, ShoppingBag, Heart } from "lucide-react";

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Automate property inquiries, schedule viewings, and qualify buyers 24/7 with AI assistants.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description:
      "Handle customer support, process orders, and provide personalized recommendations instantly.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: Heart,
    title: "Healthcare",
    description:
      "Streamline appointment scheduling, patient inquiries, and administrative workflows efficiently.",
    color: "from-teal-500 to-emerald-500",
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Industries We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized AI automation for your industry's unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="relative overflow-hidden group bg-card/50 backdrop-blur-sm border-border hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {industry.description}
                </p>
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
