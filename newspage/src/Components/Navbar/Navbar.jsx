import './Navbar.css'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar container'>
     <div className="navlogo">
      <span><img src="./logo.svg" alt="home" /></span>
     </div>
     <div className="navmenu">
        <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
        </ul>
     </div>
    </div>
  )
}

export default Navbar