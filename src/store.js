import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import futureReducer from './reducers/futureReducer'
import parameterReducer from './reducers/parameterReducer'

const reducer = combineReducers({
  future: futureReducer,
  parameter: parameterReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store
