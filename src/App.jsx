import MainLayout from './components/layouts/MainLayout'
import Hero from './components/Hero'
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
      <div className='container mx-auto grid lg:grid-cols-2'>
        <Projects />
        <Services />
      </div>
      <AboutUs />
      <Contact />
    </MainLayout>
  )
}

export default App
