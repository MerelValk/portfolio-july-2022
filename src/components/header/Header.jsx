import React from 'react';
import style from './header.module.css'

export default function Header() {
  return (
      <div className={style.container}>
        <div className={style.leftContainer}>
          <h1>Merel van der Valk.</h1>
          <p>PRODUCT OWNER, DESIGNER &</p>
          <p>SOFTWARE DEVELOPER</p>
        </div>
        <div className={style.rightContainer}>
          <img src="MerelUtrecht.jpg" alt="Merel lachend" className={style.headerImage}/>
        </div>
      </div>
  )
}