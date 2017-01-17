import { combineReducers } from 'redux'
import * as App from './app'
import * as Home from './home'

const reducers = combineReducers({
  ...App,
  ...Home
})

export default reducers