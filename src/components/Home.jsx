import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'

function Home() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  )
}

export default Home
