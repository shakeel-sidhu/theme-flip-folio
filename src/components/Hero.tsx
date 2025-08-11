import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-inter font-medium">
                The only value proposition that really matters:
              </p>
              <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                It's Time for a{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Switch-Up
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                You can focus on running your business while I focus on growing it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact" aria-label="Go to contact section">Get Started</a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#portfolio" aria-label="Go to portfolio section">View Portfolio</a>
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-primary-foreground font-bold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground">10+ Happy Clients</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Professional business specialist"
                className="w-full h-auto rounded-2xl shadow-card"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-primary rounded-2xl -z-10 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;