import React from 'react'

const Resources = () => {
  return (
    <section className='Section__Resources'>
      <h1 className='SectionHeading'>Available Resources</h1>
      <div className='Resources__Container'>
        <div className='Resources__Container-Box'>
          <div className='Image'>
            <img src='/Images/ets.jpg' alt='books'></img>
          </div>
          <div className='BookName'>
            <h2>ETS official guide</h2>
          </div>
          <div className='Button'>
            <button className='custom-btn btn-3'>Download</button>
          </div>
        </div>
        <div className='Resources__Container-Box'>
          <div className='Image'>
            <img src='/Images/manhattan5lb.jpg' alt='books'></img>
          </div>
          <div className='BookName'>
            <h2>Manhattan Prep 5lb</h2>
          </div>
          <div className='Button'>
            <button className='custom-btn btn-3'>Download</button>
          </div>
        </div>
        <div className='Resources__Container-Box'>
          <div className='Image'>
            <img src='/Images/ets.jpg' alt='books'></img>
          </div>
          <div className='BookName'>
            <h2>ETS official guide</h2>
          </div>
          <div className='Button'>
            <button className='custom-btn btn-3'>Download</button>
          </div>
        </div>
        <div className='Resources__Container-Box'>
          <div className='Image'>
            <img src='/Images/ets.jpg' alt='books'></img>
          </div>
          <div className='BookName'>
            <h2>ETS official guide</h2>
          </div>
          <div className='Button'>
            <button className='custom-btn btn-3'>Download</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resources
