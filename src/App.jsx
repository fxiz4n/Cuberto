import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo'
import Projects from './components/Projects'
import Services from "./components/Services";
import Blog from "./components/Blog";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Projects />
      <Services />
      <Blog />
      <Cta />
      <Footer />
    </>
  )
}

export default App