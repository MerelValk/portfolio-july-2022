import React from 'react';
import style from './navbar.module.css'

export default function Navbar() {
  return (
      <div className={style.container}>
        <div className={style.navContainer}>
          <input type="checkbox" id="check" className={style.checkbox}/>
          <div className={style.nav}>
            <li className={style.menuItem}><a>Home</a></li>
            <li className={style.menuItem}><a>About</a></li>
            <li className={style.menuItem}><a>Portfolio</a></li>
            <li className={style.menuItem}><a>Contact</a></li>
          </div>

          <label className={style.hamburgerLines}>
            <span className={style.line}></span>
            <span className={style.line}></span>
            <span className={style.line}></span>
          </label>

        </div>
      </div>
  )
}