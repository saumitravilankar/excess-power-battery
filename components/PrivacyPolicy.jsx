import { Outfit } from 'next/font/google'

const outfit = Outfit({
    weight: "500",
    subsets: ["latin"]
})

import style from '@styles/PrivacyPolicy.module.scss'

const PrivacyPolicy = () => {
  return (
    <div className={style.container}>
        <h1 className={`${style.title} ${outfit.className}`}>Privacy Policy</h1>
        <p className={style.info}>Thank you for visiting the Excess Power Batteries website. Visitors are guaranteed privacy and any information collected is kept private and never shared with other organizations. It is used only by the Company to administer your request, if any.</p>
        <p className={style.info}>All rights are reserved by Excess Power Batteries. The content, code and applications contained on this website, under the domain <span>www.excesspowerbatteries.com</span> are copyright protected. Site visitors may not reproduce, copy, or redistribute content or code in any form without written permission from Excess Power Batteries.</p>
        <p className={style.info}>As every machine needs a power source, every person needs an earning source. As mentioned previously, we have begun to respond to client demands and create employment opportunities.</p>
    </div>
  )
}

export default PrivacyPolicy