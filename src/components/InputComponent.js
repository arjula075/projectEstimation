import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoading, changeValues, stopLoading} from '../reducers/parameterReducer'

const InputComponent = () =>  {
   const dispatch = useDispatch()
   const notes = useSelector(state => state)
   console.log('notes', notes)



  const handleChange = (event) => {
    event.preventDefault()
    console.log('handleChange', event)
    const e = event.target.name
    const result = {
      type: event.target.name,
      data: event.target.value,
    }
    dispatch(changeValues(result))

  }

    try {
      return (
        <div>
          <form>
            <label>
            avgStoriesPerWeek
              <input
              type="text"
              name="avgStoriesPerWeek"
              value={notes.parameter.avgStoriesPerWeek}
              onChange={handleChange}
              />
          </label>
          <br />
          <label>
          numOfWeeksInSprint
            <input
            type="text"
            name="numOfWeeksInSprint"
            value={notes.parameter.numOfWeeksInSprint}
            onChange={handleChange}
            />
          </label>
        </form>

      </div>
      )
    }
  catch (err) {
    console.log('err', err)
    return (
      <div>
      ..
      </div>
    )
  }

}


export default InputComponent
