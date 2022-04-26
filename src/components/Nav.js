import React from 'react'

import './style/nav.scss'

const Nav = () => {
  return (
    <div className='nav'>
        <div className="nav-logo">
            <img src={require('../assets/athena-square-logo.png')} alt="athena-square" />
            <h1>Athenasquare</h1>
        </div>
        <div className="nav-links">
            <a href="">Post a Job</a>
            <a href="">Sign In</a>
            <a className='btn btn-primary' href="">Get Started</a>
        </div>
    </div>
  )
}

export default Nav