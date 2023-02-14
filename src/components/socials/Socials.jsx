import React from 'react'
import { FiLinkedin, FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

// styles
import './Socials.scss'

const Socials = () => {
  return (
    <motion.div className='socials'
    initial={{x: -100, opacity: 0}}
      animate={{ x: 0, opacity: 1 }}
      transition={{duration: 1, delay: 2.3}}
    >
      <a
            href='https://www.linkedin.com/in/tony-gogo-5a8430a/'
            target='_blank'
            rel='noreferrer noopener'
          >
            {' '}
            <FiLinkedin className='soc-item soc-icon' />
          </a>

          <a
            href='https://www.facebook.com/profile.php?id=100013249814960'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FiFacebook className='soc-item soc-icon' />
          </a>
          <a
            href='https://www.instagram.com/tonygogo_anthony/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FiInstagram className='soc-item soc-icon' />
          </a>
          <Link
            to='/contact'
          >
            <FiMail className='soc-item soc-icon' />
          </Link>

          
        </motion.div>
  )
}

export default Socials