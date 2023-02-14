import {useRef, useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import { imageData } from '../../assets/data/pageData'



//styles
import '../videocarousel/Carousel.scss'

const ImageCarousel = () => {

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
              {imageData.map(({ name, details, id, img }, i) => (
                  <motion.div className='item' key={id} >
                      <div className="item_name">{name}</div>
                      <div className="item_details">{details}</div>
                      <img className='image_frame'
                        src={img} alt={name}
                        ></img>
                                    </motion.div>
                  
              ))}
              
          </motion.div>
          
    </motion.div>
  )
}

export default ImageCarousel