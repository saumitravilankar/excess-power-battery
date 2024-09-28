import BatteryPageHero from '@components/BatteryPageHero'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'


export const metadata = {
  title: 'EPB | EP-650',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const page = () => {
  return (
    <>
    <ProductPageTitle title={'EP-650'} src={'/assets/images/battery/inverterfamily.jpg'} />
    <BatteryPageHero src={'/assets/images/battery/EP-650-36.jpg'} type={'Automative'} model={'EP 650'} rating={'65 Ah'} dimensions={'Length: 26.5 Width: 17.5 Height: 22'} weight={'17.75'} warranty={'36(18*+18)'} applications={'Used for Auto rickshaw, Ape rickshaw, cars, transport vehicles like Tata Ace etc'} />
    </>
  )
}

export default page