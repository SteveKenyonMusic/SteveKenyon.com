import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Nav from "./nav"
import headerStyles from "../styles/Modules/header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "headshot.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 320) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header className={headerStyles.headerSection}>
      <div className={headerStyles.container}>
        <h1 className={headerStyles.headerPrimary}>Steve kenyon</h1>
        <Nav />
        <div className={headerStyles.intro}>
          <Img
            fluid={data.headshot.childImageSharp.fluid}
            className={headerStyles.intro_img}
            alt="Headshot of Steve Kenyon smiling"
          />
          <div className={headerStyles.intro_content}>
            <p className={headerStyles.intro_content_shortBio}>
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
