import React, { Fragment } from 'react'
import { Link } from 'gatsby'


const NotFound = () => {
  return (
    <Fragment>
        <h1>Page not found</h1>
        <p><Link to="/">Back home</Link></p>
    </Fragment>
  )
}

export default NotFound
