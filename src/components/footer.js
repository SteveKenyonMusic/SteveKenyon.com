import React from "react"

import footerStyles from "../styles/Modules/footer.module.scss"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.mainContainer}>
        <nav className={footerStyles.nav}>
          <ul className={footerStyles.ul}>
            <li className={footerStyles.li}>
              <a className={footerStyles.a} href="#top">
                top
              </a>
            </li>
            <li className={footerStyles.li}>
              <a className={footerStyles.a} href="#about">
                about
              </a>
            </li>
            <li className={footerStyles.li}>
              <a className={footerStyles.a} href="#compositions">
                compositions
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={footerStyles.copyAndAuthorContainer}>
        <div className={footerStyles.line}/>
        <p className={footerStyles.copyright}>Copyright &copy; {currentYear}</p>
        <p className={footerStyles.author}>Built by Hideaki Aomori</p>
      </div>
    </footer>
  )
}

export default Footer
