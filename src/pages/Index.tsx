import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ProfessionalExperience from "@/components/ProfessionalExperience";
import CoreSkills from "@/components/CoreSkills";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <ProfessionalExperience />
      <CoreSkills />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
