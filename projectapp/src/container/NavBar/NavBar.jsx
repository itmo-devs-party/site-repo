import React from 'react'
import './NavBar.scss';
import {images} from '../../constants';
 

function NavBar() {
  return (
    <nav className = "app__navbar">
      <div>
        <img src = {images.AppLogo} alt = "logo"/>
      </div>
      <ul className="">
        {['Home', 'Buildings','Scan', 'Map', 'People'].map((item)=>(
          <li key = {`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar