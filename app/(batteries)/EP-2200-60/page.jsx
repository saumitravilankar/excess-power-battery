import BatteryPageHero from '@components/BatteryPageHero'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'

export const metadata = {
  title: 'EPB | EP-2200',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}


const page = () => {
  return (
    <>
    <ProductPageTitle title={'EP-2200'} src={'/assets/images/battery/inverterfamily.jpg'} />
    <BatteryPageHero src={'/assets/images/battery/EP-2200-60.jpg'} type={'Automative'} model={'EP 2200'} rating={'220 AH'} dimensions={'Length: 50.5 Width: 18.5 Height: 39'} weight={'67'} warranty={'60(30*+30)'} applications={'Used for Home Inverter, UPS and solar purposes for power backups.'} />
    </>
  )
}

export default page