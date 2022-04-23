import React from 'react'
import { BsMailbox, BsPhone } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'

const Contact = () => {
  return (
    <section className='Section__Contact'>
      <div className='AboutUs__Parallax'>
        <div className='AboutUs__Parallax--Parallax'></div>
        <div className='AboutUs__Parallax--Text'>
          <p>Contact Us</p>
        </div>
      </div>
      <div className='Contact__Container'>
        <div className='Contact__Container--Left'>
          <div className='Contact__Box'>
            <span className='Icon'>
              <BsPhone />
            </span>
            <a href='tel:+977-9867420916'>123456789</a>
          </div>
          <div className='Contact__Box'>
            <span className='Icon'>
              <BsMailbox />
            </span>
            <a href='mailto:mythleshyadav114@gmail.com'>collins@gmail.com</a>
          </div>
          <div className='Contact__Box'>
            <span className='Icon'>
              <GoLocation />
            </span>
            <span>Kathmandu, Putali Sadak</span>
          </div>
        </div>
        <div className='Contact__Container--Right'>
          <img src='/Images/illustration.png' alt='contact'></img>
        </div>
      </div>
      <div className='Map'>
        <iframe
          title='Inline Frame Example'
          src='https://maps.google.com/maps?q=27.52112966187962,83.45485419057195&t=&z=13&ie=UTF8&iwloc=&output=embed'
          frameBorder='0'
          allowFullScreen
          width='100%'
          height='100%'
        ></iframe>
      </div>
    </section>
  )
}

export default Contact
