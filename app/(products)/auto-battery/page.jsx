import ProductPageHeroSection from '@components/ProductPageHeroSection'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'

export const metadata = {
  title: 'EPB | Auto Rickshaw Batteries',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}


const AutoBatteryPage = () => {
  return (
    <div>
      <ProductPageTitle title={'Auto Rickshaw Batteries'} src={'/assets/images/product-titles-images/auto.jpg'} />
      <ProductPageHeroSection text={"Choose our premium rickshaw batteries for your autorickshaw's power needs. Designed for automotive applications, these efficient automotive batteries provide consistent performance, allowing for smoother rides and increased productivity."} 
        data={[
          {type: "Automative", model: "EP-650", warranty: 24, src: "/assets/images/battery/EP-650-24.jpg"},
          {type: "Automative", model: "EP-650", warranty: 36, src: "/assets/images/battery/EP-650-36.jpg"},
        ]} 
      />
    </div>
  )
}

export default AutoBatteryPage