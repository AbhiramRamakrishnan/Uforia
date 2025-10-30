import React from 'react'
import NavLogo from '../assets/navbar-logo.png'
import HeroImg from '../assets/Hero-bg.jpg'
import LogoImg from '../assets/brand-logo-no-bg.png'
import Hero from '../components/Home/Hero'
import Socials from '../components/Home/Socials'
import Navbar from '../components/Global/navbar'
import Footer from '../components/Global/footer'

const Home = () => {
  return (
    <div>
      <Navbar NavLogo={NavLogo} />
      <Hero HeroImg={HeroImg} LogoImg={LogoImg} />
      <Socials />
      <Footer />
    </div>
  )
}

export default Home
