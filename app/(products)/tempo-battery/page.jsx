import ProductPageHeroSection from '@components/ProductPageHeroSection'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'

export const metadata = {
  title: 'EPB | Tempo Batteries',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const TempoBatteryPage = () => {
  return (
    <div>
      <ProductPageTitle title={'Tempo Batteries'} src={'/assets/images/product-titles-images/tempo.jpg'} />
      <ProductPageHeroSection text={"Experience the difference with our best tempo batteries, providing optimal energy storage and reliable performance for your automotive needs."} 
        data={[
          {type: "Automative", model: "EP-800", warranty: 24, src: "/assets/images/battery/EP-800-24.jpg"},
          {type: "Automative", model: "EP-800", warranty: 36, src: "/assets/images/battery/EP-800-36.jpg"},
        ]}
      />
    </div>
  )
}

export default TempoBatteryPage