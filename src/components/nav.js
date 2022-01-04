import React from "react"

import { nav, contact } from "../styles/Modules/nav.module.scss"

const Nav = () => {
  return (
    <nav className={nav}>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#compositions">Compositions</a>
        </li>
        <li>
          <a className={contact} href="#contact">
            contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
