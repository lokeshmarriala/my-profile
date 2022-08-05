import React from 'react'
import './portfolio.css'

import IMG2 from '../../assests/Android.svg.png'
import IMG3 from '../../assests/development.jpg'
const Data=[
  {
    id:1,
    image:IMG2,
    title:'College Managment',
    github:'https://github.com',
    demo:'https://github.com'
  },
  {
    id:2,
    image:IMG3,
    title:'Stress Relief Website',
    github:'https://github.com',
    demo:'https://github.com'
  },
  // {
  //   id:3,
  //   image:IMG1,
  //   title:'hello this project',
  //   github:'https://github.com',
  //   demo:'https://github.com'
  // },
  // {
  //   id:4,
  //   image:IMG1,
  //   title:'hello this project',
  //   github:'https://github.com',
  //   demo:'https://github.com'
  // },
  // {
  //   id:5,
  //   image:IMG1,
  //   title:'hello this project',
  //   github:'https://github.com',
  //   demo:'https://github.com'
  // },
  // {
  //   id:6,
  //   image:IMG1,
  //   title:'hello this project',
  //   github:'https://github.com',
  //   demo:'https://github.com'
  // }
]
const portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent Work</h5>
    <h2>Projects</h2>
    <div className='container portfolio__container'>
      {
        Data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>
          <img src={image} alt={title}/>
        </div>
        <h3>{title}</h3>
        <div className='portfolio__item-cta'>
        <a href={github} className='btn'>github</a>
        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
      </article>
          )
        })
      }
    </div>
    </section>
  )
}

export default portfolio