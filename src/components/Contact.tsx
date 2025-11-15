import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, AlertCircle, Shield, Phone, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://n8n-xrcw.onrender.com/webhook/flowalchemy-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          business: formData.business,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast({
        title: "Message Sent!",
        description: "We'll call you within 2 business hours.",
      });
      
      setFormData({ name: "", email: "", phone: "", business: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Ready to Stop Losing Money on Manual Tasks?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Book your FREE 30-minute Automation Audit. We'll show you exactly how 
              to save 15+ hours weekly (no commitment required)
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border shadow-elegant animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
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
                    disabled={isSubmitting}
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
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
                    disabled={isSubmitting}
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    disabled={isSubmitting}
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label htmlFor="business" className="block text-sm font-semibold mb-2">
                    Business Type
                  </label>
                  <Input
                    id="business"
                    placeholder="Real Estate, Retail, Healthcare, etc."
                    value={formData.business}
                    onChange={(e) =>
                      setFormData({ ...formData, business: e.target.value })
                    }
                    required
                    disabled={isSubmitting}
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  What's your biggest time-waster right now?
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your challenges..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  disabled={isSubmitting}
                  rows={5}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Book My Free Audit Now"}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Star className="w-5 h-5 text-primary icon-glow" />
                  <span>Rated 4.9/5 by 127+ business owners</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Shield className="w-5 h-5 text-primary icon-glow" />
                  <span>Your information is 100% secure</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Phone className="w-5 h-5 text-primary icon-glow" />
                  <span>We'll call within 2 business hours</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm font-bold text-destructive bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                <AlertCircle className="w-5 h-5" />
                <span>Limited: We only accept 15 new clients per month. 8 spots remaining for November.</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground mb-2">Or reach out directly</p>
              <a
                href="mailto:hello@flowalchemy.ai"
                className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
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
