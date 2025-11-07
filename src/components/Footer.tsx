import { Sparkles, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-border/50 bg-background">
      <div className="container mx-auto px-6">
        {/* Top Section - Logo and Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          {/* Logo */}
          <button 
            onClick={handleLogoClick}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Sparkles className="w-6 h-6 text-primary icon-glow" />
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              FlowAlchemy
            </span>
          </button>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-12">
            {/* Company Links */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-foreground">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <button 
                    onClick={() => navigate('/about')}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
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
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-sm font-bold mb-4 text-foreground">
                Connect With Us
              </h3>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-all duration-300 group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-lg bg-gradient-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2025 FlowAlchemy. Transforming businesses through AI automation.
            </p>
            
            <div className="flex items-center gap-6">
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
