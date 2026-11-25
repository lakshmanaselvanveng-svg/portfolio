import { Header } from "@/components/Header";
import { Contact } from "@/components/ContactSection";
import { Skills } from "@/components/SkillsSection";
import { About, Education, Experience, Footer, Hero, Projects } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        <span id="top" />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
