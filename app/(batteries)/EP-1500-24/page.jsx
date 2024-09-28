import BatteryPageHero from '@components/BatteryPageHero'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'

export const metadata = {
  title: 'EPB | EP-1500',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const page = () => {
  return (
    <>
    <ProductPageTitle title={'EP-1500'} src={'/assets/images/battery/inverterfamily.jpg'} />
    <BatteryPageHero src={'/assets/images/battery/EP-1500-24.jpg'} type={'Automative'} model={'EP 1500'} rating={'150 AH'} dimensions={'Length: 52 Width: 21.5 Height: 24'} weight={'38'} warranty={'24 (12*+12)'} applications={'Used in heavy trucks, containers and Bus.'} />
    </>
  )
}

export default page