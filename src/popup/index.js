import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from 'react-chrome-redux'

import { portName } from '../constants/'

import App from './containers/'

import './main.css'

const store = new Store({ portName })

store.ready()
  .then(
    () => render(
      <Provider store={store}>
        <App className='h1' />
      </Provider>,
      document.querySelector('#root')
    )
  )
