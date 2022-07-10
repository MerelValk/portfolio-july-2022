import React from 'react';
import style from './navbar.module.css'
import {ReactComponent as Hamburger} from '../../assets/icons/Hamburger.svg'


export default function Navbar() {
  return (
      <div className={style.container}>
        <div className={style.hamburgerContainer}>
          <input className={style.checkbox} type="checkbox" name="" id=""/>
          <div className={style.menuItems}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
          </div>
          <div className={style.hamburgerLines}>
            <span className={style.line1}> </span>
            <span className={style.line2}> </span>
            <span className={style.line3}> </span>
          </div>

        </div>
      </div>
  )
}