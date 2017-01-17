import {
  FETCH_APP_DATA
} from '../constants/ActionTypes'

import merge from '../utils/merge'

const InitialState = {

}

const appData = (state = InitialState, action) => {
  switch (action.type) {
    case FETCH_APP_DATA:
      return merge(state, action.payload)
    default:
      return state
  }
}

export {
  appData
}