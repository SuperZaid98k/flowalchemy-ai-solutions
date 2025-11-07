import { Sparkles, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-border/50 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Connect With Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-all duration-300 shadow-elegant group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-all duration-300 shadow-elegant group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-all duration-300 shadow-elegant group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-all duration-300 shadow-elegant group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => navigate('/about')}
                  className="text-muted-foreground hover:text-primary transition-colors text-lg"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 100);
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors text-lg"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <button 
              onClick={handleLogoClick}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Sparkles className="w-6 h-6 text-primary icon-glow" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                FlowAlchemy
              </span>
            </button>

            <p className="text-sm text-muted-foreground text-center order-last lg:order-none">
              © 2025 FlowAlchemy. Transforming businesses through AI automation.
            </p>

            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
