import React from "react"

import {
  footer,
  mainContainer,
  nav,
  ul,
  li,
  a,
  line,
  copyright,
  author,
  hideakiLink,
} from "../styles/Modules/footer.module.scss"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={footer}>
      <div className={mainContainer}>
        <nav className={nav}>
          <ul className={ul}>
            <li className={li}>
              <a className={a} href="#top">
                top
              </a>
            </li>
            <li className={li}>
              <a className={a} href="#about">
                about
              </a>
            </li>
            <li className={li}>
              <a className={a} href="#compositions">
                compositions
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <div className={line} />
        <p className={copyright}>Copyright &copy; {currentYear}</p>
        <p className={author}>
          Built by{" "}
          <a
            className={hideakiLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/h15200"
          >
            Hideaki Aomori
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
