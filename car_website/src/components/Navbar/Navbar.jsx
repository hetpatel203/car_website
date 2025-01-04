import React from 'react'
import './Navbar.css'
const navbar = () => {
  return (
    <div className=' nav'>
      <div className='nav-logo'>
        <span>EV</span>-olution  
      </div>
        <ul className='nav-menu'>
          <li className='nav-home'>Home</li>
          <li className='nav-about'>About</li>
          <li className='nav-Explore'>Explore</li>
          <li className='nav-contact'>Contact</li>
        </ul>
       
    </div>
  )
}

export default navbar
