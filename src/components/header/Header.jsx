import React from 'react';
import style from './header.module.css'
import {ReactComponent as Arrow} from '../../assets/icons/Arrow.svg'

export default function Header() {
  return (
      <div className={style.container}>
        <div className={style.leftContainer}>
          <div>
            <h1>Merel van der Valk.</h1>
            <p className={style.headerSubtitle}>PRODUCT OWNER, DESIGNER &</p>
            <p className={style.headerSubtitle}>SOFTWARE DEVELOPER</p>
          </div>
          <a className={style.arrowButton}>
            <Arrow className={style.arrowIcon} />
          </a>
        </div>
        <div className={style.rightContainer}>
          <img src="MerelUtrecht.jpg" alt="Merel lachend" className={style.headerImage}/>
          <img src="MerelUtrechtKlein.jpg" alt="Merel lachend" className={style.headerImageMobile}/>
        </div>
      </div>
  )
}