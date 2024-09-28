"use client"

import React, { useEffect, useState, useRef } from 'react'
import { Outfit } from 'next/font/google';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

import style from '@styles/Carousel.module.scss'

const outfit = Outfit({
    weight: '400',
    subsets: ['latin'],
});


const Carousel = () => {

    const [index, setIndex] = useState(0)
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const isInView1 = useInView(ref1)
    const isInView2 = useInView(ref2)
    const isInView3 = useInView(ref3)

    const arr = [0,1,2]

    const nextSlide = () => {
        setIndex(index === 2 ? 0 : (prev)=> prev+1)
    }

    useEffect(()=>{

        const timeoutId = setTimeout(() => {
            nextSlide();
        }, 4000);

        return () => {
            clearTimeout(timeoutId);
        };
    })

  return (
    <div className={style.carouselbox}>
        <div style={{transform: `translateX(-${index * 100}vw)`}} className={style.content}>
            <div className={style.service}>
                <div className={style.overlay}></div>
                <Image ref={ref1}
                width={1440} height={700}
                src='/assets/images/carousel/slide3.png' alt='excess power batteries' />
                <motion.h1 
                animate={{x: isInView1 ? 0 : 200, opacity: isInView1 ? 1 : 0}}
                transition={{duration: 1, delay: 0.5}}
                className={style.tagline}>
                    Moving With <br /> <span>Unlimited Power</span>
                </motion.h1>
            </div>
            <div className={style.service}>
                <div className={style.overlay}></div>
                <Image ref={ref2}
                width={1440}
                height={700}
                src='/assets/images/carousel/slide1.png' alt='excess power batteries' />
                <motion.h1 
                animate={{x: isInView2 ? 0 : 200, opacity: isInView2 ? 1 : 0}}
                transition={{duration: 1, delay: 0.5}}
                className={style.tagline}>
                    <span>Batteries </span> <br /> you can rely on
                </motion.h1>                
            </div>
            <div className={style.service}>
                <div className={style.overlay}></div>
                <Image ref={ref3}
                width={1440}
                height={700}
                src='/assets/images/carousel/slide2.png' alt='excess power batteries' />
                <motion.h1 
                animate={{x: isInView3 ? 0 : 200, opacity: isInView3 ? 1 : 0}}
                transition={{duration: 1, delay: 0.5}}
                className={style.tagline}>
                    Hydrate <br /> <span>to recharge</span>
                </motion.h1>                
            </div>
        </div>
        <div className={style.numbers}>
            {arr.map((item, i)=>{
                return (
                    <h1 className={`${style.numberButton} ${(index === i) ? style.active : ''}`} onClick={()=>setIndex(i)}></h1>
                )
            })}
        </div>
    </div>
  )
}

export default Carousel