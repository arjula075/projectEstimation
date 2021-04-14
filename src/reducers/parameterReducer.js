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
      loadingState: 'no data'
  }

const parameterReducer = (state = initialState, action) => {
  console.log('action', action)
  console.log('state', state)
  console.log('initialState', initialState)
  const newState = JSON.parse(JSON.stringify(state))
  switch(action.type) {
    case 'NUM_WEEKS_IN_SPRINT':
      newState.numOfWeeksInSprint = action.data.data
      return newState
    case 'AVG_STORIES_PER_WEEK':
      newState.avgStoriesPerWeek = action.data.data
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

  switch (content.type) {
    case 'avgStoriesPerWeek':
      console.log('changeValues reducer', content)
      return {
        type: 'AVG_STORIES_PER_WEEK',
        data: {
          data: content.data
        }
      }
    case 'numOfWeeksInSprint':
      console.log('changeValues', content)
      return {
        type: 'NUM_WEEKS_IN_SPRINT',
        data: {
          data: content.data
        }
      }
    default:
      return content
  }

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
