import ContactForm from '@components/ContactForm'
import ContactImage from '@components/ContactImage'
import Map from '@components/Map'
import React from 'react'

export const metadata = {
  title: 'EPB | Contact Us',
  description: "'Excess Power Batteries' is a growing industrial company dedicated to meeting customer needs in the automotive, inverter and solar lead acid battery sectors at affordable prices.",
}

const ContactUs = () => {
  return (
    <div>
        <ContactImage />
        <ContactForm />
        <Map />
    </div>
  )
}

export default ContactUs