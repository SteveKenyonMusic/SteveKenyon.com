import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Nav from "./nav"
import {
  headerSection,
  container,
  headerPrimary,
  intro,
  intro_img,
  intro_content,
  intro_content_shortBio,
} from "../styles/Modules/header.module.scss"

const Header = () => {
  return (
    <header className={headerSection}>
      <div className={container}>
        <h1 className={headerPrimary}>Steve kenyon</h1>
        <Nav />
        <div className={intro}>
          <StaticImage
            src="../images/headshot.jpg"
            alt="Headshot of Steve Kenyon"
            className={intro_img}
          />
          <div className={intro_content}>
            <p className={intro_content_shortBio}>
              Steve Kenyon is a woodwind player and composer who plays
              saxophone, clarinet, flute and oboe in a wide variety of ensembles
              and composes music in many genres.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
