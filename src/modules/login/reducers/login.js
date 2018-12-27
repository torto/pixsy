export const REQ_LOGIN_SUCESS = 'request/LOGIN_SUCESS'
export const REQ_LOGIN_ERROR = 'request/LOGIN_ERROR'

const initialState = {
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQ_LOGIN_SUCESS:
      return {
        ...state,
        data: action.payload.data,
        error: null
      }
    case REQ_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.data,
      }
    default:
      return state
  }
}
