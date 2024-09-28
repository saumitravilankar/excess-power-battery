import ProductPageHeroSection from '@components/ProductPageHeroSection'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'

export const metadata = {
  title: 'EPB | Inverter Batteries',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const InverterBatteryPage = () => {
  return (
    <div>
      <ProductPageTitle title={'Inverter Battery'} src={'/assets/images/product-titles-images/city_lights.jpg'} />
      <ProductPageHeroSection text={'Trust our specialized inverter batteries to deliver consistent and reliable power, keeping your devices running smoothly during outages. As for your inverter battery price concerns, we offer budget-friendly options for you!'} 
        data={[
          {type: "Automative", model: "EP-2000", warranty: 48, src: "/assets/images/battery/EP-2000-48.jpg"},
          {type: "Automative", model: "EP-2200", warranty: 60, src: "/assets/images/battery/EP-2200-60.jpg"},
          {type: "Automative", model: "EP-1500", warranty: 48, src: "/assets/images/battery/EP-1500-48.jpg"},
          {type: "Automative", model: "IT-1650", warranty: 60, src: "/assets/images/battery/IT-1650-60.jpg"},
        ]}
      />
    </div>
  )
}

export default InverterBatteryPage