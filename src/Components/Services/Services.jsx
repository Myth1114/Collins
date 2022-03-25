import React from 'react'
import { ImBooks } from 'react-icons/im'
import { BiTime } from 'react-icons/bi'
import { HiLibrary } from 'react-icons/hi'
const Services = () => {
  return (
    <section className='Section__Services'>
      <h1 className='SectionHeading'>Why Learn With Us?</h1>
      <div className='Services'>
        <div className='Services__Card'>
          <ImBooks className='Icon' />
          <h2 className='Title'>Resources</h2>
          <p className='Description'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus distinctio rerum facere, totam sequi quibusdam at
          </p>
        </div>
        <div className='Services__Card'>
          <BiTime className='Icon' />
          <h2 className='Title'>Validity</h2>
          <p className='Description'>The validity of the course is 1 year.</p>
        </div>
        <div className='Services__Card'>
          <HiLibrary className='Icon' />
          <h2 className='Title'>Library</h2>
          <p className='Description'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus distinctio rerum facere, totam sequi quibusdam at
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
