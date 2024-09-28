import Image from 'next/image'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  weight: "500",
  subsets: ["latin"]
})

import style from '@styles/ContactImage.module.scss'

const ContactImage = () => {
  return (
    <div className={style.container}>
        <Image width={1440} height={700} src='/assets/images/contact/contact.png' alt='excess power contact' />
        <div className={style.info}>
            <h1 className={`${style.title} ${outfit.className}`}>GET IN TOUCH</h1>
            <h3 className={`${style.taglineOne} ${outfit.className}`}>We’d Love To Help You Send Us A Message</h3>
            <h3 className={`${style.taglineTwo} ${outfit.className}`}>Just send us your questions or concerns to starting a new project.</h3>
        </div>
    </div>
  )
}

export default ContactImage