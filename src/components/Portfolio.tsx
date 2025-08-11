import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import { useMemo } from "react";

const uploadedSample = "/images/shakeel.jpg";
const starzplayImage = "/images/starzplay.png";
const mattressfirmImage = "/images/mattressfirm.png";
const mobilyTVImage = "/images/mobily-tv.png";
const shoqTVImage = "/images/shoq-tv.png";
const twistTVImage = "/images/Twist-Tv.png";
const Portfolio = () => {
  const projects = useMemo(
    () => [
      {
        title: "StarzPlay",
        description:
          "StarzPlay – Contributed to a high-traffic OTT streaming platform serving millions of users across the MENA region, delivering premium movies, TV shows, and originals with multi-device support. Developed and maintained web applications using React.js, JavaScript, and Next.js; integrated multiple payment gateways (PayTM, UPI, Credit Card, PayU, Adyen) boosting subscriptions by 30%; implemented Empello fraud prevention for carrier billing with 100% detection of fraudulent transactions; collaborated with UI/UX teams to launch new features increasing conversion rates by 25%; optimized API integrations to improve performance and reduce load times; and coordinated multiple development streams using Git and Agile methodologies.",
        image: starzplayImage,
        url: "https://starzplay.com",
        tags: [
          "Streaming",
          "OTT",
          "Responsive",
          "React.js",
          "Next.js",
          "JavaScript",
          "Payment Integration",
          "Fraud Prevention",
          "API Optimization",
          "UI/UX",
          "Agile",
          "High-Traffic Applications",
        ],
      },
      {
        title: "Mattressfirm",
        description:
          "Mattress Firm – Worked on the leading U.S. specialty mattress retailer’s e-commerce platform, optimizing the online shopping experience for millions of customers nationwide. Developed and maintained responsive web applications using React.js, JavaScript, and Next.js; integrated secure payment gateways and financing options; implemented performance optimizations to reduce load times and improve Core Web Vitals; collaborated with design teams to enhance UI/UX for higher conversion rates; and worked closely with backend teams to streamline API integrations for seamless product browsing, checkout, and order tracking",
        image: mattressfirmImage,
        url: "https://www.mattressfirm.com/",
        tags: [
          "React",
          "Tailwind",
          "UX",
          "Next.js",
          "JavaScript",
          "E-commerce",
          "Performance Optimization",
          "API Integration",
          "Responsive Design",
          "UI/UX",
          "Agile",
        ],
      },
      {
        title: "Mobily TV",
        description:
          "Mobily TV SA – A Saudi Arabia–based streaming platform offering live TV, premium movies, and on-demand content to a nationwide audience. Contributed to building responsive, high-performance user interfaces using React.js, React Query, and Radix; integrated APIs for seamless content delivery and subscription management; implemented features for improved search, navigation, and cross-device compatibility; and optimized performance to ensure smooth streaming experiences across web, mobile, and smart TV platforms.",
        image: mobilyTVImage,
        url: "https://tv.mobily.com.sa",
        tags: [
          "React Query",
          "Radix",
          "React.js",
          "Next.js",
          "JavaScript",
          "Streaming",
          "OTT",
          "UI/UX",
          "Responsive Design",
          "API Integration",
          "Performance Optimization",
        ],
      },
      {
        title: "SHOQ TV",
        description:
          "SHOQ is a high-performance OTT streaming platform I helped develop for PTCL, offering live TV, cricket, movies, and on-demand content. The app supports multi-device streaming, offline playback, full HD quality, and parental controls. I contributed to building a scalable, user-friendly experience optimized for Pakistani audiences across web, mobile, and smart TV platforms..",
        image: shoqTVImage,
        url: "https://shoq.com.pk/",
        tags: [
          "React Query",
          "Radix",
          "React.js",
          "Next.js",
          "JavaScript",
          "Streaming",
          "OTT",
          "UI/UX",
          "Responsive Design",
          "API Integration",
          "Performance Optimization",
        ],
      },
      {
        title: "Twist TV",
        description:
          "Twist TV is e& Egypt’s OTT entertainment app featuring 16,000+ hours of movies, series, and TV programs. I contributed to architecting a robust SVOD system with multi‑device support, offline playback, HD streaming, and light-footprint user interfaces. The platform also integrates seamlessly with partners like Jumia, enabling promotional access and driving regional engagement.",
        image: twistTVImage,
        url: "https://twist-tv.com/",
        tags: [
          "React Query",
          "Radix",
          "React.js",
          "Next.js",
          "JavaScript",
          "Streaming",
          "OTT",
          "UI/UX",
          "Responsive Design",
          "API Integration",
          "Performance Optimization",
        ],
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
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="py-20 scroll-mt-24"
    >
      <div className="container mx-auto px-6">
        <header className="max-w-3xl mx-auto text-center mb-12">
          <h2
            id="portfolio-heading"
            className="text-3xl md:text-4xl font-bold tracking-tight text-foreground"
          >
            Portfolio
          </h2>
          <p className="mt-3 text-muted-foreground">
            A curated selection of projects I’ve enjoyed working on, featuring
            case studies that showcase measurable outcomes, intuitive UX, and
            high-performance implementations. Each project reflects my focus on
            delivering scalable, user-centric, and technically robust solutions.
          </p>
        </header>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <article
              key={project.title}
              className="grid items-center gap-8 md:grid-cols-2"
            >
              {/* Image section */}
              <div className={idx % 2 === 1 ? "md:order-2" : "md:order-1"}>
                <div className="h-[300px] lg:h-[500px] lg:relative lg:pb-2/3 rounded-xl border bg-card shadow-elegant overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text section */}
              <div className={idx % 2 === 1 ? "md:order-1" : "md:order-2"}>
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-muted-foreground">
                  {project.description}
                </p>

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
                    <a
                      href={project.url}
                      target="_blank"
                      aria-label={`Visit project: ${project.title}`}
                    >
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
