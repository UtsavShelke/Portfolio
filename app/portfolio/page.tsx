import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Education } from "@/components/education"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Certificates } from "@/components/certificates"
import { Contact, Footer } from "@/components/contact"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  )
  
}
