import React from 'react'
import './style/work-extension.scss'

import {FaGithub, FaCaretUp, FaPython, FaReact, FaJava} from 'react-icons/fa'

const WorkExtension = () => {
  return (
    <div className='work-extension'>
        <div className="dev-profiles">

            {/* CODECHEF */}
            <div className="dev-profile codechef">
                <div className="dev-profile-heading">
                    <FaGithub className='icon' /> Codechef
                </div>
                <div className="dev-profile-description">
                    <h5>Problems solved this month</h5>
                    <div className="rate-count">25 <span><FaCaretUp />10%</span></div>
                    <h5>Compared to 22  last month</h5>
                    <h5>Frequently used</h5>
                    <div className="language-container">
                        <h1>C++</h1>
                   </div>
                </div>
            </div>

            {/* HACKERRANK */}
            <div className="dev-profile hacker-rank">
                <div className="dev-profile-heading">
                    <FaGithub className='icon' /> Hacker Rank
                </div>
                <div className="dev-profile-description">
                    <h5>Problems solved this month</h5>
                    <div className="rate-count">25 <span><FaCaretUp />10%</span></div>
                    <h5>Compared to 22  last month</h5>
                    <h5>Frequently used</h5>
                     <div className="language-container">
                        <h1>C++</h1>
                   </div>
                </div>
            </div>

            {/* LEETCODE */}
            <div className="dev-profile leetcode">
                <div className="dev-profile-heading">
                    <FaGithub className='icon' /> Leetcode
                </div>
                <div className="dev-profile-description">
                    <h5>Problems solved this month</h5>
                    <div className="rate-count">25 <span><FaCaretUp />10%</span></div>
                    <h5>Compared to 22  last month</h5>
                    <h5>Frequently used</h5>
                   <div className="language-container">
                        <FaPython className='c-icon' /> 
                   </div>
                </div>
            </div>

            {/* Github */}
            <div className="dev-profile github">
                <div className="dev-profile-heading">
                    <FaGithub className='icon' /> Github
                </div>
                <div className="dev-profile-description">
                    <h5>Problems solved this month</h5>
                    <div className="rate-count">25 <span><FaCaretUp />10%</span></div>
                    <h5>Compared to 22  last month</h5>
                    <h5>Frequently used</h5>
                     <div className="language-container">
                        <FaPython className='c-icon'/>
                        <FaReact className='c-icon' /> 
                        <FaJava className='c-icon' /> 
                   </div>
                </div>
            </div>
        </div>

        <div className="profile">
            <div className="profile-header">
                <div className="avatar">
                    <img src={require('../assets/athena-square-logo.png')} alt="" />
                </div>
                <div className="name">Aman</div>
                <div className="designation">ReactJS, Python & JS Enthusiast</div>
            </div>
            <div className="athena-band">
                <div className="athena-logo"></div>
                <div className="athena-rating">
                    <img src={require('../assets/athena-square-logo.png')} alt="" />    
                    300 pts
                </div>
            </div>
            <div className="profile-links">
                <a href="#" className="link"><FaGithub /> Portfolio</a>
                <a href="" className="link"><FaGithub /> Github</a>
                <a href="" className="link"><FaGithub /> Codechef</a>
                <a href="" className="link"><FaGithub /> LinkedIn</a>
            </div>
        </div>

        <div className="profile-description">
            <div className="desc">
                <h3><span>Unique candidate details</span> you cannot find anywhere else</h3>
                <p>
                    <span>Job search status</span> - We will tell you if a candidate is ready to interview or open to offers.
                    <br /> <br />
                    <span>Skills & experience</span> - We give candidates the ability to showcase this in unique ways, like showcasing work from all platforms in one place.
                </p>
            </div>
            <div className="desc">
                <h3><span>Find the right job</span> made just for you</h3>
                <p>
                    A unique way to showcase your work with a cumulative profile page across Tech platforms like github, codeforces, hackerank etc with overall submissions, streaks, contest rating graphs and calendar of submissions.
                </p>
            </div>
        </div>
    </div>
  )
}

export default WorkExtension