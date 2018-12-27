import { REQ_REGISTER_SUCESS, REQ_REGISTER_ERROR } from '../reducers/register'
import validator from 'email-validator'
import users from '../../../users.json'

export const registerUser = (user) => async dispatch => {

  if(!validator.validate(user.email)) return dispatch({
    type: REQ_REGISTER_ERROR,
    payload: {
      data: 'E-mail not valid!'
    }
  })
  user.level = 1
  users.push(user)
  return dispatch({
    type: REQ_REGISTER_SUCESS,
    payload: {
      data: [user]
    }
  })
}
