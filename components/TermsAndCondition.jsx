import { Outfit } from 'next/font/google'

const outfit = Outfit({
    weight: "500",
    subsets: ["latin"]
})

import style from '@styles/TermsAndCondition.module.scss'

const TermsAndCondition = () => {
  return (
    <div className={style.container}>
        <h1 className={`${style.title} ${outfit.className}`}> <span>Terms and Conditions</span>  of Website Use</h1>
        <p className={style.info}>All rights, title and information in this website, including, but not limited to all of the software and code that operate this website, and all of the logos, creative content, graphics, audio, video-clips, artwork, text, images and other contents provided through this website are owned by legal structure of Excess power Batteries.</p>
        <p className={style.info}>By using this website, you acknowledge and agree that all of the content contained on this website is owned by legal entities of Excess Power Batteries, and you shall not sell, distribute or modify the content of this website or reproduce, display, publicly perform, distribute, or otherwise use the contents in any way for any public or commercial purpose without the prior written approval of legal structure of Excess Power Batteries.</p>
    </div>
  )
}

export default TermsAndCondition