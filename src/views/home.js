import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>A chain of supermarkets for pensioners and the elderly</title>
        <meta property="og:title" content="A chain of supermarkets for pensioners and the elderly" />
      </Helmet>
      <a
        href="https://bestnewsarea.com/short/89209?stream_uuid=56b39ba9-edc1-4613-9913-3b939415be2d&trek=1"
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
