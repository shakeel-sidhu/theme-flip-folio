import { Star } from "lucide-react";
import { useMemo } from "react";

const Testimonials = () => {
  const testimonials = useMemo(
    () => [
      {
        name: "Amina Al-Farsi",
        role: "Product Manager, OTT",
        quote:
          "Shakeel transformed our streaming UX. Engagement is up and churn is down — smooth delivery from discovery to checkout.",
        rating: 5,
      },
      {
        name: "Omar Khan",
        role: "Founder, D2C Brand",
        quote:
          "Our storefront now loads faster and converts better. Clear communication, on-time delivery, and beautiful UI.",
        rating: 5,
      },
      {
        name: "Layla Haddad",
        role: "Ops Lead, SaaS",
        quote:
          "The analytics dashboard finally gives us answers. Performance, accessibility, and details were all top-notch.",
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.name} className="rounded-xl border bg-card shadow-elegant p-6 h-full flex flex-col">
              <div className="flex items-center gap-1" aria-label={`${t.rating} out of 5 stars`}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`${i <= t.rating ? "fill-primary text-primary" : "text-muted-foreground"} w-4 h-4`} />
                ))}
              </div>
              <p className="mt-4 text-muted-foreground">“{t.quote}”</p>
              <div className="mt-6">
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </article>
          ))}
        </div>

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
