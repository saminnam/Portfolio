import React from 'react'
import Header from './Components/Header'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import AOS from "aos";
import Contact from './Components/Contact'
import MediaIcons from './Components/MediaIcons'

const App = () => {
  AOS.init({
    duration: 1000, // Duration of animations
    easing: 'ease-in-out', // Easing function
    once: true, // Whether animation should happen only once
  });
  
  return (
    <div class="scroll-smooth">
     <Header/>
     <HeroSection/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
     <MediaIcons/>
    </div>
  )
}

export default App
