import MainLayout from './components/layouts/MainLayout'
import Hero from './components/Hero'
import SectionBanner from './components/shared/SectionBanner'
import Projects from './components/Projects'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'

function App() {

  return (
    <MainLayout>
      <Hero />
      <WhyUs />
      <SectionBanner title="We can build your dream product" />
      <Services />
      <SectionBanner title="Rapid Prototyping, Project Starts, Full Product Delivery, Clever Pricing" />
      <Projects />
      <SectionBanner title="It is about more than just software" />      
      <AboutUs />
      <Contact />
    </MainLayout>
  )
}

export default App
