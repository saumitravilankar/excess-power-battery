"use client"

import style from '@styles/ContactForm.module.scss'
import Image from 'next/image'
import { useState } from 'react'

const ContactForm = () => {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [message, setMessage] = useState('')
    const [submit, setSubmit] = useState('submit')

    const submitHandler = (e) => {

        e.preventDefault();
        
        if (window.Email) {
            setSubmit('Submitting...')
            window.Email.send({
                Username : "dynasticwebdev@yopmail.com",
                Password : "8D64A4B499DD344E284D1352C816DA42B238",
                Host : "smtp.elasticemail.com",
                Port : 2525,
                To : 'excesspowerbatteries@gmail.com',
                From : "corporate.dynastical@gmail.com",
                Subject : `Message from Excess Power Battery Website.`,
                Body : `First Name: ${first} <br> Last Name: ${last} <br> Email: ${email} <br> Contact: ${contact} <br> Message
                : ${message}`
                }).then(
            alert('Email Sent Successfully')
            );
        setSubmit('Submit')
        }
    }

  return (
    <div className={style.container}>
        <div className={style.info}>
            <div className={style.contact}>
                <Image width={80} height={80} src="/assets/images/contact/call_1.png" alt='excess power battery contact number' />
                <div className={style.number}>+(91) 70206 07560</div>
            </div>
            <div className={style.dateTime}>
                <p>Monday – Saturday</p>
                <p>9.00 –  6.00</p>
                <p>Sunday & Public Holidays (Closed)</p>
            </div>
        </div>
        <div className={style.formDiv}>
            <form className={style.form} onSubmit={submitHandler}>
                <div className={style.name}>
                    <div className={style.first}>
                        <input value={first} onChange={(e)=>setFirst(e.target.value)} type="text" name='first' placeholder='First Name' required/>
                    </div>
                    <div className={style.last}>
                        <input value={last} onChange={(e)=>setLast(e.target.value)} type="text" name='last' placeholder='Last Name' required/>
                    </div>
                </div>
                <div className={style.name}>
                    <div className={style.first}>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name='email' placeholder='Email' required/>
                    </div>
                    <div className={style.last}>
                        <input value={contact} onChange={(e)=>setContact(e.target.value)} type="tel" name='mobile' placeholder='Contact Number' required/>
                    </div>
                </div>
                <div className={style.message}>
                    <textarea value={message} onChange={(e)=>setMessage(e.target.value)} type="text" name='message' cols={10} rows={5} placeholder='Write Your Message Here' required/>
                </div>
                <div className={style.submit}>
                    <input type="submit" value={submit}/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ContactForm