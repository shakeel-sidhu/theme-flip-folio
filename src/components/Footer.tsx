import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-playfair text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Shakeel Portfolio
            </div>
            <p className="text-muted-foreground">
              Helping businesses grow through expert design, development, and
              digital solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Mail className="w-4 h-4" />
              </Button>

              <Button variant="ghost" size="icon">
                <a
                  href="https://www.linkedin.com/in/shakeel-ahmed-dev/"
                  target="_blank"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="ghost" size="icon">
                <a href="https://github.com/shakeel-sidhu" target="_blank">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Consulting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Maintenance
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  About
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-primary transition-smooth"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-primary transition-smooth"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-smooth"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Info</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>shakeeldev786@gmail.com</li>
              <li>+92 (317) 4112323</li>
              <li>Available Worldwide</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Shakeel Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
