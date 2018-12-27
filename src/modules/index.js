import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import login from './login/reducers'
import register from './register/reducers'

export default (history) => combineReducers({
  router: connectRouter(history),
  login,
  register
})
