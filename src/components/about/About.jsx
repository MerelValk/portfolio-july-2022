import React from 'react';
import style from './about.module.css'


export default function About() {
  return (
      <div className={style.container}>
        <div className={style.leftContainer}>
          <img src="MerelWater.jpg" alt="Merel lachend met glas water" className={style.aboutImage}/>
        </div>
        <div className={style.rightContainer}>
          <h2>About me</h2>
          <p className="subtitle">"I am not a product of my circumstances. I am a product of my decisions."</p>
          <p>Hi there! My name is Merel van der Valk.</p>
          <p>I am currently working as a software developer in a Scrum team.
            Despite me enjoying this work very much, I have grown a love for the business behind programming.</p>
          <p>I am a student Open ICT. At Open ICT we focus on learning by doing, experiencing and
            communication. I am specializing in the role as Product Owner and learning about being
            a scrum master as well.</p>
          <div className={style.buttonContainer}>
            <a href="/" className="primary-button">Resume</a>
            <a href="/" className="secondary-button">Contact</a>
          </div>
        </div>
      </div>
  )
}