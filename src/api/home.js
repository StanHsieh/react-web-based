import fetch from 'isomorphic-fetch'

import {
  FETCH_HOME_DATA
} from '../constants/ActionTypes'

const TIMEOUT = 500

const fetchHomeData = (dispatch) => {
  return fetch(`/mock-home-data`)
    .then(response => response.json())
    .then((json) => {
      dispatch({
        type: FETCH_HOME_DATA,
        payload: json
      })
    })
}

export {
  fetchHomeData
}