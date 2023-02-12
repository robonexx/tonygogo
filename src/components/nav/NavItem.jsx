import React from 'react'
import { Link } from 'react-router-dom'
import {motion as mt } from 'framer-motion'

// styles
import './NavItem.scss'

export default function NavItem({title, path, cls, id, i}) {
  return (
    <mt.li className={cls} key={id}
    initial={{ opacity: 0, y: i % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: i * 0.2 }}
    >
          <Link className="nav_link" to={path}>{title}</Link>
    </mt.li>
  )
}
