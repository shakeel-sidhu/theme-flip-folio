import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, Zap, CreditCard, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "OTT & Streaming Applications",
      description:
        "Developed scalable OTT and streaming platforms using React.js and Next.js, supporting millions of users. Implemented efficient content delivery, user management, and seamless playback experiences to maintain high engagement.",
    },
    {
      icon: CreditCard,
      title: "Payment Gateway Integration",
      description:
        "Integrated multiple payment solutions (PayTM, UPI, Adyen, PayU) with fraud prevention measures. Delivered secure, compliant, and high-conversion payment flows to improve transaction reliability.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimized API integrations, reduced load times, and improved overall UX. Applied clean code practices, efficient data flows, and modern performance techniques to achieve maximum application speed.",
    },
    {
      icon: TrendingUp,
      title: "E-commerce & POS Systems",
      description:
        "Built and enhanced e-commerce platforms and POS systems from front-end to back-end. Streamlined inventory management, checkout processes, and customer experience to support business growth.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Core{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Expertise
            </span>{" "}
            & Project Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skills proven through real-world projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-border shadow-card hover:shadow-glow transition-smooth group"
            >
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
