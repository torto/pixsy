export const REQ_REGISTER_SUCESS = 'register/REGISTER_SUCESS'
export const REQ_REGISTER_ERROR = 'register/REGISTER_ERROR'

const initialState = {
  data: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQ_REGISTER_SUCESS:
      return {
        ...state,
        data: action.payload.data,
        error: null
      }
    case REQ_REGISTER_ERROR:
      return {
        ...state,
        error: action.payload.data,
      }
    default:
      return state
  }
}
