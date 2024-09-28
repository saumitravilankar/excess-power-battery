import ProductPageHeroSection from '@components/ProductPageHeroSection'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'

export const metadata = {
  title: 'EPB | Truck Batteries',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const HeavyTruckPage = () => {
  return (
    <div>
      <ProductPageTitle title={'Truck Batteries'} src={'/assets/images/product-titles-images/trucks.jpg'} />
      <ProductPageHeroSection text={'Unleash the beast within your Truck with our automotive batteries, the epitome of strength and endurance. Engineered to conquer any terrain, these best truck batteries deliver relentless power & unwavering reliability.'} 
        data={[
          {type: "Automative", model: "EP-1500", warranty: 24, src: "/assets/images/battery/EP-1500-24.jpg"},
          {type: "Automative", model: "EP-1500", warranty: 36, src: "/assets/images/battery/EP-1500-36.jpg"},
        ]}
      />
    </div>
  )
}

export default HeavyTruckPage