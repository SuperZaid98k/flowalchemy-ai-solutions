import { Sparkles, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Footer = () => {
  const navigate = useNavigate();
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

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
              <button
                onClick={() => setPrivacyOpen(true)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setTermsOpen(true)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Policy Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] bg-gradient-to-br from-background via-background to-primary/5 border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Privacy Policy
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Last updated: January 2025
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-4 text-sm text-foreground">
              <section>
                <h3 className="font-semibold text-primary mb-2">1. Information We Collect</h3>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, including name, email address, phone number, and company information when you contact us or use our services. We also collect usage data and analytics to improve our AI automation solutions.
                </p>
              </section>
              
              <section>
                <h3 className="font-semibold text-primary mb-2">2. How We Use Your Information</h3>
                <p className="text-muted-foreground">
                  Your information is used to provide and improve our AI automation services, communicate with you about our solutions, and send relevant updates about FlowAlchemy. We never sell your personal data to third parties.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">3. Data Security</h3>
                <p className="text-muted-foreground">
                  We implement industry-standard security measures to protect your data. All data transmissions are encrypted, and we regularly audit our systems to ensure the highest level of security for your information.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">4. Cookies and Tracking</h3>
                <p className="text-muted-foreground">
                  We use cookies and similar tracking technologies to enhance your experience, analyze site usage, and assist in our marketing efforts. You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">5. Third-Party Services</h3>
                <p className="text-muted-foreground">
                  We may use third-party service providers to help us operate our business and deliver services. These providers are bound by confidentiality agreements and are only permitted to use your data as necessary to provide services to us.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">6. Your Rights</h3>
                <p className="text-muted-foreground">
                  You have the right to access, correct, or delete your personal information. You may also opt-out of marketing communications at any time. Contact us to exercise these rights.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">7. Contact Us</h3>
                <p className="text-muted-foreground">
                  If you have questions about this Privacy Policy, please contact us through our website or email us at privacy@flowalchemy.com.
                </p>
              </section>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Terms of Service Dialog */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] bg-gradient-to-br from-background via-background to-primary/5 border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Terms of Service
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Last updated: January 2025
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-[60vh] pr-4">
            <div className="space-y-4 text-sm text-foreground">
              <section>
                <h3 className="font-semibold text-primary mb-2">1. Acceptance of Terms</h3>
                <p className="text-muted-foreground">
                  By accessing or using FlowAlchemy's AI automation services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>
              
              <section>
                <h3 className="font-semibold text-primary mb-2">2. Service Description</h3>
                <p className="text-muted-foreground">
                  FlowAlchemy provides AI-powered automation solutions designed to transform business operations. Our services include workflow automation, process optimization, and custom AI integration tailored to your business needs.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">3. User Responsibilities</h3>
                <p className="text-muted-foreground">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate information and to notify us immediately of any unauthorized use.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">4. Intellectual Property</h3>
                <p className="text-muted-foreground">
                  All content, features, and functionality of FlowAlchemy services are owned by us and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express permission.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">5. Service Availability</h3>
                <p className="text-muted-foreground">
                  We strive to provide reliable service but do not guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue services with reasonable notice. We are not liable for any service interruptions.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">6. Limitation of Liability</h3>
                <p className="text-muted-foreground">
                  FlowAlchemy shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount paid by you for our services.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">7. Termination</h3>
                <p className="text-muted-foreground">
                  We reserve the right to terminate or suspend your access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users or our business.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">8. Changes to Terms</h3>
                <p className="text-muted-foreground">
                  We may modify these Terms of Service at any time. We will notify users of significant changes. Your continued use of our services after changes constitutes acceptance of the modified terms.
                </p>
              </section>

              <section>
                <h3 className="font-semibold text-primary mb-2">9. Contact Information</h3>
                <p className="text-muted-foreground">
                  For questions about these Terms of Service, please contact us at legal@flowalchemy.com or through our website contact form.
                </p>
              </section>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
