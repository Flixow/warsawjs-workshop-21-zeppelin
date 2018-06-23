import api from '../utils/api'

import { SET_USER_PROFILE } from './'

export const setUser = data => ({
  type: SET_USER_PROFILE,
  payload: data
})

export const handleAuth = data => dispatch => {
  dispatch(setUser(data))
  localStorage.setItem('warsawjs-username', data.username)
}

export const login = ({ username, password }) => async dispatch => {
  try {
    await api.auth.login({ username, password })

    dispatch(handleAuth({username}))
  } catch (e) {
    console.log(e)
  }
}

export const restoreSession = () => async dispatch => {
  const username = localStorage.getItem('warsawjs-username')

  if (username) {
    dispatch(setUser({ username }))
  }
}
