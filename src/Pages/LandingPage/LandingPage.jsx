import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import TestPreparation from '../../Components/TestPreparation/TestPreparation'
// import TopHeader from '../../Components/TopHeader/Topheader'

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      {/* <TopHeader/> */}
      <HeroSection />
      <TestPreparation />
    </div>
  )
}

export default LandingPage
