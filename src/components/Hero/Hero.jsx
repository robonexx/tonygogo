import React from 'react'
import { Link } from 'react-router-dom'
import { useIsDesktop } from '../../hooks/useMediaQuery'
import { motion } from 'framer-motion'
import {FiArrowDownCircle} from 'react-icons/fi'
/* import Img1 from '../../assets/images/tg_cap.jpg'
import Img2 from '../../assets/images/tg_jd.png'
import Img3 from '../../assets/images/tony_gogo_redbull.png' */

import './hero.scss'

const text_item = {
  hidden: { opacity: 0 },
  visible: {
    opacity: [0, 0, 1],
    transition: { duration: 0.4 },
  },
};

const Hero = () => {

  const desktop = useIsDesktop()

  return (
    <motion.div className='hero'>
    <div className="text">
          <motion.p className="hero_subtitle"
          initial={{opacity: 0, x: -400,}}
            animate={{
              opacity: 1,
              x: 0,            
            }}
            transition={{duration: 0.4, delay: 1.2, ease: 'easeInOut'}}
          >A living Legend</motion.p>
          <motion.h1 className="hero_title"
           initial={{opacity: 0, x: -200,}}
           animate={{
             opacity: 1,
             x: 0,
             width: '100%',
            }}
            transition={{duration: .8, delay: 1.6, ease: 'easeInOut',}}
          >TONY
      </motion.h1>
          <motion.h1 className="hero_title"
           initial={{opacity: 0, x: 200,}}
           animate={{
             opacity: 1,
             x: 0,
             width: '100%',
            }}
            transition={{duration: 0.8, delay: 1.8, ease: 'easeInOut',}}
          >GOGO
      </motion.h1>
          <motion.p className="desc"
             initial={{opacity: 0 }}
             animate={{
               opacity: 1,
               width: '100%',
              }}
              transition={{duration: 1.2, delay: 2, ease: 'easeInOut'}}
          >
            Tony GoGo is a pioneer & innovator in the dance & artform of  style locking <br /> A LEGEND</motion.p>
          <motion.div
          className="readmore"
          initial={{opacity: 0, width: 0,}}
          animate={{
            opacity: 1,
            width: '12rem',
           }}
           transition={{duration: 0.4, delay: 2.4, ease: 'easeInOut'}}
          >
            <Link to="#videos">
            <FiArrowDownCircle className='icon' />
            </Link>
          </motion.div>
    </div>

        <motion.div className="img_1"
        initial={{
          opacity: 0, width: 0}}
         animate={{
           opacity: 1,
           width: desktop ? '45rem' : '20rem',
           height: desktop ? '50rem' : '16rem'
          }}
          transition={{duration: 0.4, delay: 2, ease: 'easeInOut'}}
        ></motion.div>

        <motion.div className="img_2"
         initial={{opacity: 0, width: 0,}}
         animate={{
           opacity: 1,
           width: desktop ? '20rem' : '8rem',
           height: desktop ? '30rem' : '12rem'
          }}
          transition={{duration: 0.4, delay: 2.4, ease: 'easeInOut'}}
        ></motion.div>

        <motion.div className="img_3"
         initial={{opacity: 0, width: 0,}}
         animate={{
           opacity: 1,
           width: desktop ? '35rem' : '10rem',
           height: desktop ? '30rem' : '20rem'
          }}
          transition={{duration: 0.4, delay: 2.2, ease: 'easeInOut'}}
        ></motion.div>

      </motion.div>
  )
}

export default Hero