import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { useMemo } from "react";

const Portfolio = () => {
  const projects = useMemo(
    () => [
      {
        title: "E-commerce Revamp",
        description: "Modernized storefront with optimized checkout and responsive UI.",
        image: heroImage,
        url: "#",
        tags: ["React", "Tailwind", "UX"],
      },
      {
        title: "Analytics Dashboard",
        description: "Interactive charts and real-time metrics for business insights.",
        image: heroImage,
        url: "#",
        tags: ["Recharts", "React Query", "Radix"],
      },
      {
        title: "Marketing Site",
        description: "High-performance landing pages with A/B testing setup.",
        image: heroImage,
        url: "#",
        tags: ["SEO", "Vite", "Accessibility"],
      },
      {
        title: "Portfolio CMS",
        description: "Content-managed portfolio with dynamic routing and search.",
        image: heroImage,
        url: "#",
        tags: ["Headless", "SPA", "Performance"],
      },
      {
        title: "Mobile Web App",
        description: "PWA with offline support and app-like interactions.",
        image: heroImage,
        url: "#",
        tags: ["PWA", "Caching", "Responsive"],
      },
      {
        title: "Internal Tools Suite",
        description: "Admin panels and workflows to streamline operations.",
        image: heroImage,
        url: "#",
        tags: ["Dashboards", "Auth", "Automation"],
      },
    ],
    []
  );

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "CreativeWork",
          name: p.title,
          description: p.description,
          url: p.url,
          image: p.image,
        },
      })),
    }),
    [projects]
  );

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading" className="py-20 scroll-mt-24">
      <div className="container mx-auto px-6">
        <header className="max-w-2xl mx-auto text-center mb-12">
          <h2 id="portfolio-heading" className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Portfolio
          </h2>
          <p className="mt-3 text-muted-foreground">
            A selection of projects showcasing clean architecture, performance, and delightful UX.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden transition-smooth hover:shadow-elegant">
              <CardHeader className="p-0">
                <div className="aspect-[16/10] overflow-hidden">
                  {/* Image optimization: lazy loading with descriptive alt */}
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-smooth group-hover:scale-[1.03]"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-secondary/50 text-secondary-foreground px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Button asChild variant="secondary">
                    <a href={project.url} aria-label={`View details for ${project.title}`}>
                      View project
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
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

export default Portfolio;
