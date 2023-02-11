import {useRef, useEffect, useState} from 'react'
import { motion } from 'framer-motion'

import IMG1 from '../../assets/images/tg_jd.png'
import IMG2 from '../../assets/images/tg_cap.jpg'
import IMG3 from '../../assets/images/tony_gogo_redbull.png'

import {ImPlay} from 'react-icons/im'

//styles
import './Carousel.scss'

const ytVid1 = '7GGETPlhSY0';
const ytVid2 = 'ukJLxTC86aI';
const ytVid3 = '5Ysep7NpBfI';

const carousel_data = [
    {
      name: 'Winner of Juste Debout 2019',
      details: 'Tony won juste debout 2019 in the locking category',
      id: 1,
        vid: ytVid1,
        vtime: '268'
    },
    {
      name: 'JUDGE DEMO WDC 2017',
      details: 'Judge Demo at WDC Finals world dance colloseum',
      id: 2,
        vid: ytVid2,
      vtime: '5'
    },
    {
      name: 'The Lockers',
      details: 'Tony performing with the lockers on the ',
      id: 3,
        vid: ytVid3,
      vtime: '150'
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

    const handleMouseEnter = (e) => {
        console.log('clicked')
        setTimeout(() => {
            e.target.children[2].style.pointerEvents = 'fill'
        }, 4000)
       
        console.log(e.target.children[2])
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
              {carousel_data.map(({ name, details, id, vid, vtime }, i) => (
                  <motion.div className='item' key={id} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                      <div className="item_name">{name}</div>
                      <div className="item_details">{details}</div>
                    {/*   <motion.div className="btn" ><ImPlay /></motion.div> */}
                      <iframe
                            title='tony gogo'
                            className='video'
                            type='text/html'
                            src={`https://www.youtube-nocookie.com/embed/${vid}?start=${vtime}`}
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture web-share allowfullscreen'
                        ></iframe>
                                    </motion.div>
                  
              ))}
              
          </motion.div>
          
    </motion.div>
  )
}

export default Carousel