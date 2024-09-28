import BatteryPageHero from '@components/BatteryPageHero'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'

export const metadata = {
  title: 'EPB | EP-1000',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const page = () => {
  return (
    <>
    <ProductPageTitle title={'EP-1000'} src={'/assets/images/battery/inverterfamily.jpg'} />
    <BatteryPageHero src={'/assets/images/battery/EP-1000-24.jpg'} type={'Automative'} model={'EP 1000'} rating={'100 AH'} dimensions={'Length: 41.5 Width: 17.5 Height: 23.5'} weight={'26'} warranty={'24 (12*+12)'} applications={'Used specially for tractors'} />
    </>
  )
}

export default page