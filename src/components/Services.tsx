import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Zap, CreditCard, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "OTT & Streaming Applications",
      description: "Build scalable web applications for millions of users with React.js and Next.js. From content delivery to user management, I create seamless streaming experiences that keep users engaged."
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      description: "Integrate multiple payment solutions (PayTM, UPI, Adyen, PayU) with fraud prevention systems. Secure, compliant payment flows that increase conversion rates and protect your business."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimize API integrations, reduce load times, and improve user experience. I focus on clean code, efficient data flow, and modern development practices for maximum performance."
    },
    {
      icon: TrendingUp,
      title: "E-commerce & POS Systems",
      description: "Full-stack development of e-commerce platforms and point-of-sale systems. From inventory management to checkout flows, I deliver solutions that drive business growth."
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