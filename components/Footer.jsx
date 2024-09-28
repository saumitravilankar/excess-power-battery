import Image from 'next/image'
import Link from 'next/link'
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'
import {AiFillFacebook} from 'react-icons/ai'
import {FaWhatsapp, FaInstagram} from 'react-icons/fa'

import style from '@styles/Footer.module.scss'

const Footer = () => {
  return (
    <div className={style.footerbox}>
        <div className={style.container}>
            <div className={style.col}>
                <h1 className={style.footerTitle}>About EPB</h1>
                <ul>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/our-journey'}>Our Journey</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/manufacturing'}>Manufacturing</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/BBB-policy'}>BBB Policy</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/battery-safety-guidelines'}>Battery Safety Guidelines</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/faq'}>FAQs</Link>
                    </li>
                </ul>
            </div>
            <div className={style.col}>
                <h1 className={style.footerTitle}>Products</h1>
                <ul>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/auto-battery'}>Auto Battery</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/car-batteries'}>Cars Battery</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/suv-battery'}>SUV's Battery</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/tempo-battery'}>Tempo Battery</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/tractors-battery'}>Tractors Battery</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/jeep-battery'}>Jeep Battery</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/heavy-truck-battery'}>Heavy Trucks Battery </Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/bus-battery'}>Bus Battery</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/inverter-battery'}>Inverter Battery</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/battery-water'}>Battery Water</Link>
                    </li>
                </ul>
            </div>
            <div className={style.col}>
                <h1 className={style.footerTitle}>EPB Experience</h1>
                <ul>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/epb-logo'}>EPB Logo</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/events'}>Events</Link>
                    </li>
                </ul>
            </div>
            <div className={style.col}>
                <h1 className={style.footerTitle}>Other</h1>
                <ul>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/contact-us'}>Contact Us</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/terms-&-conditions'}>Terms & Conditions</Link>
                    </li>
                    <li>
                        <MdOutlineKeyboardDoubleArrowRight />
                        <Link href={'/privacy-policy'}>Privacy Policy</Link>
                    </li>
                </ul>
            </div>
            <div className={style.col}>
                <h1 className={style.footerTitle}>Quick Contact</h1>
                <ul>
                    <li>
                        <span style={{
                            color: "gray",
                            fontSize: "12px"
                        }}>
                        Excess Power Batteries ,
                        c/o Sarda Moulding Industries ,
                        Plot no.5 ,MIDC area ,
                        Beed -431122 Maharashtra.
                        </span>
                    </li>
                    <li>
                        <span style={{
                            color: "gray",
                            fontSize: "12px"
                        }}>
                        If you have any questions or need help, feel free to contact with our team.
                        </span>
                    </li>
                    <li>
                        <Link href="tel: +917030555255">+(91) 7030555255</Link>
                    </li>
                    <li>
                        <Link href="tel: +917030555855">+(91) 7030555855</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className={style.footer}>
            <div className={style.copyright}>
            Copyright © 2022 Excess Power Batteries, All Rights Reserved.
            </div>
            <div className={style.logo}>
                <Image src='/assets/images/navbar/excess.png'
                width={64}
                height={64}
                alt='excess power battery' />
            </div>
            <div className={style.social}>
                <Link href="https://www.facebook.com/excesspowerbatteries/">
                    <AiFillFacebook />
                </Link>
                <Link href="https://wa.me/917030555855">
                    <FaWhatsapp />
                </Link>
                <Link href="https://www.instagram.com/excess_power_batteries/">
                    <FaInstagram />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer 