import { TrendingUp, Shield, Users, Target } from "lucide-react";

const KeyAchievements = () => {
  const achievements = [
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description: "Increased subscription revenue by 30% via advanced payment gateway integrations",
      metric: "30%",
      color: "text-emerald-500"
    },
    {
      icon: Shield,
      title: "Fraud Prevention",
      description: "Prevented 100% fraudulent carrier billing transactions using Empello solutions",
      metric: "100%",
      color: "text-blue-500"
    },
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Improved OTT platform conversion rates by 25% through UI/UX collaboration",
      metric: "25%",
      color: "text-purple-500"
    },
    {
      icon: Users,
      title: "User Impact",
      description: "Delivered multiple international OTT platforms serving millions of active users",
      metric: "Millions",
      color: "text-orange-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Key Achievements
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Proven track record of delivering measurable business impact through innovative technical solutions
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-card border border-border hover:border-primary/30 transition-all duration-300 group">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className={`w-8 h-8 ${achievement.color}`} />
                </div>
                
                <div className={`text-4xl font-bold ${achievement.color} mb-2`}>
                  {achievement.metric}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {achievement.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;