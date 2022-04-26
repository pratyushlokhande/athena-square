import React from 'react'

import './style/works.scss'

import {FiUser, FiUploadCloud, FiCheckCircle} from 'react-icons/fi'
import WorkExtension from './WorkExtension'
import LeftDots from '../assets/svg/LeftDots'
import RightDots from '../assets/svg/RightDots'

const Works = () => {
  return (
    <div className='works'>
        <div className="heading">How Athena Square <span>Works?</span></div>
        <div className="works-container">

            {/* Card 1 */}
            <div className="work-card">
                <FiUser className='icon' style={{color: "#7C81CA"}} />
                <div className="work-heading">
                    Create Account
                </div>
                <div className="work-description">
                    First you need to register and create an account at Athenasquare.
                </div>
            </div>

            {/* Card 2 */}
            <div className="work-card">
                <FiUploadCloud className='icon' style={{color: "#E96969"}} />
                <div className="work-heading">
                    Build your profile
                </div>
                <div className="work-description">
                    Update and upload all skillsets and experiences on your profile to be job ready.
                </div>
            </div>

            {/* Card 3 */}
            <div className="work-card">
                <FiCheckCircle className='icon' style={{color: "#63BBAE"}} />
                <div className="work-heading">
                    Apply for jobs
                </div>
                <div className="work-description">
                    Apply for jobs through our Job applications job board exclusively at Athenasquare.
                </div>
            </div>

        </div>
        <div className="work-extend">
            <WorkExtension />
        </div>
        <div className="works-asset-container">
          <LeftDots className="works-left" />
          <RightDots className="works-right" />
        </div>
    </div>
  )
}

export default Works