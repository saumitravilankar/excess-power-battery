import BatteryPageHero from '@components/BatteryPageHero'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'


export const metadata = {
  title: 'EPB | EP-800',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const page = () => {
  return (
    <>
    <ProductPageTitle title={'EP 800'} src={'/assets/images/battery/inverterfamily.jpg'} />
    <BatteryPageHero src={'/assets/images/battery/EP-800-24.jpg'} type={'Automative'} model={'EP 800'} rating={'80 AH'} dimensions={'Length: 31.5 Width: 17.5 Height: 22'} weight={'19'} warranty={'24 (12*+12)'} applications={"Used for Auto SUV's tempo, mini tractor, jeep etc."} />
    </>
  )
}

export default page