import './App.css'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import { HomeSection, AboutSection, ProjectsSection, ContactSection } from './sections'
import { projects } from './data/projects'

function App() {
  return (
    <div className="portfolio-container">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <ScrollToTop />
    </div>
  )
}

export default App