import React from 'react'
import IMGBIO from '../../assets/images/tony_bio.png'
import {Link} from 'react-router-dom'

// styles
import './bio.scss'

const Bio = () => {
  return (
      <div className='bio'>
      <h2>Anthony Lewis Foster</h2>
      <h4>aka "Tony Gogo"</h4>
          <p>
        Grand Master Locker Tony Go-Go , Co founding member of the original Go Go Brothers group has preserved and developed the Go-Go legacy for over three decades. 
        </p>
      <br />
      <img src={IMGBIO} alt="tony portrait" />
              <br/>
      <p>
              After leaving the Original Lockers Group in the early 1980s Tony has taught and developed not only The Original Art of Locking in Japan for the past 4 decades but he recognized, created and developed a style of Locking in Japan which combined other styles along with a Locking Foundation to form a style known as “Lock Fusion” when we asked Tony how this came about
              <br />
              <br />
          </p>
 <p>
<br/>
TONY GOGO’s been working in the business for 5 decades it consists of stage performances in entertainment world including tv shows, theater shows, commercials and workshops all over the world, he also judged in many events in countries such as: USA, Japan, Sweden, France, UK, Taiwan, China, Korea, Holland, France, Great Britain, Russia, Germany, Singapore, Malaysia, Canada etc.
          </p>
    </div>
  )
}

export default Bio