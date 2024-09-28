import BatterySafety from '@components/BatterySafety'
import React from 'react'

export const metadata = {
  title: 'EPB | Battery Safety Guidelines',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const BatterySafetyGuideLines = () => {
  return (
    <div>
      <BatterySafety />
    </div>
  )
}

export default BatterySafetyGuideLines