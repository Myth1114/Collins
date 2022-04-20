import React from 'react'

const About = () => {
  return (
    <section className='Section_AboutUs'>
      <div className='AboutUs__Parallax'>
        <div className='AboutUs__Parallax--Parallax'></div>
        <div className='AboutUs__Parallax--Text'>
          <h1>About Us</h1>
          <p>Our Mission is to provide cognitive knowledge.</p>
        </div>
      </div>

      <div className='AboutUs__Container'>
        <div className='AboutUs__Container--Left'>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            deleniti temporibus nulla? Veritatis voluptate ratione quia quo
            quaerat ea, amet rerum, ipsam repudiandae unde enim! Excepturi
            pariatur iste recusandae sed. <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            tempore obcaecati expedita beatae dolor deserunt accusamus quaerat
            nihil provident tenetur velit eius minima magnam, error perferendis
            quod aut voluptatibus saepe!
          </p>
        </div>
        <div className='AboutUs__Container--Right'>
          <div className='AboutImage'>
            <img src='/Images/about-1.jpg' alt='about' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
