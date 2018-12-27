import { REQ_LOGIN_SUCESS, REQ_LOGIN_ERROR } from '../reducers/login'
import validator from 'email-validator'
import axios from 'axios'
import users from '../../../users.json'

export const updateUser = (user) => async dispatch => {

  for (let i = 0; i < users.length; i++) {
    if(isUserAndPassword(users[i], user)){
      users[i] = user
      users[i].level = checkLevel(user)

      if(!validator.validate(user.email)) return dispatch({
        type: REQ_LOGIN_ERROR,
        payload: {
          data: 'Email not valid!'
        }
      })
      const phone = await checkPhone(user.phone)
      if(!phone.data.valid) return dispatch({
        type: REQ_LOGIN_ERROR,
        payload: {
          data: 'Phone not valid!'
        }
      })
      return dispatch({
        type: REQ_LOGIN_SUCESS,
        payload: {
          data: [users[i]]
        }
      })
    }
  }

}

const checkLevel = (user) => {
  let level = 0
  if(checkLevelOne(user)) level = 1
  if(checkLevelTwo(user)) level = 2
  if(checkLevelTreeOne(user)) level = 3.1
  return level
}

const checkLevelOne = (user) => {
  return user.email && user.firstName && user.country
}

const checkLevelTwo = (user) => {
  return user.address && user.phone && user.dateBirthday
}

const checkLevelTreeOne = (user) => {
  return user.website && user.bio
}

const isUserAndPassword = (users, user) => {
  return users.username === user.username && users.password === user.password
}

const checkPhone = (phone) => {
  return axios.get(`http://apilayer.net/api/validate?access_key=a15ee0c9f2b964a9a4028fe9bada04be&number=${phone}&format=1`)
}
