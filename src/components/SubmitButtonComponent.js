import React from 'react'
import { useDispatch } from 'react-redux'
import { fillResultMatrix } from '../reducers/futureReducer'
import { startLoading } from '../reducers/parameterReducer'

const SubmitButtonComponent = () =>  {
  const dispatch = useDispatch()

  const changeValues = (event) => {

    console.log('event from button component', event)
    dispatch(startLoading())


    console.log('startLoading ok', event)
    dispatch(fillResultMatrix())
    console.log('stopLoading before', event)

  }

  return (
    <div>
      <button type="button" onClick={changeValues}>Calculate</button>
    </div>
  )

}

export default SubmitButtonComponent
