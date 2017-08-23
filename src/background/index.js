import { wrapStore } from 'react-chrome-redux'

import { portName } from '../constants/'
import store from '../store/'

// Create proxy
wrapStore(store, { portName })
