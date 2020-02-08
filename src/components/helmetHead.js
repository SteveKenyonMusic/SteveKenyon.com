import { Helmet } from "react-helmet"
import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"


const Head = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Helmet>
      <title>{`${data.site.siteMetadata.title}`}</title>
      <meta name="robots" content="all" />
      <meta name="author" content="Hideaki Aomori" />
      <meta name="description" content="Steve Kenyon - Top professional woodwind musician and composer. Saxophone, Flute, Clarinet, Oboe" />
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head
