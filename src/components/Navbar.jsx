import React, { useEffect, useState } from 'react';
import "./Navbar.css" ;
import htmlicon4 from "../starter-code/assets/images/icon-accessibility.svg";
import light from  "../starter-code/assets/images/icon-sun-dark.svg";
import dark from  "../starter-code/assets/images/icon-moon-dark.svg";


const Navbar = () => {

  const [userColorScheme, setUserColorScheme] = useState("");

  function toggleColorMode() {
    //check user system preference (light-theme default)
    const currentColorScheme = window.matchMedia('(prefers-color-scheme: light)').matches;

    if(currentColorScheme) {
      sessionStorage.setItem("colorScheme", "light")
    } else {
      sessionStorage.setItem("colorScheme", "dark")
    }

    //switch state based on preference
    switchColorState(currentColorScheme);    
  }

  function switchColorState(currentColorScheme) {
    currentColorScheme ? setUserColorScheme("light") : setUserColorScheme("black")
  }

  useEffect(() => {
    toggleColorMode();
  }, [])

  


  return (
    <nav className='nav-container'>
          <div className='subject-image'>
            <img src={htmlicon4} alt="image" /><span>HTML</span></div>

          <div className='other-side'>
            <div className='light'> <img src={light} alt="" /></div>
            
            <div onClick={toggleColorMode} className='toggle-bar'>
              <div className="toggle-ball">
                
              </div>
            </div>
            <div className="dark"><img src={dark} alt="" /></div>
          </div>
    </nav>
  )
}

export default Navbar
