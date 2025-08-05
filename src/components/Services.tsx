import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Code2, Shield, Wrench } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Designs that impress",
      description: "Good design's not about what medium you're working in. It's about thinking hard about what you want to do and what you have to work with before you start. Because Information is only useful when it can be understood."
    },
    {
      icon: Code2,
      title: "Build Features that matter",
      description: "A business or a product isn't really a business or a product unless it does something valuable. The quickest way to failure is to build something nobody wants, needs or cares about. Features should be little bundles of value."
    },
    {
      icon: Wrench,
      title: "Maintain your Successful Website",
      description: "A successful website does three things: It attracts the right kinds of visitors. Guides them to the main services or product you offer. Collect Contact details for future ongoing relation."
    },
    {
      icon: Shield,
      title: "Security & Performance",
      description: "Ensuring your digital presence is secure, fast, and reliable. From SSL certificates to performance optimization, I handle the technical details so you can focus on your business."
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How I'll{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Help
            </span>{" "}
            in Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-smooth group">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="font-playfair text-2xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;