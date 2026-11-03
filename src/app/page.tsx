import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { About } from "@/components/About";
import { CompareEmpire } from "@/components/CompareEmpire";
import { WorkExperience } from "@/components/WorkExperience";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { Timeline } from "@/components/Timeline";
import { Hobbies } from "@/components/Hobbies";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TechMarquee />
        <About />
        <CompareEmpire />
        <WorkExperience />
        <Projects />
        <Certifications />
        <Skills />
        <Timeline />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
