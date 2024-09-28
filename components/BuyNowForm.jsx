"use client"
import style from '@styles/BuyNowForm.module.scss'
import { useState } from 'react'

const BuyNowForm = () => {

    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [address, setAddress] = useState('')
    const [addressTwo, setAddressTwo] = useState('')
    const [category, setCategory] = useState('')
    const [battery, setBattery] = useState('')
    const [submit, setSubmit] = useState('submit')
    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [state, setState] = useState('')

    
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
                Subject : `Enquiry regarding ${category} - ${battery}.`,
                Body : `
                        First Name: ${first} <br>
                        Last Name: ${last} <br>
                        Email: ${email} <br> 
                        Contact: ${contact} <br> 
                        State: ${state} <br/>
                        District: ${district} <br/>
                        City: ${city} <br/>
                        Address: ${address} <br/>
                                 ${addressTwo} <br/>
                        PinCode: ${zipCode} <br/>

                        ***************************** <br/>
                        ***************************** <br/>

                        Interested In: <br>

                        Category: ${category} <br/>
                        Battery: ${battery} <br/>
                        `
                }).then(
            alert('Email Sent Successfully')
            );
        setSubmit('Submit')
        }
    }

  return (
    <div className={style.container}>
        <h1 className={style.title}>Buy Now</h1>
        <form className={style.form} onSubmit={submitHandler}>
            <div className={style.input}>
                <label htmlFor="category">Please Select Category:</label> <br />
                <select value={category} onChange={(e)=>setCategory(e.target.value)} name='category' required>
                    <option value="">*Please select*</option>
                    <option value="Auto-Rickshaw Battery">Auto-Rickshaw Battery</option>
                    <option value="Cars Battery">Cars Battery</option>
                    <option value="SUV's Battery">SUV's Battery</option>
                    <option value="Tempo Battery">Tempo Battery</option>
                    <option value="Tractors Battery">Tractors Battery</option>
                    <option value="Jeep Battery">Jeep Battery</option>
                    <option value="Heavy Trucks Battery">Heavy Trucks Battery</option>
                    <option value="Bus Battery">Bus Battery</option>
                    <option value="Inverter Battery">Inverter Battery</option>
                    <option value="Battery Water">Battery Water</option>
                </select>
            </div>
            <div className={style.input}>
                <label htmlFor="battery">Please Select Battery:</label> <br />
                <select value={battery} onChange={(e)=>setBattery(e.target.value)} name='battery' required>
                    <option value="">*Please select*</option>
                    <option value="EP650 - 24 Months(Auto, Car)">EP650 - 24 Months(Auto, Car)</option>
                    <option value="EP650 - 36 Months(Auto, Car)">EP650 - 36 Months(Auto, Car)</option>
                    <option value="EP800 - 24 Months(SUV, Tempo, Mini-tractor, Jeep)">EP800 - 24 Months(SUV, Tempo, Mini-tractor, Jeep)</option>
                    <option value="EP800 - 36 Months(SUV, Tempo, Mini-tractor, Jeep)">EP800 - 36 Months(SUV, Tempo, Mini-tractor, Jeep)</option>
                    <option value="EP1000 - 24 Months(Tractors)">EP1000 - 24 Months(Tractors)</option>
                    <option value="EP1000 - 36 Months(Tractors)">EP1000 - 36 Months(Tractors)</option>
                    <option value="EP1500 - 24 Months(Trucks, Containers, Bus)">EP1500 - 24 Months(Trucks, Containers, Bus)</option>
                    <option value="EP1500 - 36 Months(Trucks, Containers, Bus)">EP1500 - 36 Months(Trucks, Containers, Bus)</option>
                    <option value="EP2000 - 48 Months(Home Inverter, UPS)">EP2000 - 48 Months(Home Inverter, UPS)</option>
                    <option value="IT1500 - 48 Months(Home Inverter, UPS)">IT1500 - 48 Months(Home Inverter, UPS)</option>
                    <option value="IT1650 - 48 Months(Home Inverter, UPS)">IT1650 - 48 Months(Home Inverter, UPS)</option>
                    <option value="IT2200 - 48 Months(Home Inverter, UPS)">IT2200 - 48 Months(Home Inverter, UPS)</option>
                    <option value="Battery Water">Battery Water</option>
                </select>
            </div>
            <div className={style.input}>
                <label htmlFor="address">Delivery Address</label> <br />
                <input value={address} onChange={(e)=>setAddress(e.target.value)} name='address' type="text" placeholder='street address 1' required />
                <input value={addressTwo} onChange={(e)=>setAddressTwo(e.target.value)} type="text" placeholder='street address 2' />
            </div>
            <div className={`${style.input} ${style.location}`}>
                <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder='City' required/>
                <input value={district} onChange={(e)=>setDistrict(e.target.value)} type="text" placeholder='District' required/>
                <input value={zipCode} onChange={(e)=>setZipCode(e.target.value)} type="text" placeholder='Postal/Zip Code' required/>
                <select value={state} onChange={(e)=>setState(e.target.value)} name='state' required>
                    <option value="">State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujrat">Gujrat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                </select>
            </div>
            <div className={`${style.input} ${style.name}`}>
                <label htmlFor="name">Contact Person</label> <br />
                <input value={first} onChange={(e)=>setFirst(e.target.value)} name='name' type="text" placeholder='First Name' required/>
                <input value={last} onChange={(e)=>setLast(e.target.value)} name='name' type="text" placeholder='Last Name' required/>
            </div>
            <div className={style.input}>
                <label htmlFor="email">Contact Email</label> <br />
                <input value={email} onChange={(e)=>setEmail(e.target.value)} name='email' type="email" placeholder='Enter Your Email' required/>
            </div>
            <div className={style.input}>
                <label htmlFor="number">Contact Number</label> <br />
                <input value={contact} onChange={(e)=>setContact(e.target.value)} name='number' type="tel" placeholder='Contact Number' required/>
            </div>
            <div className={`${style.input} ${style.submit}`}>
                <input name='number' type="submit" value={submit} />
            </div>
        </form>
    </div>
  )
}

export default BuyNowForm