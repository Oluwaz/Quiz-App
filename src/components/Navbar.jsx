import React from 'react';
import "./Navbar.css" ;
import htmlicon4 from "../starter-code/assets/images/icon-accessibility.svg";
import light from  "../starter-code/assets/images/icon-sun-dark.svg";
import dark from  "../starter-code/assets/images/icon-moon-dark.svg";


const Navbar = () => {
  return (
    <nav className='nav-container'>
          <div className='subject-image'> 
            <img src={htmlicon4} alt="image" /><span>HTML</span></div>

          <div className='other-side'>
            <div className='light'> <img src={light} alt="" /></div>
            <div className='toggle-bar'>
              <div className="toggle-ball">
                
              </div>
            </div>
            <div className="dark"><img src={dark} alt="" /></div>
          </div>
    </nav>
  )
}

export default Navbar
