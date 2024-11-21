import HeroSection from "./components/herosection"
import AboutSection from "./components/about"
import ProjectCards from "./components/project"
import SkillSection from "./components/skill"

export default function Home(){
  return(
    <>
    <HeroSection />
    <SkillSection />
    <AboutSection />
    <ProjectCards />
    </>
  )
}
