import React from 'react'
import Header from './components/header/Header'

import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portofolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Skills from './components/skills/Skills'
const App = () => {
  
  return (  
    <>
    
      <Header />
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Portfolio />  
      <Contact />
      <Footer />
  </>
  )
}


export default App