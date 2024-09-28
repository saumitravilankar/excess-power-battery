import EventHero from '@components/EventHero'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'

export const metadata = {
  title: 'EPB | Our Events',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}


const Events = () => {
  return (
    <div>
      <ProductPageTitle title={'EVENTS'} src={'/assets/images/event/event.jpg'} />
      <EventHero />
    </div>
  )
}

export default Events