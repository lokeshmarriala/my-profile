import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assests/1.jpg'
// import AVTR2 from '../../assests/2.webp'
// import AVTR3 from '../../assests/3.webp'
// import AVTR4 from '../../assests/4.jpg'
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const Data=[
  {
    
    avatar:AVTR1,
    name:'Opentext',
    review:'Junior Software Developer (jan 2022- july 2022)'
  },
  // {
    
  //   avatar:AVTR2,
  //   name:'hello this project',
  //   review:'hello this project'
  // },
  // {
    
  //   avatar:AVTR3,
  //   name:'hello this project',
  //   review:'hello this project'
  // },
  // {
    
  //   avatar:AVTR4,
  //   name:'hello this project',
  //   review:'hello this project'
  // },
]
const testimonial = () => {
  return (
    <section id='testimonial'>
    <h5>My career journey</h5>
    <h2>Work Experience</h2>
    <Swiper className='container testimonials__container'
    modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}>
      {
        Data.map(({avatar,name,review},index)=>{
          return(
            <SwiperSlide  Key={index} className='testimonial'>
        <div className='client__avatar'>
          <img src={avatar} alt="Avatar One"/>
        </div>
        <h5 className='client__name'>{name}</h5>
          <small className='client__review'>
            {review}
          </small>
      </SwiperSlide>
          )
        })
      }
    </Swiper>
    </section>
  )
}

export default testimonial