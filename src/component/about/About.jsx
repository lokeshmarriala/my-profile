import React from 'react'
import './about.css'
import ME from '../../assests/Photo1.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME}alt='About Image'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
            <FaAward classname='about__icon'/>
              <h5>Experience</h5>
              <small>6-months Experience</small>
            </article>
            <article className='about__card'>
            <FiUsers classname='about__icon'/>
              <h5>Academics</h5>
              <small>CGPA 8.14</small>
            </article>
            <article className='about__card'>
            <VscFolderLibrary classname='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>
          <p>
          Pursued Btech in Computer Science and Engineering batch 2022 at CVR College of Engineering
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About