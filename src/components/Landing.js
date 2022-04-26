import React from 'react'
import './style/landing.scss'

import LandLeft from '../assets/svg/LandLeft'
import LandRight from '../assets/svg/LandRight'
const Landing = () => {
  return (
    <div className='landing'>
        <div className="main-heading">
            Discover Tech Talent <br />
            <span>showcasing</span> your proof of work
        </div>
        <div className="sub-heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec iaculis gravida mauris urna neque at a. Vel in libero placerat bibendum pellentesque nibh velit ipsum adipiscing.
        </div>
        <div className="button-container">
            <a className="btn btn-primary">Get Started</a>
            <a className="btn btn-secondary">Explore Jobs</a>
        </div>
        <div className="asset-container">
            
            {/* If PNG */}
            {/* <img src={require('../assets/landing-left.png')} alt="landing-left" className="land-left" /> */}
            {/* <img src={require('../assets/landing-right.png')} alt="landing-right" className="land-right" /> */}
            
            {/* If SVG */}
            <LandLeft className="land-left" />
            <LandRight className="land-right" />
        </div>
    </div>
  )
}

export default Landing