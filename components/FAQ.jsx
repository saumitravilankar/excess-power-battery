"use client"

import Image from 'next/image'
import {BiPlusMedical} from 'react-icons/bi'
import { useState } from 'react'
import { motion } from 'framer-motion'

import style from '@styles/Faq.module.scss'

const FAQ = () => {

    const [index, setIndex] = useState(0)

    const data = [
        {question: "How can I purchase batteries?", answer: "Along with product information, we provide links to our Amazon and Flipkart stores. Click the 'Buy Now' link to purchase your desired battery."},
        {question: "Are you committed to battery recycling?", answer: "Excess Power Batteries follow the Battery Buy Back (BBB) policy. We purchase used batteries at a fixed price depending on the model."},
        {question: "How do I apply to become a dealer?", answer: "Please contact us on official E-mail Id with subject 'Application for Dealership'. We will get back to you as soon as possible."},
        {question: "What are the payment methods?", answer: "Excess Power Batteries accepts cash or Paytm, PhonePe, Google Pay, RTGS and NEFT payments."},
        {question: "Where can I get the latest information on new products?", answer: "We regularly update our website and social media pages. Follow our Facebook and Instagram pages."},
    ]

  return (
    <div className={style.container} >
        <h1 className={style.title}>Frequently Asked Questions</h1>
        <h2 className={style.tagline}>Please feel free to contact us if you don't get your question's answer in below.</h2>
        <div className={style.faqSection}>
            {data.map((item,i)=>{
                return (
                <>
                <div key={i} className={style.question} onClick={()=>setIndex(i)}>
                    <div>
                        {item.question}
                    </div>
                    <div className={style.icon}>
                        <BiPlusMedical />
                    </div>
                </div>
                <motion.div
                    initial={{y: "-50%", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{type: "tween", ease: "easeIn"}} 
                    style={{display: index === i ? "flex" : "none"}}
                    key={index} 
                    className={style.answer}>
                        {item.answer}
                </motion.div>
                </>
                )
            })}
        </div>
    </div>
  )
}

export default FAQ