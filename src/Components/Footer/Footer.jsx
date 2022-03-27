import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { HiPhone } from 'react-icons/hi'
import { GoLocation } from 'react-icons/go'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer>
      <div className='Footer'>
        <div className='Footer__Left'>
          <h1 className='Collins'>Collins</h1>
          <q>A Complete GRE Test Preparation Center</q>
          <div className='FooterSocial'>
            <div className='Social'>
              <div className='Social__List'>
                <span className='Social__Icon'>
                  <BsFacebook className='facebook' />
                </span>
                <span className='Social__Icon'>
                  <BsInstagram className='instagram' />
                </span>
                <span className='Social__Icon'>
                  <BsTwitter className='twitter' />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='Footer__Middle'>
          <h2>Important Links</h2>
          <ul>
            <Link to='/'>
              <li>Home</li>
            </Link>
            <Link to='/about'>
              <li>About</li>
            </Link>
            <li>Contact</li>
            <li>Why GRE?</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className='Footer__Right'>
          <h2>Have a Question?</h2>
          <div className='Query'>
            <div className='Details'>
              <GoLocation className='Icon Location' />
              <span>
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </div>
            <div className='Details'>
              <HiPhone className='Icon Phone' />
              <span>1234567890</span>
            </div>
            <div className='Details'>
              <AiOutlineMail className='Icon Mail' />
              <span>collins@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
