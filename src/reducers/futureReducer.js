const initialState = {
  resultMatrix: null,
  }

const parameterReducer = (state = initialState, action) => {
  console.log('action', action)
  console.log('state', state)
  console.log('initialState', initialState)
  switch(action.type) {
    case 'FILL_RESULT_MATRIX':
      const result = new Object()
      result.resultMatrix = action.data.data
      return result
    default:
      return state
  }
  return state
}

export const fillResultMatrix = (content) => {

  return {
    type: 'FILL_RESULT_MATRIX',
    data: {
      data: content
    }
  }
}

export default parameterReducer
