import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <div className='NavBar'>
        <div className='NavBar__Logo'>
          <h1 className='Collins'>Collins</h1>
          <q>A Complete GRE Test Preparation Center</q>
        </div>
        <div className='NavBar__List'>
          <ul>
            <Link to='/'>
              <li>
                <span>Home</span>
              </li>
            </Link>
            <Link to='/about'>
              <li>
                <span>About</span>
              </li>
            </Link>
            <li>
              <span>Why GRE?</span>
            </li>
            <li>
              <span>Contact</span>
            </li>
            <li>
              <span>Resources</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
