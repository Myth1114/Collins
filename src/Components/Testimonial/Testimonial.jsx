import React from 'react'
import TestimonialData from './Data'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

const Testimonial = () => {
  return (
    <section className='Testimonial'>
      <h2 className='SectionHeading'>What our students say about us</h2>
      <Swiper
        className='Testimonial__Container'
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      >
        {TestimonialData.map((el, idx) => {
          return (
            <SwiperSlide key={idx} className='Testimonial__Article'>
              <div className='Image'>
                <img src={el.avatar} alt=''></img>
              </div>
              <h5>{el.FullName}</h5>
              <small>{el.Review}</small>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonial
