import React from 'react'
import {motion} from 'framer-motion'
import IMGFANCY from '../../assets/images/tony_fancy.png'
import IMGJUDGE from '../../assets/images/tony_judge.png'

// styles
import './about.scss'

const About = () => {
  return (
      <div className='about'>
      <motion.img className="img_judge" src={IMGJUDGE} alt="tony judge solo"
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 0.6, delay: 0.8}}
      />
      <motion.h2
        initial={{ y: 200, opacity: 0 }}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 1, delay: 1}}      
      >ABOUT</motion.h2>
      <motion.p
       initial={{opacity: 0 }}
       animate={{opacity: 1}}
       transition={{duration: 1.6, delay: 1.6}} 
      >
          Dancer and Choreographer Tony Go Go, co-founding member of the original Go Go Brothers, has preserved and developed the Go Go legacy since 1971 - the very beginning of sychronised Locking.
              <br />
              <br/>
              Originally from Watts, California, Tony Go Go started learning dance called Campbellocking, with his friends from High School (James “ OG Skeeter Rabbit” Higgins, Edwin “Buddy GoGo”  Lombard, and Kevin YoYo ). They went to perform on  Soul Train and then formed a group called the Go Go Brothers.
              <br />
              <br />
              While dancing with his  partners (James “ OG Skeeter Rabbit” Higgins, Edwin “Buddy GoGo”  Lombard, and Kevin YoYo ) they formed another group by the name of Creative Generation - formed by The Watts Writers Workshop to develop talent around in Watts, Compton adn LA! Creative generation was the first unisex locking group. <br />
              Partners in that group were Arnetta Johnson, Lorna Dune, Greg Cambellock Jr, Jimmy Scooby-Doo Foster and Tony’s fellow GoGo brothers ... But most of you remember Tony GoGo as a member of the Original Lockers with Don Campbell, Fluky Luke, Mr. Penguine, Shabba-Doo, and Slim The Robot.
          </motion.p>
          <img src={IMGFANCY} alt="tony in costume" />
 <p>
Since leaving the Original Lockers group in the early 1980s, Tony has taught and developed not only the original art of Locking in Japan but he recognised, created and developed a style that has by now become unique to the Asian style of Locking, sometimes refered to as ‘Lock Fusion.' Tony Go Go is now considered the innovator of the Japanese style of Locking.
<br/>
Being the only pioneer of Locking to reside in Japan, Tony has trained most Japanese Lockers who have gained international acclaim, but none more prominent than his two sons Yuu and Rei, better known as the Go Go Brothers of today. They have a strong synchronised locking background by which, one can tell, they learned from only the very best - Tony recalls, “When Me, Skeet and Buddy got together in the early 70’s we worked on steps over and over again, and that’s the way I taught them”. It doesn’t come as a surprise then that Yuu and Rei started dancing around the same time they started walking. They trained in Locking and Tap Dance from a very early age, performing with their father on numerous occasions throughout Japan.
<br/>
Although Campbell can’t lay claim to having the first Locking crew, that distinction belongs to Tony GoGo and the Go-Go, and Yo-Yo Brothers, Campbell’s simply named group, The Lockers, can be considered the ones that spread the gospel of Locking all over the world.
          </p>
    </div>
  )
}

export default About