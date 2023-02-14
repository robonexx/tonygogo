import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'
import { FcCheckmark } from 'react-icons/fc'


// styles
import './contact.scss'

const Contact = () => {
    /* const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' }) */
    
  const form = useRef();
  
/* 
    const onChangeHandler = (e) => {
        const value = e.target.value;
        setFormData({ ...formData, [e.target.name]: value})
      console.log(e.target.value)
    } */
  

    const handleSubmit = (e) => {
        e.preventDefault()
      let isValid = e.target.checkValidity()
      console.log(isValid)
        /* console.log(`name: ${formData.name} \n
        email: ${formData.email}  \n
        subject: ${formData.subject} \n
        message: ${formData.message}`) */
      
        emailjs.sendForm(process.env.REACT_APP_SENDER_ID, process.env.REACT_APP_TEMP_ID, form.current, process.env.REACT_APP_KEY)
      .then((result) => {
        console.log(result.text);
        form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className='contact'>
      <motion.h2
        initial={{x: -300, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 0.4, delay: 0.4, ease: 'easeOut'}}
      >Bookings</motion.h2>
      <motion.h2
      initial={{x: -300, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.4, delay: 0.6, ease: 'easeOut'}}
      >&</motion.h2>
      <motion.h2
      initial={{x: -300, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{duration: 0.4, delay: 0.8, ease: 'easeOut'}}
      >Contact</motion.h2>
      <motion.form className='contact_form' ref={form} onSubmit={handleSubmit}
       initial={{opacity: 0}}
       animate={{opacity: 1}}
       transition={{duration: 0.6, delay: 1, ease: 'easeOut'}}
      >
        <label >Name</label>
        <div className='input_field'>
          <input
            type="text"
            name="name"
            /* value={form.name || ''}  */
            required
            minLength={3}
            maxLength={15} />
          <span className='check_icon'><FcCheckmark /></span>
        </div>
        <label >Email</label>
        <div className="input_field">
          <input
            type="email"
            name="email" /* value={form.email || ''} onChange={onChangeHandler} */
            required />
          <span className='check_icon'><FcCheckmark /></span>
        </div>
        <label >Subject</label>
        <div className="input_field">
          <input type="text" name="subject"
          /* value={form.subject || ''} 
          onChange={onChangeHandler} */
            minLength={5}
            maxLength={30}
            required />
          <span className='check_icon'><FcCheckmark /></span>
        </div>
        <label >Message</label>
        <div className="input_field">
          <textarea type="textarea" name="message" /* value={form.message || ''} onChange={onChangeHandler} */
            minLength={20}
            maxLength={200}
            required />
          <span className='check_icon'><FcCheckmark /></span>
        </div>
          <input type="submit" name="submit" value="Submit" />
          
    </motion.form>
    </div>
  )
}

export default Contact