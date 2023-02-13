import React from 'react';
import LOGOIMG from '../../assets/images/gogologo.png';

// styles
import './Logo.scss';

export default function Logo() {
  return (
      <div className='logo'>
         <img src={LOGOIMG} alt="" />
    </div>
  )
}
