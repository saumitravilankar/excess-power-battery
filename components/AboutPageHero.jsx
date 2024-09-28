import Image from 'next/image'
import React from 'react'

import '@styles/AboutPageHero.scss'

const AboutPageHero = () => {
  return (
    <>
    <h1 className="title">Our Journey till date</h1>
    <div className='aboutherobox'>
        <div className='picture'>
          <Image fill src={'/assets/images/about/ourjourney.jpg'} alt='excess power battery journey' />
        </div>
        <div className="info"><span>'Excess Power Batteries'</span>  is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices. <br /><br /> The idea to start this industry in Beed, Maharashtra blossomed after detailed research and detailed analysis considering various factors. A Mechanical Engineering education definitely helped founder <span>'Mr. Kaushik Dhutekar'</span> 'throughout this process. <br /><br /> After successfully lifting the lockdown, the company is thriving in Central part of Maharashtra. It also has plans to grow beyond Maharashtra with the goal of supplying batteries pan India.</div>
    </div>
    </>
  )
}

export default AboutPageHero