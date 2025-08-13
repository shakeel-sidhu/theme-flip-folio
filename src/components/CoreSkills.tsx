import { Code, Server, Wrench, Users } from "lucide-react";

const CoreSkills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
      color: "text-blue-400"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "RESTful API Development"],
      color: "text-green-400"
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: ["Git", "GitHub", "Jira", "Agile/Scrum"],
      color: "text-orange-400"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem-solving", "Team Collaboration", "Time Management", "Adaptability"],
      color: "text-purple-400"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Core Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills developed through hands-on experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-primary/5 rounded-lg px-3 py-2 text-center transition-colors hover:bg-primary/10"
                    >
                      <span className="text-sm font-medium text-foreground">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreSkills;