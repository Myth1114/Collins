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
        <div className='custom-shape-divider-top-1648825718'>
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
              <span>Nepal, Kathmandu, Putali Sadak</span>
            </div>
            <div className='Details'>
              <HiPhone className='Icon Phone' />
              <a className='Email' href='tel:+977-9867420916'>
                1234567890
              </a>
            </div>
            <div className='Details'>
              <AiOutlineMail className='Icon Mail' />
              <a className='Email' href='mailto:mythleshyadav114@gmail.com'>
                collins@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
