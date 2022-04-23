import React from 'react'
import { BiPolygon } from 'react-icons/bi'
import { BiRectangle } from 'react-icons/bi'
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked'
const TestPreparation = () => {
  return (
    <section className='Section__Preparation'>
      <span className='RandomIcons'>
        <ChangeHistoryIcon className='RandomIcons__Triangle' />
        <BiRectangle className='RandomIcons__Rectangle' />
        <RadioButtonUncheckedIcon className='RandomIcons__Circle' />
        <BiPolygon className='RandomIcons__Polygon' />
      </span>
      <div className='Preparation'>
        <div className='Preparation__Text'>
          <h1 className='PrimaryHeading'>Test Preparation</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora,
            nesciunt dolore laboriosam vero temporibus excepturi architecto
            repellat provident dolor quo dolores, magni ullam impedit numquam
            maiores itaque nisi facilis sed.
          </p>
          <div className='AeroPlane'>
            <img src='/Images/aeroplane2.png' alt='fly-high'></img>
          </div>
        </div>
        <div className='Preparation__Image'>
          <img className='TestImage' src='/Images/test-3.jpg' alt='test'></img>
        </div>
      </div>
    </section>
  )
}

export default TestPreparation
