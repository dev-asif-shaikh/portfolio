import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

const Main = () => {
  return (
   <div className="container-wide py-4">
      <Hero />
      <Projects />
      <Skills />
    </div>
  )}

export default Main

