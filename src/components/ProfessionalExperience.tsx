import { Calendar, MapPin, CheckCircle } from "lucide-react";

const ProfessionalExperience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Starzplay Arabia, Dubai",
      period: "Apr 2022 – Present",
      achievements: [
        "Drove performance and scalability improvements for STARZPLAY's OTT platform serving 3M+ users across the MENA region, delivering a faster and more reliable streaming experience using React.js, Next.js, and JavaScript.",
        "Played a key role in migrating a large-scale legacy PHP platform to Next.js in a live production environment, improving maintainability, developer productivity, and long-term scalability while ensuring seamless feature parity for millions of active users.",
        "Reduced video startup time by more than 55% (18s → 8s) by integrating the video player directly into the main application repository, eliminating cross-domain playback dependencies and significantly improving user experience.",
        "Increased subscription conversion rates by 30% through the integration and optimization of multiple payment gateways including PayTM, UPI, PayU, Adyen, and Credit Card payments.",
        "Strengthened platform security and revenue protection by implementing Empello fraud prevention for carrier billing, achieving 100% detection and prevention of fraudulent transactions.",
        "Collaborated closely with UI/UX designers and backend engineers to deliver high-impact product enhancements, contributing to a 25% improvement in conversion rates and overall application performance.",
        "Optimized API integrations and frontend architecture to improve application responsiveness, reduce load times, and ensure seamless data flow across services.",
        "Managed multiple development streams using Git and Agile methodologies while delivering high-quality features within sprint timelines."
      ]
    },
    {
      title: "Software Engineer",
      company: "Coding Agents, Lahore",
      period: "Jun 2021 – Apr 2022",
      achievements: [
        "Developed e-commerce and POS systems using React.js, JavaScript, and Python",
        "Implemented code quality measures and best practices to improve team productivity",
        "Collaborated with developers and QA teams to achieve 100% on-time delivery with minimal post-release fixes"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <div className="space-y-3">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <div key={achievementIndex} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;