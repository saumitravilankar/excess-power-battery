"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Outfit } from 'next/font/google'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {AiFillCaretDown} from 'react-icons/ai'
import { useRouter } from 'next/router'

const outfit = Outfit({
    weight: "400",
    subsets: ["latin"]
})

import '@styles/Navbar.scss'

const Navbar = () => {

    const [about, setAbout] = useState(false)
    const [product, setProduct] = useState(false)
    const [experience, setExperience] = useState(false)
    // const [show, setShow] = useState(false)

    // window.addEventListener('scroll',()=>{
    //     if(window.scrollY > 100){
    //         setShow(true)
    //         setAbout(false)
    //         setExperience(false)
    //         setProduct(false)
    //     } else {
    //         setShow(false)
    //     }
    // })

  return (
    <section className='navbarOne'>
        <div className="header">
            <div className="header-item">
                <Image src="/assets/images/navbar/excess.png" 
                width="150" height="100"
                alt='excess power battery logo'/>
            </div>
            <div className="header-item">
                <div className="icon">
                    <Image src="/assets/images/navbar/24-hours-phone-service.png" 
                    width="64" height="64"
                    alt='excess power battery logo'/>
                </div>
                <a href='tel:+917030555255' className="data">
                    <h5>Please Make a call</h5>
                    <p>(+91)7030555255</p>
                </a>
            </div>
            <div className="header-item">
                <div className="icon">
                    <Image src="/assets/images/navbar/email.png" 
                    width="64" height="64"
                    alt='excess power battery logo'/>
                </div>
                <a href='tel:+917030555255' className="data">
                    <h5>Please Make a call</h5>
                    <p>(+91)7030555255</p>
                </a>
            </div>
            <div className="header-item">
                <div className="icon">
                    <Image src="/assets/images/navbar/location.png" 
                    width="64" height="64"
                    alt='excess power battery logo'/>
                </div>
                <a href='tel:+917030555255' className="data">
                    <h5>Please Make a call</h5>
                    <p>(+91)7030555255</p>
                </a>
            </div>
        </div>
        <nav>
            <ul className='nav-items'>
                <li className='nav-item'>
                    <Link className={outfit.className} href='/'>Home</Link>
                </li>
                <li 
                onMouseEnter={()=>{setAbout(true), setProduct(false); setExperience(false)}}
                className='nav-item'>
                    <Link style={{display: "flex", alignItems: "center", gap: "5px"}} className={outfit.className} href='#'>About <AiFillCaretDown /></Link>
                </li>
                <li 
                onMouseEnter={()=>{setProduct(true); setAbout(false); setExperience(false)}}
                className='nav-item'>
                    <Link style={{display: "flex", alignItems: "center", gap: "5px"}} className={outfit.className} href='#'>products <AiFillCaretDown /></Link>
                </li>
                <li 
                onMouseEnter={()=>{setProduct(false); setAbout(false); setExperience(true)}}
                className='nav-item'>
                    <Link style={{display: "flex", alignItems: "center", gap: "5px"}} className={outfit.className} href='#'>Epb experience <AiFillCaretDown /></Link>
                </li>
                <li className='nav-item'>
                    <Link className={outfit.className} href='/contact-us'>contact us</Link>
                </li>
                <li className='nav-item'>
                    <Link className={outfit.className} href={'/buy-now'}>buy now</Link>
                </li>
            </ul>
            {about &&
            <motion.ul
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.5, type: "tween"}}
                onMouseLeave={()=>{setAbout(false)}}
                className='aboutSubMenu'>
                <li className='aboutSubMenu-item'>
                    <Link className={outfit.className} href={'/our-journey'}>Our Journey</Link>
                </li>
                <li className='aboutSubMenu-item'>
                    <Link className={outfit.className} href={'/manufacturing'}>Manufacturing</Link>
                </li>
                <li className='aboutSubMenu-item'>
                    <Link className={outfit.className} href={'/BBB-policy'}>BBB Policy</Link>
                </li>
                <li className='aboutSubMenu-item'>
                    <Link className={outfit.className} href={'/battery-safety-guidelines'}>Battery Safety Guidelines</Link>
                </li>
                <li className='aboutSubMenu-item'>
                    <Link className={outfit.className} href={'/faq'}>FAQs</Link>
                </li>
            </motion.ul>}
            {product && 
            <motion.ul
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, type: "tween"}} 
            onMouseLeave={()=>{setProduct(false)}}
            className='productSubMenu'>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/auto-battery'}>Auto Rickshaw Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/car-batteries'}>Car Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/suv-battery'}>SUV's Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/tempo-battery'}>Tempo Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/tractors-battery'}>Tractors Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/jeep-battery'}>Jeep Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/heavy-truck-battery'}>Heavy Truck Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/bus-battery'}>Bus Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/inverter-battery'}>Inverter Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/battery-water'}>Battery Water</Link>
                </li>
            </motion.ul>}
            {experience && 
            <motion.ul
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, type: "tween"}} 
            onMouseLeave={()=>{setExperience(false)}}
            className='experienceSubMenu'>
                <li className='experienceSubMenu-item'>
                    <Link className={outfit.className} href={'/epb-logo'}>EPB Logo</Link>
                </li>
                <li className='experienceSubMenu-item'>
                    <Link className={outfit.className} href={'/events'}>events</Link>
                </li>
            </motion.ul>}
        </nav>
        {/* {show && 
        <nav className='navbarOnScroll'>
            <ul className='nav-items'>
                <motion.li 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 0.5, ease: "easeOut"}}
                className='nav-item'>
                    <Image src="/assets/images/navbar/excess.png" width="132" height="132" alt='excess power battery logo'/>
                </motion.li>
                <motion.li 
                initial={{x: -200, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.5, ease: "easeOut"}}
                className='nav-item'>
                    <Link className={outfit.className} href='/'>Home</Link>
                </motion.li>
                <motion.li 
                initial={{x: -200, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.5, ease: "easeOut"}}
                onMouseEnter={()=>{setAbout(true), setProduct(false); setExperience(false)}}
                className='nav-item'>
                    <Link style={{display: "flex", alignItems: "center", gap: "5px"}} className={outfit.className} href='#'>About <AiFillCaretDown /></Link>
                </motion.li>
                <motion.li 
                initial={{x: -200, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.5, ease: "easeOut"}}
                onMouseEnter={()=>{setProduct(true); setAbout(false); setExperience(false)}}
                className='nav-item'>
                    <Link style={{display: "flex", alignItems: "center", gap: "5px"}} className={outfit.className} href='#'>products <AiFillCaretDown /></Link>
                </motion.li>
                <motion.li 
                initial={{x: -200, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.5, ease: "easeOut"}}
                onMouseEnter={()=>{setProduct(false); setAbout(false); setExperience(true)}}
                className='nav-item'>
                    <Link style={{display: "flex", alignItems: "center", gap: "5px"}} className={outfit.className} href='#'>Epb experience <AiFillCaretDown /></Link>
                </motion.li>
                <motion.li 
                initial={{x: -200, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.5, ease: "easeOut"}}
                className='nav-item'>
                    <Link className={outfit.className} href='/contact-us'>contact us</Link>
                </motion.li>
                <motion.li 
                initial={{x: -200, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 0.5, ease: "easeOut"}}
                className='nav-item'>
                    <Link className={outfit.className} href='/buy-now'>buy now</Link>
                </motion.li>
            </ul>
            {about &&
            <motion.ul
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.5, type: "tween"}}
                onMouseLeave={()=>{setAbout(false)}}
                className='aboutSubMenu'>
                <li className='aboutSubMenu-item'>
                    <Link className={outfit.className} href={'/our-journey'}>Our Journey</Link>
                </li>
                <li className='aboutSubMenu-item'>
                    <Link className={outfit.className} href={'/manufacturing'}>Manufacturing</Link>
                </li>
                <li className='aboutSubMenu-item'>
                    <Link className={outfit.className} href={'/BBB-policy'}>BBB Policy</Link>
                </li>
                <li className='aboutSubMenu-item'>
                    <Link className={outfit.className} href={'/battery-safety-guidelines'}>Battery Safety Guidelines</Link>
                </li>
                <li className='aboutSubMenu-item'>
                    <Link className={outfit.className} href={'/faq'}>FAQs</Link>
                </li>
            </motion.ul>}
            {product && 
            <motion.ul
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, type: "tween"}} 
            onMouseLeave={()=>{setProduct(false)}}
            className='productSubMenu'>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/auto-battery'}>Auto Rickshaw Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/car-batteries'}>Car Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/suv-battery'}>SUV's Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/tempo-battery'}>Tempo Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/tractors-battery'}>Tractors Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/jeep-battery'}>Jeep Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/heavy-truck-battery'}>Heavy Truck Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/bus-battery'}>Bus Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/inverter-battery'}>Inverter Battery</Link>
                </li>
                <li className='productSubMenu-item'>
                    <Link className={outfit.className} href={'/battery-water'}>Battery Water</Link>
                </li>
            </motion.ul>}
            {experience && 
            <motion.ul
            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, type: "tween"}} 
            onMouseLeave={()=>{setExperience(false)}}
            className='experienceSubMenu'>
                <li className='experienceSubMenu-item'>
                    <Link className={outfit.className} href={'/epb-logo'}>EPB Logo</Link>
                </li>
                <li className='experienceSubMenu-item'>
                    <Link className={outfit.className} href={'/events'}>events</Link>
                </li>
            </motion.ul>}
        </nav>
        } */}
    </section>
  )
}

export default Navbar