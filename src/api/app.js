import fetch from 'isomorphic-fetch'

import {
  FETCH_APP_DATA
} from '../constants/ActionTypes'

const TIMEOUT = 500

const fetchAppData = (dispatch) => {
  return fetch(`/mock-app-data`)
    .then(response => response.json())
    .then((json) => {
      dispatch({
        type: FETCH_APP_DATA,
        payload: json
      })
    })
}

export {
  fetchAppData
}