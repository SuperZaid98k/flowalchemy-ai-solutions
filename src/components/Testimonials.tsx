import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "FlowAlchemy saved us $4,200 monthly and 20 hours weekly. Our customer response time went from 4 hours to 30 seconds. Game-changer!",
      author: "Sarah Mitchell",
      role: "CEO, Home Solutions Co.",
    },
    {
      quote:
        "We went from struggling with lead follow-up to automatically nurturing 500+ prospects. Revenue increased 67% in 4 months.",
      author: "Mark Thompson",
      role: "Founder, TechPro Services",
    },
    {
      quote:
        "The onboarding chatbot eliminated 80% of repetitive questions. Our team now focuses on closing deals instead of answering FAQs.",
      author: "Lisa Chen",
      role: "Director, Elite Consulting",
    },
  ];

  return (
    <section id="results" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            What Business Owners Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="pt-4 border-t border-border">
                <p className="font-bold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
