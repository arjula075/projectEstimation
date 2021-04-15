import wipService from '../services/wipService'

const initialState = {
  resultMatrix: null,
  }

const parameterReducer = (state = initialState, action) => {

  switch(action.type) {
    case 'FILL_RESULT_MATRIX':
      const result = {}
      result.resultMatrix = action.data
      return result
    default:
      return state
  }

}

export const fillResultMatrix = (parameters) => {

  return async dispatch => {
   const result = await wipService.getAll(parameters)
   dispatch({
     type: 'FILL_RESULT_MATRIX',
     data: result,
   })
 }
}

export default parameterReducer
