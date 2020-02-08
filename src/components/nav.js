import React from 'react'

import navStyles from '../styles/Modules/nav.module.scss'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#compositions">Compositions</a></li>
        <li><a className={navStyles.contact} href="#contact">contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav
