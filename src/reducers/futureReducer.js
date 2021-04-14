import wipService from '../services/wipService'

const initialState = {
  resultMatrix: null,
  }

const parameterReducer = (state = initialState, action) => {
  console.log('action', action)
  console.log('state', state)
  console.log('initialState', initialState)
  switch(action.type) {
    case 'FILL_RESULT_MATRIX':
      const result = {}
      result.resultMatrix = action.data
      return result
    default:
      return state
  }

}

export const fillResultMatrix = () => {

  return async dispatch => {
   const result = await wipService.getAll()
   dispatch({
     type: 'FILL_RESULT_MATRIX',
     data: result,
   })
 }
}

export default parameterReducer
