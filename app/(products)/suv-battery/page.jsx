import ProductPageHeroSection from '@components/ProductPageHeroSection'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'

export const metadata = {
  title: 'EPB | SUV Batteries',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const SuvBatteryPage = () => {
  return (
    <div>
      <ProductPageTitle title={'SUV Batteries'} src={'/assets/images/product-titles-images/suv.jpg'} />
      <ProductPageHeroSection text={"Maximize your SUV's potential with our high-quality car batteries. Designed for automotive excellence, our batteries deliver superior starting power and prolonged battery life, perfect for your vehicle."} 
        data={[
          {type: "Automative", model: "EP-800", warranty: 24, src: "/assets/images/battery/EP-800-24.jpg"},
          {type: "Automative", model: "EP-800", warranty: 36, src: "/assets/images/battery/EP-800-36.jpg"},
        ]}
      />
    </div>
  )
}

export default SuvBatteryPage  