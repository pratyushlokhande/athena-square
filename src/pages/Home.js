import React from 'react'
import Landing from '../components/Landing'
import Offers from '../components/Offers'
import Testimonials from '../components/Testimonials'
import Traction from '../components/Traction'
import Works from '../components/Works'

const Home = () => {
  return (
    <>
        <Landing />
        <Traction />
        <Works />
        <Offers />
        <Testimonials />
    </>
  )
}

export default Home