import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Sparkles, Target, Users, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to transforming businesses through cutting-edge AI automation solutions."
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We build lasting partnerships based on trust and results."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We stay ahead of the curve, leveraging the latest AI technologies to solve complex problems."
    },
    {
      icon: TrendingUp,
      title: "Results-Oriented",
      description: "We measure success by your growth, efficiency gains, and competitive advantage."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About FlowAlchemy</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Transforming Businesses Through{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI Innovation
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            At FlowAlchemy, we believe in the power of artificial intelligence to revolutionize 
            how businesses operate. We're not just consultants—we're your partners in digital transformation.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg leading-relaxed">
              FlowAlchemy was founded with a simple yet powerful vision: to make advanced AI automation 
              accessible to businesses of all sizes. We saw too many companies struggling with repetitive 
              tasks, inefficient processes, and missed opportunities—all while AI solutions remained 
              complex and out of reach.
            </p>
            <p className="text-lg leading-relaxed">
              Today, we're proud to help businesses across multiple industries streamline their operations, 
              reduce costs, and unlock new growth opportunities through intelligent automation. Our team of 
              AI experts, developers, and strategists work closely with each client to deliver solutions 
              that are not just cutting-edge, but also practical and transformative.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-16 text-center">What Drives Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how AI automation can help you achieve your goals.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="shadow-glow hover:scale-105 transition-transform duration-300"
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
