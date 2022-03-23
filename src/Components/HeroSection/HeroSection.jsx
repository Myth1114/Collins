import React from 'react'

const HeroSection = () => {
  return (
    <section className='Section__HeroSection'>
      <div className='HeroSection'>
        <div className='HeroSection__Left'>
          <div className='maths'>
            100<sup>100</sup>
            <br /> || <br />
            100<sup>98</sup> + 100<sup>99</sup>
          </div>
          <div className='HeroSection__Left-Text'>
            <h1 className='title'>Enhance Your Career</h1>
            <span className='subtitle'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            </span>
            <button className='custom-btn btn-2'>Contact Us</button>
          </div>
        </div>
        <div className='HeroSection__Right'>
          <div className='HeroSection__Right-Image'>
            <img
              className='HeroImage'
              src='/Images/heroImage-3.png'
              alt='hero'
            ></img>
          </div>
          <div className='floating'>buoyant</div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
