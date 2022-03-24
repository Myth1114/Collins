import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BiPhoneCall } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'

const TopHeader = () => {
  return (
    <section className='Section__TopHeader'>
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
      <div className='Contact'>
        <span className='Contact__Icon'>
          <BiPhoneCall />
        </span>
        <span className='Contact__Title'>789456123</span>
        <span className='Contact__Icon'>
          <FiMail />
        </span>
        <span className='Contact__Title'>collins@gmail.com</span>
      </div>
      <div className='Resources'>
        <button className='custom-btn btn-3'>GRE Materials</button>
      </div>
    </section>
  )
}

export default TopHeader
