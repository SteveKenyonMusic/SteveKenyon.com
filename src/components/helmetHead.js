import { Helmet } from "react-helmet"
import React from "react"
import PropTypes from "prop-types"
import { SITE_METADATA_TITLE } from "../constant"

const Head = (props) => {
  return (
    <Helmet>
      <title>{`${SITE_METADATA_TITLE}`}</title>
      <meta name="robots" content="all" />
      <meta name="author" content="Hideaki Aomori" />
      <meta
        name="description"
        content="Steve Kenyon - Top professional woodwind musician and composer. Saxophone, Flute, Clarinet, Oboe"
      />
    </Helmet>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Head
