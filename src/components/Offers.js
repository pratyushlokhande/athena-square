import React from 'react'

import './style/offers.scss'

import {FaMapMarkerAlt} from 'react-icons/fa'
import LeftDots from '../assets/svg/LeftDots'
import RightDots from '../assets/svg/RightDots'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="heading">
            Grab these exciting offers and <span>apply now</span>
        </div>
        <div className="offers-container">
            
            {/* Offer 1 */}
            <div className="offer">
                <div className="offer-header">
                    <div className="company-avatar">
                        <img src="//unsplash.it/100/100" alt="logo" />
                    </div>
                    <div className="offer-company">
                        <h3>Amazon</h3>
                        <h4><FaMapMarkerAlt className='offer-company-icon'/> Hyderabad</h4>
                    </div>
                </div>
                <div className="offer-body">
                    <div className="body-head">
                        <h1>Software Developer</h1>
                        <h2>Full Time | 2 days ago</h2>
                    </div>
                    <div className="body-description">
                        We are looking for a Software Developer intern for our Meta developer team.
                    </div>
                </div>
                <div className="offer-footer">
                    <a href="#" className="btn btn-offer">
                        Apply now
                    </a>
                    <div className="applied-avatar">
                        <img src="//unsplash.it/100/100?1" alt="" />
                        <img src="//unsplash.it/100/100?2" alt="" />
                        <img src="//unsplash.it/100/100?3" alt="" />
                    </div>
                </div>
            </div>

            {/* Offer 2 */}
            <div className="offer">
                <div className="offer-header">
                    <div className="company-avatar">
                        <img src="//unsplash.it/100/100" alt="logo" />
                    </div>
                    <div className="offer-company">
                        <h3>Amazon</h3>
                        <h4><FaMapMarkerAlt className='offer-company-icon'/> Hyderabad</h4>
                    </div>
                </div>
                <div className="offer-body">
                    <div className="body-head">
                        <h1>Software Developer</h1>
                        <h2>Full Time | 2 days ago</h2>
                    </div>
                    <div className="body-description">
                        We are looking for a Software Developer intern for our Meta developer team.
                    </div>
                </div>
                <div className="offer-footer">
                    <a href="#" className="btn btn-offer">
                        Apply now
                    </a>
                    <div className="applied-avatar">
                        <img src="//unsplash.it/100/100?1" alt="" />
                        <img src="//unsplash.it/100/100?2" alt="" />
                        <img src="//unsplash.it/100/100?3" alt="" />
                    </div>
                </div>
            </div>

            {/* Offer 3 */}
            <div className="offer">
                <div className="offer-header">
                    <div className="company-avatar">
                        <img src="//unsplash.it/100/100" alt="logo" />
                    </div>
                    <div className="offer-company">
                        <h3>Amazon</h3>
                        <h4><FaMapMarkerAlt className='offer-company-icon'/> Hyderabad</h4>
                    </div>
                </div>
                <div className="offer-body">
                    <div className="body-head">
                        <h1>Software Developer</h1>
                        <h2>Full Time | 2 days ago</h2>
                    </div>
                    <div className="body-description">
                        We are looking for a Software Developer intern for our Meta developer team.
                    </div>
                </div>
                <div className="offer-footer">
                    <a href="#" className="btn btn-offer">
                        Apply now
                    </a>
                    <div className="applied-avatar">
                        <img src="//unsplash.it/100/100?1" alt="" />
                        <img src="//unsplash.it/100/100?2" alt="" />
                        <img src="//unsplash.it/100/100?3" alt="" />
                    </div>
                </div>
            </div>
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