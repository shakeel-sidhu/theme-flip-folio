import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

const uploadedSample = "/lovable-uploads/32e4cb68-c474-4d52-b798-21e928ef556f.png";

const Portfolio = () => {
  const projects = useMemo(
    () => [
      {
        title: "StarzPlay",
        description:
          "Subscription video-on-demand platform with thousands of movies, series, and originals across the MENA region.",
        image: uploadedSample,
        url: "#",
        tags: ["Streaming", "OTT", "Responsive"],
      },
      {
        title: "E-commerce Revamp",
        description:
          "Modernized storefront with optimized checkout and responsive UI.",
        image: heroImage,
        url: "#",
        tags: ["React", "Tailwind", "UX"],
      },
      {
        title: "Analytics Dashboard",
        description:
          "Interactive charts and real-time metrics for business insights.",
        image: heroImage,
        url: "#",
        tags: ["Recharts", "React Query", "Radix"],
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
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h2
            id="portfolio-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
          >
            Portfolio
          </h2>
          <p className="mt-3 text-muted-foreground">
            Several projects I enjoyed—case studies that highlight outcomes, UX, and performance.
          </p>
        </header>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className="grid items-center gap-8 lg:grid-cols-12"
            >
              <div
                className={cn(
                  "lg:col-span-6 order-1 lg:order-1",
                  idx % 2 === 1 && "lg:order-2"
                )}
              >
                <div className="rounded-xl border bg-card shadow-elegant overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div
                className={cn(
                  "lg:col-span-6 order-2 lg:order-2",
                  idx % 2 === 1 && "lg:order-1"
                )}
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-muted-foreground">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-secondary/60 text-secondary-foreground px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Button asChild variant="secondary">
                    <a href={project.url} aria-label={`Visit project: ${project.title}`}>
                      Visit project
                    </a>
                  </Button>
                </div>
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

export default Portfolio;
