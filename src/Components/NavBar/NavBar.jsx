import React from 'react'

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
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>About</span>
            </li>
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
