import React from 'react'
import Logo from '../../assets/images/gogologo.png'
import { useIsMobile } from '../../hooks/useMediaQuery'
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
    scaleX: [-1, 1],
    transition: { duration: 0.4 },
  },
};

const Hero = () => {

  const mobile = useIsMobile()

  return (
    <motion.div>hero2
      <motion.div className="overlay first"
        initial={{}}
        animate={{
          top: '-100vh',          
        }}
        transition={{duration: 0.4, delay: .2, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div className="overlay second"
      initial={{}}
      animate={{
        top: '-100vh',         
        }}
        transition={{duration: 0.4, delay: .4, ease: 'easeInOut'}}
      ></motion.div>
      <motion.div className="overlay third"
      initial={{}}
      animate={{
        top: '-100vh',         
        }}
        transition={{duration: 0.4, delay: .6, ease: 'easeInOut'}}
      ></motion.div>

      <div className="wrapper">

    <div className="nav">
      {/* <div className="logo"><img src={Logo} alt="" /></div> */}
      <div className="menu-links">
        <ul>
          <li>Home</li>
          <li>News</li>
          <li>Music</li>
          <li>Videos</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
      </div>
      <motion.hr className="border-bottom"
      initial={{width: '0%'}}
      animate={{delay: 1.2,
        width: '100%',
          ease: 'easeInOut'
        }}
        transition={{duration: 1.6, delay: 0.3, ease: 'easeInOut'}}
      />

  <div className="content">

    <div className="text">
          <motion.p className="subtitle"
          initial={{opacity: 0, x: -400,}}
            animate={{
              opacity: 1,
              x: 0,            
            }}
            transition={{duration: 0.4, delay: 1.2, ease: 'easeInOut'}}
          >A living Legend</motion.p>
          <motion.h1 className="title"
           initial={{opacity: 0, x: -200,}}
           animate={{
             opacity: 1,
             x: 0,
             width: '100%',
            }}
            transition={{duration: 1, delay: 1.6, ease: 'easeInOut',  delayChildren: 0.3,
            staggerChildren: 0.2,}}
          >
            <span
           variants={text_item}
            >TONY </span><br />
            <span
           variants={text_item}
            > GOGO</span>
      </motion.h1>
          <motion.p className="desc"
             initial={{opacity: 0 }}
             animate={{
               opacity: 1,
               width: '100%',
              }}
              transition={{duration: 1, delay: 1.8, ease: 'easeInOut'}}
          >
            Tony GoGo is a pioneer & innovator in the dance & artform of  style locking <br /> A LEGEND</motion.p>
          <motion.a href="#" className="readmore"
          initial={{opacity: 0, width: 0,}}
          animate={{
            opacity: 1,
            width: '180px',
           }}
           transition={{duration: 0.4, delay: 2.4, ease: 'easeInOut'}}
          ><FiArrowDownCircle className='icon' /></motion.a>
    </div>

        <motion.div className="img-1"
         initial={{opacity: 0, width: 0,}}
         animate={{
           opacity: 1,
           width: mobile ? '200px' : '450px',
           height: mobile ? '300px' : '600px'
          }}
          transition={{duration: 0.4, delay: 2, ease: 'easeInOut'}}
        ></motion.div>

    <div className="slider">
      <div className="arrows">
        <ul>
          <li><i className="fa fa-arrow-left"></i></li>
          <li><i className="fa fa-arrow-right"></i></li>
        </ul>
      </div>
      <div className="pages"><span>01</span>/04</div>
    </div>

        <motion.div className="img-2"
         initial={{opacity: 0, width: 0,}}
         animate={{
           opacity: 1,
           width: mobile ? '180px' : '280px',
           height: mobile ? '260px' : '450px'
          }}
          transition={{duration: 0.4, delay: 2.4, ease: 'easeInOut'}}
        ></motion.div>

        <motion.div className="img-3"
         initial={{opacity: 0, width: 0,}}
         animate={{
           opacity: 1,
           width: mobile ? '180px' : '280px',
           height: mobile ? '260px' : '560px'
          }}
          transition={{duration: 0.4, delay: 2.2, ease: 'easeInOut'}}
        ></motion.div>

  </div>

      </motion.div>
  )
}

export default Hero