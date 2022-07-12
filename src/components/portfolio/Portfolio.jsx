import React from 'react';
import style from './portfolio.module.css'

export default function Portfolio() {
  return (
      <div className={style.container}>
        <div className={style.textContainer}>
          <h2>Portfolio</h2>
          <p className="subtitle">"The main thing is to keep the main thing the main thing."</p>
        </div>
        <div className={style.projectsContainer}>
          <div className={style.project}>
            <p className={style.projectName}>Project 1</p>
            <div className={style.projectDescription}>

            </div>
          </div>
          <div className={style.project}>
          </div>
          <div className={style.project}>
          </div>
        </div>
        <div className={style.buttonContainer}>
          <a className="primary-button">View more projects</a>

        </div>
      </div>
  )
}