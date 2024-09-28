import ProductPageHeroSection from '@components/ProductPageHeroSection'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'

export const metadata = {
  title: 'EPB | Tractor Batteries',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const TractorBatteryPage = () => {
  return (
    <div>
        <ProductPageTitle title={'Tractor Batteries'} src={'/assets/images/product-titles-images/mini-tractor.jpg'} />
        <ProductPageHeroSection text={"Power up your mini tractors & tractors with our ultimate automotive batteries. Our top-rated tractor battery delivers unmatched performance, reliability, and longevity. Choose the best and conquer every farming task with ease."} 
        data={[
          {type: "Automative", model: "EP-1000", warranty: 24, src: "/assets/images/battery/EP-1000-24.jpg"},
          {type: "Automative", model: "EP-1000", warranty: 36, src: "/assets/images/battery/EP-1000-36.jpg"},
        ]}
        />
    </div>
  )
}

export default TractorBatteryPage