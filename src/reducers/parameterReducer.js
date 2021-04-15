const initialState = {
      parallerEpics: 3,
      avgStoriesPerWeek : 15,
      stdStoriesPerWeek :  9,
      avgStoriesPerEpic: 6,
      stdStoriesPerEpic: 5,
      numOfWeeksInSprint : 2,
      numOfSprintInYear : 26,
      sprintFuturesForecasted : 10,
      epicFuturesForecasted: 10,
      bugPercentage: 0.30,
      loadingState: 'no data',
      numberOfEpics: 70,
      yearsForecasted: 2
  }

const parameterReducer = (state = initialState, action) => {

  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case 'CHANGE_VALUES':
      newState[action.data.type] = action.data.data
      return newState
    case 'START_LOADING':
      newState.loadingState = 'Please wait, guru meditating'
      return newState
    case 'STOP_LOADING':
      newState.loadingState = 'Here is your data, master'
      return newState
    default:
      return state
    }
  }

export const changeValues = (content) => {

  // ok, this is just to has actor and parse the object to proper format
  // I could do this also in calling function, but then this would
  // be total pass-trhough

  const result = {
    type: 'CHANGE_VALUES',
    data: {
      data: content.data,
      type: content.type
    }
  }

  return result

}

export const startLoading = () => {

  return {
    type: 'START_LOADING',
    data: {
      data:['START_LOADING']
    }
  }
}

export const stopLoading = () => {

  return {
    type: 'STOP_LOADING',
    data: {
      data:['STOP_LOADING']
    }
  }
}

export default parameterReducer
