import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import Nav from './Nav/'

import Home from './Home/'
import About from './About/'

const App = (props) => (
  <Router>
    <div className='AppWrap'>
      <Nav />
      <Home />
      <About />
    </div>
  </Router>
)

export default App
