import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import BuildingLinks from './components/BuildingLinks'
import Video from './components/Video'
import ColdEmail from './components/ColdEmail'
import CTA from './components/CTA'
import Pricings from './components/Pricings'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className='px-2 sm:px-10'>
      <Nav />
      <Hero />
      <WhyUs />
      <BuildingLinks />
      {/* <Video/> */}
      <ColdEmail />
      <CTA />
      <Pricings />
      <Newsletter />
      <Footer/>
      

      {/* <div className="h-[50vh]"></div> */}
    </div>
  )
}

export default App