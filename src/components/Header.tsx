import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Shakeel Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-smooth">
              Portfolio
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-smooth">
              Testimonials
            </a>
            <Button variant="hero" size="sm" asChild>
              <a href="#contact" aria-label="Go to contact section">Contact</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <a href="#home" className="block text-foreground hover:text-primary transition-smooth">
              Home
            </a>
            <a href="#services" className="block text-foreground hover:text-primary transition-smooth">
              Services
            </a>
            <a href="#portfolio" className="block text-foreground hover:text-primary transition-smooth">
              Portfolio
            </a>
            <a href="#testimonials" className="block text-foreground hover:text-primary transition-smooth">
              Testimonials
            </a>
            <Button variant="hero" size="sm" className="w-full" asChild>
              <a href="#contact" aria-label="Go to contact section">Contact</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;