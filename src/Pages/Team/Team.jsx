import React from 'react'

const Team = () => {
  return (
    <div className='TeamSection'>
      <h2 className='SectionHeading'>Meet Our Team</h2>
      <div className='Section__Team'>
        <div className='Section__Team--Card'>
          <div className='img-container'>
            <img src='/Images/heroImage-3.jpg' alt='ff'></img>
          </div>
          <div className='Content'>
            <h2>Katy Perry</h2>
            <p>Web developer</p>
          </div>
        </div>
        <div className='Section__Team--Card'>
          <div className='img-container'>
            <img src='/Images/heroImage-3.jpg' alt='ff'></img>
          </div>
          <div className='Content'>
            <h2>Hazel Keech</h2>
            <p>Web developer</p>
          </div>
        </div>
        <div className='Section__Team--Card'>
          <div className='img-container'>
            <img src='/Images/heroImage-3.jpg' alt='ff'></img>
          </div>
          <div className='Content'>
            <h2>Elyss Perry</h2>
            <p>Web developer</p>
          </div>
        </div>
        <div className='Section__Team--Card'>
          <div className='img-container'>
            <img src='/Images/heroImage-3.jpg' alt='ff'></img>
          </div>
          <div className='Content'>
            <h2>Name</h2>
            <p>Web developer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
