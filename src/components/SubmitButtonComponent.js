import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fillResultMatrix } from '../reducers/futureReducer'
import { startLoading } from '../reducers/parameterReducer'

const SubmitButtonComponent = () =>  {
  const dispatch = useDispatch()
  const parameters = useSelector(state => state)

  const changeValues = (event) => {

    dispatch(startLoading())
    dispatch(fillResultMatrix(parameters.parameter))

  }

  return (
    <div>
      <button type="button" onClick={changeValues}>Calculate</button>
    </div>
  )

}

export default SubmitButtonComponent
