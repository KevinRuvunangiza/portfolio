import './App.css'
import HeroSection from './components/sections/HeroSection'
import Navbar from './components/Navbar'
import AboutSection from './components/sections/AboutSection'
import EducationSection from './components/sections/EducationSection'
import ProjectsSection from './components/sections/ProjectSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/Footer'
import SplashScreen from './components/SplashScreen'
import ScrollFadeIn from './components/ScrollFadeIn'

function App() {
  return (
    <>
      <SplashScreen>
        <Navbar />
        
        <ScrollFadeIn>
          <HeroSection name={"Kevin Ruvunangiza"} jobTitle="Frontend Developer & Product Builder."/>
        </ScrollFadeIn>
        
        <ScrollFadeIn delay={0.2}>
          <AboutSection />
        </ScrollFadeIn>
        
        <ScrollFadeIn delay={0.2}>
          <EducationSection />
        </ScrollFadeIn>
        
        <ScrollFadeIn delay={0.2}>
          <ProjectsSection />
        </ScrollFadeIn>
        
        <ScrollFadeIn delay={0.2}>
          <ContactSection />
        </ScrollFadeIn>
        
        <ScrollFadeIn delay={0.2}>
          <Footer />
        </ScrollFadeIn>
      </SplashScreen>
    </>
  )
}

export default App