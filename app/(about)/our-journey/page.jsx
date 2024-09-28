import AboutPageHero from '@components/AboutPageHero'
import Count from '@components/Count'
import Goal from '@components/Goal'
import React from 'react'

export const metadata = {
  title: 'EPB | Our Journey',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const OurJourneyPage = () => {
  return (
    <div className=''>
        <AboutPageHero />
        <Goal />
        <Count />
    </div>
  )
}

export default OurJourneyPage