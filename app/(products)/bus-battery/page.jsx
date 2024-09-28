import ProductPageHeroSection from '@components/ProductPageHeroSection'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'

export const metadata = {
  title: 'EPB | Bus Batteries',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const BusBatteryPage = () => {
  return (
    <div>
      <ProductPageTitle title={'Bus Batteries'} src={'/assets/images/product-titles-images/bus.jpg'} />
      <ProductPageHeroSection text={"Take your bus performance to the next level with our automotive batteries. Designed for optimal power output and extended lifespan, our best bus batteries are the ultimate choice for bus owners."} 
        data={[
          {type: "Automative", model: "EP-1500", warranty: 24, src: "/assets/images/battery/EP-1500-24.jpg"},
          {type: "Automative", model: "EP-1500", warranty: 36, src: "/assets/images/battery/EP-1500-36.jpg"},
        ]}
      />
    </div>
  )
}

export default BusBatteryPage