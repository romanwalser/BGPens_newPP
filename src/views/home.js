import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Free press Sofia</title>
        <meta property="og:title" content="Free press Sofia" />
      </Helmet>
      <a
        href="https://superfeedstory.com/short/89209?stream_uuid=56b39ba9-edc1-4613-9913-3b939415be2d&trek=1"
        target="_self"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/bgbt.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
