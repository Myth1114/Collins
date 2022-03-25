import React from 'react'
import Footer from '../../Components/Footer/Footer'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Services from '../../Components/Services/Services'
import TestPreparation from '../../Components/TestPreparation/TestPreparation'


const LandingPage = () => {
  return (
    <div className='LandingPage'>
      {/* <TopHeader/> */}
      <HeroSection />
      <TestPreparation />
      <Services />
      <Footer/>
    </div>
  )
}

export default LandingPage
