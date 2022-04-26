import React from 'react'

import './style/nav.scss'

// dimention hook
import useWindowDimensions from '../hooks/UseWindowDimensions'
import useWindowScrollPositions from '../hooks/UseWindowScrollPosition'

const Nav = () => {

  const [isOpen, setIsOpen] = React.useState(false)

  const {scrollY} = useWindowScrollPositions()


  const toggleNav = () => {
    setIsOpen(!isOpen)
  }

  const { width } = useWindowDimensions();

  const navStyle = {
    backgroundColor: '#fff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  }

  return (
    <div className='nav' style={ (scrollY > 0 || isOpen) ? navStyle : {}}>
        <div className="navbar-container">
          <div className="nav-logo">
              <img src={require('../assets/athena-square-logo.png')} alt="athena-square" />
              <h1>Athenasquare</h1>
          </div>
          {width > 768 && <div className="nav-links">
              <a href="">Post a Job</a>
              <a href="">Sign In</a>
              <a className='btn btn-primary' href="">Get Started</a>
          </div>}
          {width < 768 && <div className="nav-links-mobile">
             <div className={`toggle-btn ${isOpen ? 'open' : ''}`} onClick={toggleNav}><span></span><span></span><span></span><span></span><span></span><span></span></div>
            </div>}
        </div>
          
        {isOpen && width < 768 && <div className="nav-content">
            <a href="">Post a Job</a>
            <a href="">Sign In</a>
            <a href="" className='btn btn-primary'>Get Started</a>
        </div>}
    </div>
  )
}

export default Nav