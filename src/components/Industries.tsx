import { Card } from "@/components/ui/card";
import { Home, ShoppingCart, Heart } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Home,
      title: "Never Miss Another Lead. Ever.",
      description:
        "Automatically qualify property inquiries, schedule viewings, and follow up with prospects. Our AI handles the 80% of leads that don't convert immediately.",
      caseStudy: "Case Study: Sarah's Realty increased showings by 156% in 60 days",
      industry: "Real Estate",
      color: "text-blue-400",
    },
    {
      icon: ShoppingCart,
      title: "Turn Browsers Into Buyers Automatically",
      description:
        "Reduce cart abandonment, answer product questions instantly, and upsell customers with personalized recommendations that feel human.",
      caseStudy: "Case Study: TechGear Shop boosted revenue by $47K in 3 months",
      industry: "Retail",
      color: "text-teal-400",
    },
    {
      icon: Heart,
      title: "Streamline Patient Care, Boost Satisfaction",
      description:
        "Automate appointment scheduling, send prescription reminders, and handle routine inquiries - letting staff focus on actual patient care.",
      caseStudy: "Case Study: MedCare Clinic reduced no-shows by 73%",
      industry: "Healthcare",
      color: "text-green-400",
    },
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Industries We've Transformed
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized AI automation that understands your unique challenges
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-2 group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <industry.icon className={`w-12 h-12 ${industry.color} icon-glow group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <div className="text-sm font-semibold text-primary mb-3">{industry.industry}</div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{industry.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {industry.description}
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold italic text-primary/80">
                  ✨ {industry.caseStudy}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
