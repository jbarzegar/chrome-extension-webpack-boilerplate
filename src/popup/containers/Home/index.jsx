import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import {
  object,
  func
} from 'prop-types'

import Counter from '../../components/Counter/'

const Header = styled.header`
  padding: 1rem;
`

const Home = ({ counter, dispatch }) => (
  <div className='Home'>
    <Header>
      <h1>Hello world!</h1>
      <h2>Change the count below:</h2>
    </Header>
    <Counter
      count={counter.count}
      increment={() => dispatch({ type: 'INCREMENT' })}
      decrement={() => dispatch({ type: 'DECREMENT' })}
    />
  </div>
)

Home.propTypes = {
  counter: object,
  dispatch: func
}

export default () => (
  <Route
    exact
    path='/'
    component={
      connect(state => state)(Home)
    }
  />
)
