import React from 'react'
import Navbar from '../components/Global/navbar'
import Hero from '../components/About/Hero'
import Fynora from '../components/About/Fynora'
import Footer from '../components/Global/footer'
import Logo from '../assets/brand-logo-no-bg.png'
import NavLogo from '../assets/navbar-logo.png'
import FynoraLogo from '../assets/Fynora-Brand-Logo-Full.png'


const About = () => {
  return (
    <div>
      <Navbar NavLogo={NavLogo} />
      <Hero Logo={Logo} />
      <Fynora FynoraLogo={FynoraLogo} />
      <Footer />
    </div>
  )
}

export default About
