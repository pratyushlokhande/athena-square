import React from 'react'
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaArrowRight } from 'react-icons/fa'

import './style/footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="footer-head">
                <h3>Athena Square</h3>
                <a className='btn btn-contact' href="">Contact Us <FaArrowRight /></a>
            </div>
            <hr />
            <div className="footer-body">
                <div className="about-athena">
                    <h4>About Athena Square</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, placeat!</p>
                </div>
                <div className="quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="">Hire</a></li>
                        <li><a href="">Get Hired</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Term & Condition</a></li>
                    </ul>
                </div>
                <div className="upcoming-opportunities">
                    <h4>Upcoming Opportunities</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, ipsum!</p>
                    <a href="" className="btn btn-opps">Explore</a>
                </div>
            </div>
        </div>
        <div className="footer-foot">
            <p>2022 All right reserved</p>
            <ul>
                <li><a href=""><FaFacebook /></a></li>
                <li><a href=""><FaInstagram /></a></li>
                <li><a href=""><FaLinkedin /></a></li>
                <li><a href=""><FaGithub /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer