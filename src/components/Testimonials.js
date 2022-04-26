import React from 'react'
import './style/testimonials.scss'

import TESTIMONIALS from '../utils/TestimonialData'

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/autoplay";

// dimention hook
import useWindowDimensions from '../hooks/UseWindowDimensions'


const Testimonials = () => {

    const { width } = useWindowDimensions();

  return (
    <div className='testimonials'>
        <div className="heading">What students <span>speak about us</span></div>

        <div className="testimonial-container">
            <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                spaceBetween={16}
                slidesPerView={width>768 ? 3 : 1}
                autoplay={{
                    delay: 3000,
                }}
                loop={true}
             >

                {TESTIMONIALS.map((testimonial, index) => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="testimonial">
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">
                                    <img src={testimonial.image} alt="testimonial" />
                                </div>
                                <div className="testimonial-info">
                                    <h3>{testimonial.name}</h3>
                                    <h4>{testimonial.designation}</h4>
                                </div>
                            </div>
                            <div className="testimonial-desc">
                                {testimonial.description}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonials