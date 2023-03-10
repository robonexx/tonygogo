import {useRef, useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import { videoData } from '../../assets/data/pageData'


//styles
import './Carousel.scss'
// swipe component
import SwipeRightArrow from '../button/swipeRightArrow/SwipeRightArrow'

const VideoCarousel = () => {
    const [width, setWidth] = useState(0)

    // use ref is like querySelector
    const elRef = useRef()

    /* check full width, with element offsetwidth and subract the number and that is the width to add on dragContraints in framermotion */
    /* let sWidth = elRef.current.scrollWidth
    let offset = elRef.current.offsetWidth
    let dragWidth = sWidth - offset */

    useEffect(() => {
       /*  console.log(elRef.current.scrollWidth, ) */
      setWidth(elRef.current.scrollWidth - elRef.current.offsetWidth)
    }, [width])

    const handleMouseEnter = (e) => {
        console.log('clicked')
        setTimeout(() => {
            e.target.children[2].style.pointerEvents = 'fill'
        }, 4000)
       
       /*  console.log(e.target.children[2]) */
        clearTimeout(() => {
            e.target.children[2].style.pointerEvents = 'none'
        }, 1000)
    } 

    const handleMouseLeave = (e) => {
     
            e.target.children[2].style.pointerEvents = 'none'
        
    } 
    const handleClick = (e) => {       
            e.target.children[2].style.pointerEvents = 'none'
    } 
  return (
      <motion.div className='carousel' ref={(elRef)}>
          <motion.div className="inner_carousel"
              drag='x'
              dragConstraints={{right: 0, left: - width}}>
              {videoData.map(({ name, details, id, vid, vtime }, i) => (
                  <motion.div className='item' key={id} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <div className="item_name">{name}</div>
                      <div className="item_details">{details}</div>
                    {/*   <motion.div className="btn" ><ImPlay /></motion.div> */}
                      <iframe
                            title='tony gogo'
                            className='video'
                            type='text/html'
                            src={`https://www.youtube-nocookie.com/embed/${vid}?start=${vtime}`}
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture  fullscreen'
                        ></iframe>
            </motion.div>                  
              ))}
              
        </motion.div>
        <SwipeRightArrow />
    </motion.div>
  )
}

export default VideoCarousel