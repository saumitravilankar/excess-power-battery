import ProductPageHeroSection from '@components/ProductPageHeroSection'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'

export const metadata = {
  title: 'EPB | Car Batteries',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const page = () => {
  return (
    <div>
        <ProductPageTitle title={'Car Batteries'} src={'/assets/images/product-titles-images/car.png'} />
        <ProductPageHeroSection text={'Upgrade your car battery with our automotive batteries, delivering reliable power for optimal performance and smooth operation. Trust our quality car battery solutions for a hassle-free driving experience.'} 
        data={[
          {type: "Automative", model: "EP-650", warranty: 24, src: "/assets/images/battery/EP-650-24.jpg"},
          {type: "Automative", model: "EP-650", warranty: 36, src: "/assets/images/battery/EP-650-36.jpg"},
        ]}
        />
    </div>
  )
}

export default page