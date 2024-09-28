"use client"

import Image from 'next/image'
import Link from 'next/link'
import {AiFillFacebook, AiFillCaretDown} from 'react-icons/ai'
import {FaWhatsapp, FaInstagram} from 'react-icons/fa'
import {BiTime} from 'react-icons/bi'
import {IoLocationOutline} from 'react-icons/io5'
import { Outfit } from 'next/font/google'
import {GiHamburgerMenu} from 'react-icons/gi'

const outfit = Outfit({
    weight: "400",
    subsets: ["latin"]
})

import { useState } from 'react'
import { motion } from 'framer-motion'

import style from '@styles/NavbarTwo.module.scss'

const NavbarTwo = () => {

    const [about, setAbout] = useState(false)
    const [product, setProduct] = useState(false)
    const [experience, setExperience] = useState(false)

    const [show, setShow] = useState(false)
    const [aboutMob, setAboutMob] = useState(false)
    const [productMob, setProductMob] = useState(false)
    const [experienceMob, setExperienceMob] = useState(false)



  return (
    <>
    <section className={style.navbar}>
        <div className={style.headerTop}>
            <div className={style.time}>
                <BiTime />
                <p>Mon - Sat 9.00 A.M. - 6.00 P.M</p>
            </div>
            <div className={style.location}>
                <IoLocationOutline />
                <p>Beed, Maharashtra - 431122</p>
            </div>
        </div>
        <div className={style.header}>
            <div className={style.headerItem}>
                    <Image src="/assets/images/navbar/excess.png" 
                    width="150" height="100"
                    alt='excess power battery logo'/>
            </div>
            <div className={style.headerItem}>
                <div className={style.icon}>
                    <Image src="/assets/images/navbar/24-hours-phone-service.png" 
                    width="60" height="60"
                    alt='excess power battery logo'/>
                </div>
                <a href='tel:+917030555255' className={style.data}>
                    <h5>Please Make a call</h5>
                    <p>(+91)7030555255</p>
                </a>
            </div>
            <div className={style.headerItem}>
                <div className={style.icon}>
                    <Image src="/assets/images/navbar/email.png" 
                    width="60" height="60"
                    alt='excess power battery logo'/>
                </div>
                <a href={'contact-us/'} className={style.data}>
                    <h5>E-mail Address</h5>
                    <p>excesspowerbatteries@gmail.com</p>
                </a>
            </div>
            <div className={style.headerItem}>
                <div className={style.icon}>
                    <Image src="/assets/images/navbar/location.png" 
                    width="60" height="60"
                    alt='excess power battery logo'/>
                </div>
                <a href={'contact-us/'} className={style.data}>
                    <h5>Our Office Address</h5>
                    <p>Beed, Maharashtra - 431122</p>
                </a>
            </div>
        </div>
        <div className={style.navlinks}>
            <nav>
                <ul className={style.navItems}>
                    <li className={style.navItem}>
                        <Link className={outfit.className} href='/'>Home</Link>
                    </li>
                    <li 
                    onMouseEnter={()=>{setAbout(true), setProduct(false); setExperience(false)}}
                    className={style.navItem}>
                        <Link style={{display: "flex", alignItems: "center", gap: "5px"}} className={outfit.className} href='#'>About <AiFillCaretDown /></Link>
                    </li>
                    <li 
                    onMouseEnter={()=>{setProduct(true); setAbout(false); setExperience(false)}}
                    className={style.navItem}>
                        <Link style={{display: "flex", alignItems: "center", gap: "5px"}} className={outfit.className} href='#'>products <AiFillCaretDown /></Link>
                    </li>
                    <li 
                    onMouseEnter={()=>{setProduct(false); setAbout(false); setExperience(true)}}
                    className={style.navItem}>
                        <Link style={{display: "flex", alignItems: "center", gap: "5px"}} className={outfit.className} href='#'>Epb experience <AiFillCaretDown /></Link>
                    </li>
                    <li className={style.navItem}>
                        <Link className={outfit.className} href='/contact-us'>contact us</Link>
                    </li>
                    <li className={style.navItem}>
                        <Link className={outfit.className} href='/buy-now'>buy now</Link>
                    </li>
                </ul>
                {about &&
                <motion.ul
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, type: "tween"}}
                    onMouseLeave={()=>{setAbout(false)}}
                    className={style.aboutSubMenu}>
                    <li className={style.aboutSubMenuItem}>
                        <Link className={outfit.className} href={'/our-journey'}>Our Journey</Link>
                    </li>
                    <li className={style.aboutSubMenuItem}>
                        <Link className={outfit.className} href={'/manufacturing'}>Manufacturing</Link>
                    </li>
                    <li className={style.aboutSubMenuItem}>
                        <Link className={outfit.className} href={'/BBB-policy'}>BBB Policy</Link>
                    </li>
                    <li className={style.aboutSubMenuItem}>
                        <Link className={outfit.className} href={'/battery-safety-guidelines'}>Battery Safety Guidelines</Link>
                    </li>
                    <li className={style.aboutSubMenuItem}>
                        <Link className={outfit.className} href={'/faq'}>FAQs</Link>
                    </li>
                </motion.ul>}
                {product && 
                <motion.ul
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.5, type: "tween"}} 
                onMouseLeave={()=>{setProduct(false)}}
                className={style.productSubMenu}>
                    <li className={style.productSubMenuItem}>
                        <Link className={outfit.className} href={'/auto-battery'}>Auto Rickshaw Battery</Link>
                    </li>
                    <li className={style.productSubMenuItem}>
                        <Link className={outfit.className} href={'/car-batteries'}>Car Battery</Link>
                    </li>
                    <li className={style.productSubMenuItem}>
                        <Link className={outfit.className} href={'/suv-battery'}>SUV's Battery</Link>
                    </li>
                    <li className={style.productSubMenuItem}>
                        <Link className={outfit.className} href={'/tempo-battery'}>Tempo Battery</Link>
                    </li>
                    <li className={style.productSubMenuItem}>
                        <Link className={outfit.className} href={'/tractors-battery'}>Tractors Battery</Link>
                    </li>
                    <li className={style.productSubMenuItem}>
                        <Link className={outfit.className} href={'/jeep-battery'}>Jeep Battery</Link>
                    </li>
                    <li className={style.productSubMenuItem}>
                        <Link className={outfit.className} href={'/heavy-truck-battery'}>Heavy Truck Battery</Link>
                    </li>
                    <li className={style.productSubMenuItem}>
                        <Link className={outfit.className} href={'/bus-battery'}>Bus Battery</Link>
                    </li>
                    <li className={style.productSubMenuItem}>
                        <Link className={outfit.className} href={'/inverter-battery'}>Inverter Battery</Link>
                    </li>
                    <li className={style.productSubMenuItem}>
                        <Link className={outfit.className} href={'/battery-water'}>Battery Water</Link>
                    </li>
                </motion.ul>}
                {experience && 
                <motion.ul
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.5, type: "tween"}} 
                onMouseLeave={()=>{setExperience(false)}}
                className={style.experienceSubMenu}>
                    <li className={style.experienceSubMenuItem}>
                        <Link className={outfit.className} href={'/epb-logo'}>EPB Logo</Link>
                    </li>
                    <li className={style.experienceSubMenuItem}>
                        <Link className={outfit.className} href={'/events'}>events</Link>
                    </li>
                </motion.ul>}
            </nav>
            <div className={style.social}>
                <Link target='_blank' href={'https://www.facebook.com/excesspowerbatteries/'} className={`${style.socialIcon} ${style.facebook}`}>
                    <AiFillFacebook />
                </Link>
                <Link target='_blank' href={'https://wa.me/917030555855'} className={`${style.socialIcon} ${style.whatsapp}`}>
                    <FaWhatsapp />
                </Link>
                <Link target='_blank' href={'https://www.instagram.com/excess_power_batteries/'} className={`${style.socialIcon} ${style.insta}`}>
                    <FaInstagram />
                </Link>
            </div>
        </div>
    </section>
    <section className={style.mobNavbar}>
        <div style={{borderBottom: "1px solid #bbb"}}>
        <motion.div 
        animate={{x: ["-90vw","90vw"]}}
        transition={{duration: 8, damping: 1, ease: "linear", repeat: Infinity, repeatType: "loop" }}
        className={style.mobHeaderTop}>
            <div className={style.time}>
                <BiTime />
                <p>Mon - Sat 9.00 A.M. - 6.00 P.M</p>
            </div>
            <div className={style.location}>
                <IoLocationOutline />
                <p>Beed, Maharashtra - 431122</p>
            </div>
        </motion.div>
        </div>
        <div className={style.mobHeader}>
            <div className={style.mobHeaderItem}>
                <Link href={'/'}>
                    <Image src="/assets/images/navbar/excess.png" 
                    width="150" height="100"
                    alt='excess power battery logo'/>
                </Link>
            </div>
            <div className={style.mobNavBurger}>
                <GiHamburgerMenu onClick={()=>setShow(!show)} />
            </div>
        </div>
    </section>
    {show && <ul 
    className={style.mobNavItems}>
        <li className={style.mobNavItem}>
            <Link onClick={()=>setShow(false)} className={outfit.className} href='/'>Home</Link>
        </li>
        <li 
        onClick={()=>{setAboutMob(!aboutMob)}}
        className={style.mobNavItem}>
            <p style={{display: "flex", alignItems: "center", gap: "5px"}} className={outfit.className}>About <AiFillCaretDown /></p>
        </li>
        {aboutMob && <motion.ul 
        initial={{scaleY: 0}}
        animate={{scaleY: "100%"}}
        transition={{ease: "linear", type: "tween"}}
        style={{transformOrigin: "top left"}}
        className={style.mobAboutSubMenu}>
            <li className={style.mobAboutSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/our-journey'}>Our Journey</Link>
            </li>
            <li className={style.mobAboutSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/manufacturing'}>Manufacturing</Link>
            </li>
            <li className={style.mobAboutSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/BBB-policy'}>BBB Policy</Link>
            </li>
            <li className={style.mobAboutSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/battery-safety-guidelines'}>Battery Safety Guidelines</Link>
            </li>
            <li className={style.mobAboutSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/faq'}>FAQs</Link>
            </li>
        </motion.ul>}
        <li 
        onClick={()=>{setProductMob(!productMob)}}
        className={style.mobNavItem}>
            <p style={{display: "flex", alignItems: "center", gap: "5px"}} className={outfit.className}>products <AiFillCaretDown /></p>
        </li>
        {productMob && <motion.ul 
        initial={{scaleY: 0}}
        animate={{scaleY: "100%"}}
        transition={{ease: "linear", type: "tween"}}
        style={{transformOrigin: "top left"}}
        className={style.mobProductSubMenu}>
            <li className={style.mobProductSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/auto-battery'}>Auto Rickshaw Battery</Link>
            </li>
            <li className={style.mobProductSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/car-batteries'}>Car Battery</Link>
            </li>
            <li className={style.mobProductSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/suv-battery'}>SUV's Battery</Link>
            </li>
            <li className={style.mobProductSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/tempo-battery'}>Tempo Battery</Link>
            </li>
            <li className={style.mobProductSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/tractors-battery'}>Tractors Battery</Link>
            </li>
            <li className={style.mobProductSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/jeep-battery'}>Jeep Battery</Link>
            </li>
            <li className={style.mobProductSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/heavy-truck-battery'}>Heavy Truck Battery</Link>
            </li>
            <li className={style.mobProductSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/bus-battery'}>Bus Battery</Link>
            </li>
            <li className={style.mobProductSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/inverter-battery'}>Inverter Battery</Link>
            </li>
            <li className={style.mobProductSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/battery-water'}>Battery Water</Link>
            </li>
        </motion.ul>}
        <li 
        onClick={()=>{setExperienceMob(!experienceMob)}}
        className={style.mobNavItem}>
            <p style={{display: "flex", alignItems: "center", gap: "5px"}} className={outfit.className}>Epb experience <AiFillCaretDown /></p>
        </li>
        {experienceMob && <motion.ul 
        initial={{scaleY: 0}}
        animate={{scaleY: "100%"}}
        transition={{ease: "linear", type: "tween"}}
        style={{transformOrigin: "top left"}}
        className={style.mobExperienceSubMenu}>
            <li className={style.mobExperienceSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/epb-logo'}>EPB Logo</Link>
            </li>
            <li className={style.mobExperienceSubMenuItem}>
                <Link onClick={()=>setShow(false)} className={outfit.className} href={'/events'}>events</Link>
            </li>
        </motion.ul>}
        <li className={style.mobNavItem}>
            <Link onClick={()=>setShow(false)} className={outfit.className} href='/contact-us'>contact us</Link>
        </li>
        <li className={style.mobNavItem}>
            <Link onClick={()=>setShow(false)} className={outfit.className} href='/buy-now'>buy now</Link>
        </li>
        <div className={style.mobSocial}>
            <Link target='_blank' href={'https://www.facebook.com/excesspowerbatteries/'} className={`${style.mobSocialIcon} ${style.mobFacebook}`}>
                <AiFillFacebook />
            </Link>
            <Link target='_blank' href={'https://wa.me/917030555855'} className={`${style.mobSocialIcon} ${style.mobWhatsapp}`}>
                <FaWhatsapp />
            </Link>
            <Link target='_blank' href={'https://www.instagram.com/excess_power_batteries/'} className={`${style.mobSocialIcon} ${style.mobInsta}`}>
                <FaInstagram />
            </Link>
        </div>
        <div className={style.mobheaderItem}>
            <div className={style.icon}>
                <Image src="/assets/images/navbar/24-hours-phone-service.png" 
                width="60" height="60"
                alt='excess power battery logo'/>
            </div>
            <a href='tel:+917030555255' className={style.data}>
                <h5>Please Make a call</h5>
                <p>(+91)7030555255</p>
            </a>
        </div>
        <div className={style.mobheaderItem}>
            <div className={style.icon}>
                <Image src="/assets/images/navbar/email.png" 
                width="60" height="60"
                alt='excess power battery logo'/>
            </div>
            <a href={'contact-us/'} className={style.data}>
                <h5>E-mail Address</h5>
                <p>excesspowerbatteries@gmail.com</p>
            </a>
        </div>
        <div className={style.mobheaderItem}>
            <div className={style.icon}>
                <Image src="/assets/images/navbar/location.png" 
                width="60" height="60"
                alt='excess power battery logo'/>
            </div>
            <a href={'contact-us/'} className={style.data}>
                <h5>Our Office Address</h5>
                <p>Beed, Maharashtra - 431122</p>
            </a>
        </div>
    </ul>}
    </>
  )
}

export default NavbarTwo