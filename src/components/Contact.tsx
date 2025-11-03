import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Sparkles } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-primary animate-glow-pulse" />
              <span className="text-sm font-medium text-primary">Get Started</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how AI automation can revolutionize your operations
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border shadow-elegant animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company Name
                </label>
                <Input
                  id="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  required
                  className="bg-background/50"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your needs
                </label>
                <Textarea
                  id="message"
                  placeholder="I'm interested in AI automation for..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <MessageSquare className="w-5 h-5" />
                Send Message
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-4">Or reach out directly</p>
              <a
                href="mailto:hello@flowalchemy.ai"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="w-4 h-4" />
                hello@flowalchemy.ai
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
