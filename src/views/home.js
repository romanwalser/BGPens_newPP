import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Light House News</title>
        <meta property="og:title" content="Light House News" />
      </Helmet>
      <a
        href="https://superhotstory.com/short/89209?stream_uuid=8e4cf582-b20b-4589-b467-5a203e3321ef&trek=1"
        target="_self"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/bububgbut.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
