import { REQ_LOGIN_SUCESS, REQ_LOGIN_ERROR } from '../reducers/login'
import users from '../../../users.json'

export const executeLogin = ({username, password}) => async dispatch => {
  const user = users.filter(item => item.username === username && item.password === password)
  if(user.length) return dispatch({
    type: REQ_LOGIN_SUCESS,
    payload: {
      data: user
    }
  })
  return dispatch({
    type: REQ_LOGIN_ERROR,
    payload: {
      data: 'User not found!'
    }
  })
}
