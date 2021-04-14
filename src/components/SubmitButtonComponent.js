import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fillResultMatrix } from '../reducers/futureReducer'
import { startLoading, changeValues, stopLoading} from '../reducers/parameterReducer'
import wipService from '../services/wipService'

const SubmitButtonComponent = () =>  {
  const dispatch = useDispatch()
  const notes = useSelector(state => state)

  const changeValues = (event) => {

    console.log('changeValues event', event)
    console.log('event', event)
    const targetValue = event.data
    dispatch(startLoading())


    console.log('startLoading ok', event)
    wipService.getAll().then(value => {
        console.log(value)
        dispatch(fillResultMatrix(value))
        dispatch(stopLoading())
      }
    )
    console.log('stopLoading before', event)

  }

  return (
    <div>
      <button type="button" onClick={changeValues}>Calculate</button>
    </div>
  )

}

export default SubmitButtonComponent
