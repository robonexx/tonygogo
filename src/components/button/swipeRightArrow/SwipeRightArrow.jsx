import React from 'react'
import { motion } from 'framer-motion'
import { MdOutlineSwipe } from 'react-icons/md'

// styles
import './swipeArrowRight.scss'

const SwipeRightArrow = () => {
  return (
      <div>
          <motion.div className="arrow_icon"
                  
                  animate={{x: [0 , -10, 0, -10, 0]}}
                  transition={{ repeat: Infinity, repeatDelay: 4 }}
                  >
                    <MdOutlineSwipe />
                  </motion.div>
    </div>
  )
}

export default SwipeRightArrow