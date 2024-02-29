import React from 'react'
import Wrapper from '../assets/wrappers/Contact'
import { Form } from 'react-router-dom'
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FormRow } from '../components';

const ContactUs = () => {
  return (
    <Wrapper>

        <div className='contact'>
        <div>
          <h2><FaPhone/></h2>
          <h5>PHONE NUMBER</h5>
          <p>8858850503</p>
        </div>
        <div>
          <h2><MdEmail/></h2>
          <h5>EMAIL</h5>
          <p>contact-us@meal-mate.in</p>
        </div>
        <div>
          <h2><FaLocationDot/></h2>
          <h5>OUR MAIN OFFICE</h5>
          <p>Gorakhnath, Gorakhpur</p>
        </div>
        </div>
        <div className='contact-form'>
         

            <h1>WANT A CALLBACK??</h1>
            {/* <p style={{color:'var(--yellow)'}}>We will call you back within 24 hours!!</p>
            <FormRow type="text" name="name" placeholder="Enter your name *"/>
            <FormRow type="email" name="email" placeholder="Enter your email *"/>
            <FormRow type="number" name="tel" placeholder="Enter your phone number number *"/>
            <textarea name="message" id="" rows="5" placeholder='Enter your message'></textarea>
            <button type="submit">Submit</button> */}
          <button> <a href='https://forms.gle/Z37xrgjRQ9NSvPWB8' target='_blank'>Click Here</a></button> 
         
        </div>
    </Wrapper>
  )
}

export default ContactUs