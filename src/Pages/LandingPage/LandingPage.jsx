import React from 'react'
import Footer from '../../Components/Footer/Footer'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Parallax from '../../Components/Parallax/Parallax'
import Services from '../../Components/Services/Services'
import Testimonial from '../../Components/Testimonial/Testimonial'
import TestPreparation from '../../Components/TestPreparation/TestPreparation'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <HeroSection />
      <TestPreparation />
      <Services />
      <Parallax />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default LandingPage
