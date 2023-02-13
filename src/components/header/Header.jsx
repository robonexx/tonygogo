import React from 'react'
import {motion} from 'framer-motion'

// styles
import './Header.scss'

export default function Header(props) {
  return (
    
    <header>
      {props.children}
      <motion.hr className="border-bottom"
      initial={{width: '0%'}}
      animate={{delay: 1.2,
        width: '100%',
          ease: 'easeInOut'
        }}
        transition={{duration: 1.6, delay: 0.3, ease: 'easeInOut'}}
      />
    </header>

  )
}
