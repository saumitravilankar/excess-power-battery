import FAQ from '@components/FAQ'
import ProductPageTitle from '@components/ProductPageTitle'
import React from 'react'

export const metadata = {
  title: 'EPB | FAQ ',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const FAQs = () => {
  return (
    <div>
      <ProductPageTitle title={'FAQ'} src={'/assets/images/faq/faq.jpg'} />
      <FAQ />
    </div>
  )
}

export default FAQs