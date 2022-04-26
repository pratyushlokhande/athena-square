import React from 'react'

import './style/offers.scss'

import {FaMapMarkerAlt} from 'react-icons/fa'
import LeftDots from '../assets/svg/LeftDots'
import RightDots from '../assets/svg/RightDots'

// Offers Data
import OFFERS from '../utils/OfferData'

// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/autoplay";

// dimention hook
import useWindowDimensions from '../hooks/UseWindowDimensions'


const Offers = () => {

    const { width } = useWindowDimensions();

  return (
    <div className='offers'>
        <div className="heading">
            Grab these exciting offers and <span>apply now</span>
        </div>
        <div className="offers-container">

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
            
            {OFFERS.map((offer) => (
                <SwiperSlide key={offer.id}>
                    <div className="offer">
                        <div className="offer-header">
                            <div className="company-avatar">
                                <img src={offer.companyLogo} alt="logo" />
                            </div>
                            <div className="offer-company">
                                <h3>{offer.company}</h3>
                                <h4><FaMapMarkerAlt className='offer-company-icon'/> {offer.location}</h4>
                            </div>
                        </div>
                        <div className="offer-body">
                            <div className="body-head">
                                <h1>{offer.position}</h1>
                                <h2>{offer.type} | {offer.duration}</h2>
                            </div>
                            <div className="body-description">
                                {offer.description}
                            </div>
                        </div>
                        <div className="offer-footer">
                            <a href={offer.jobUrl} className="btn btn-offer">
                                Apply now
                            </a>
                            <div className="applied-avatar">
                                {
                                    offer.applied.map((avatar, index) => (
                                        <img src={avatar} alt={index} key={index} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
        <div className="offer-button">
            <a href="#" className="btn btn-primary">View All Jobs</a>
        </div>

        <div className="offer-asset-container">

            <LeftDots className="offer-left"/>
            <RightDots className="offer-right"/>
        </div>
    </div>
  )
}

export default Offers