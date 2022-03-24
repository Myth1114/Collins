import React from 'react'

const HeroSection = () => {
  return (
    <section className='Section__HeroSection'>
      <div class='custom-shape-divider-bottom-1648117556'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            class='shape-fill'
          ></path>
        </svg>
      </div>
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
