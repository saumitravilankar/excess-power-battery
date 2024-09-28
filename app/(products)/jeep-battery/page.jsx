import ProductPageHeroSection from '@components/ProductPageHeroSection'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'

export const metadata = {
  title: 'EPB | Jeep Batteries',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const JeepBatteryPage = () => {
  return (
    <div>
      <ProductPageTitle title={'Jeep Batteries'} src={'/assets/images/product-titles-images/jeep.jpg'} />
      <ProductPageHeroSection text={"Discover a diverse selection of top-notch automotive batteries for your Jeep. Choose the best jeep battery for superior automotive performance and peace of mind on the road."} 
        data={[
          {type: "Automative", model: "EP-800", warranty: 24, src: "/assets/images/battery/EP-800-24.jpg"},
          {type: "Automative", model: "EP-800", warranty: 36, src: "/assets/images/battery/EP-800-36.jpg"},
        ]}
      />
    </div>
  )
}

export default JeepBatteryPage