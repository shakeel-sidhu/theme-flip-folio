import { Star } from "lucide-react";
import { useMemo } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = useMemo(
    () => [
      {
        name: "Ahmed Al-Mansouri",
        role: "CTO, Starzplay Arabia",
        quote:
          "Shakeel's work on our OTT platform was exceptional. His payment gateway integrations increased our subscription rates by 30% while maintaining zero fraud incidents.",
        rating: 5,
      },
      {
        name: "Sarah Chen",
        role: "Tech Lead, Coding Agents",
        quote:
          "Excellent React.js developer who consistently delivered high-quality e-commerce solutions. His code quality and team collaboration skills are outstanding.",
        rating: 5,
      },
      {
        name: "Omar Hassan",
        role: "Product Manager, MENA Streaming",
        quote:
          "Shakeel's expertise in Next.js and React helped us scale our platform to millions of users. Performance optimizations reduced load times significantly.",
        rating: 5,
      },
      {
        name: "Fatima Al-Zahra",
        role: "QA Manager, Dubai Tech Hub",
        quote:
          "Working with Shakeel was seamless. His attention to detail and adherence to Agile methodologies resulted in 100% on-time delivery with minimal bugs.",
        rating: 5,
      },
      {
        name: "Michael Rodriguez",
        role: "DevOps Engineer, E-commerce Platform",
        quote:
          "Shakeel's API integration skills and Git workflow management improved our development efficiency. His technical knowledge in fraud prevention is impressive.",
        rating: 5,
      },
    ],
    []
  );

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: testimonials.map((t, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Review",
          author: { "@type": "Person", name: t.name },
          reviewBody: t.quote,
          reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: 5 },
        },
      })),
    }),
    [testimonials]
  );

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Testimonials
          </h2>
          <p className="mt-3 text-muted-foreground">
            What clients say about outcomes, collaboration, and results.
          </p>
        </header>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <article className="rounded-xl border bg-card shadow-elegant p-6 h-full flex flex-col">
                  <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className={`${i <= t.rating ? "fill-primary text-primary" : "text-muted-foreground"} w-4 h-4`} />
                    ))}
                  </div>
                  <p className="mt-4 text-muted-foreground">"{t.quote}"</p>
                  <div className="mt-6">
                    <p className="font-medium text-foreground">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </div>
    </section>
  );
};

export default Testimonials;