import React from 'react'
import { FiLinkedin, FiGithub, FiCodepen } from 'react-icons/fi';

// styles
import './Socials.scss'

const Socials = () => {
  return (
    <div className='socials'>
          <a
            href='https://www.linkedin.com/in/robert-w%C3%A4gar-1b4661139/'
            target='_blank'
            rel='noreferrer noopener'
          >
            {' '}
            <FiLinkedin className='soc-item soc-icon' />
          </a>

          <a
            href='https://github.com/robonexx'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FiGithub className='soc-item soc-icon' />
          </a>
          <a
            href='https://codepen.io/robonexx'
            target='_blank'
            rel='noreferrer noopener'
          >
            <FiCodepen className='soc-item soc-icon' />
          </a>

          
        </div>
  )
}

export default Socials