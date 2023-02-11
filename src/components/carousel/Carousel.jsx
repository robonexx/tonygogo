import {useRef, useEffect, useState} from 'react'
import { motion } from 'framer-motion'

import IMG1 from '../../assets/images/gogologo.png'
import IMG2 from '../../assets/images/tg_cap.jpg'
import IMG3 from '../../assets/images/tony_gogo_redbull.png'

//styles
import './Carousel.scss'

const carousel_data = [
    {
      name: 'item1',
      details: 'some details',
      id: 1,
      img: IMG1,
    },
    {
      name: 'item2',
      details: 'n2 some details',
      id: 2,
      img: IMG2,
    },
    {
      name: 'item3',
      details: 'nr 3 some details',
      id: 3,
      img: IMG3,
    },
];
  



const Carousel = () => {

    const [width, setWidth] = useState(0)

    // use ref is like querySelector
    const elRef = useRef()

    /* check full width, with element offsetwidth and subract the number and that is the width to add on dragContraints in framermotion */
    /* let sWidth = elRef.current.scrollWidth
    let offset = elRef.current.offsetWidth
    let dragWidth = sWidth - offset */

    useEffect(() => {
        console.log(elRef.current.scrollWidth, )
      setWidth(elRef.current.scrollWidth - elRef.current.offsetWidth)
    }, [width])
  return (
      <motion.div className='carousel' ref={(elRef)}>
          <motion.div className="inner_carousel"
              drag='x'
              dragConstraints={{right: 0, left: - width}}>
              {carousel_data.map(({ name, details, id, img }, i) => (
                  <motion.div className='item' key={id}>
                      <img src={img} alt="" />
                  </motion.div>
                  
              ))}
              
          </motion.div>
          
    </motion.div>
  )
}

export default Carousel