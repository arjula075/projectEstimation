import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  changeValues } from '../reducers/parameterReducer'

const InputComponent = () =>  {
   const dispatch = useDispatch()
   const notes = useSelector(state => state)


   const handleChange = (event) => {
      event.preventDefault()
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
            average stories done per Week
              <input
              type="text"
              name="avgStoriesPerWeek"
              value={notes.parameter.avgStoriesPerWeek}
              onChange={handleChange}
              />
          </label>
          <br />
          <label>
          standard deviation of stories done per Week
            <input
            type="text"
            name="stdStoriesPerWeek"
            value={notes.parameter.stdStoriesPerWeek}
            onChange={handleChange}
            />
          </label>
          <br />
          <label>
          avgStoriesPerEpic
            <input
            type="text"
            name="avgStoriesPerEpic"
            value={notes.parameter.avgStoriesPerEpic}
            onChange={handleChange}
            />
          </label>
          <br />
          <label>
          stdStoriesPerEpic
            <input
            type="text"
            name="stdStoriesPerEpic"
            value={notes.parameter.stdStoriesPerEpic}
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
          <br />
          <label>
          futuresForecasted for epics
            <input
            type="text"
            name="epicFuturesForecasted"
            value={notes.parameter.epicFuturesForecasted}
            onChange={handleChange}
            />
          </label>
          <br />
          <label>
          futuresForecasted for sprints
            <input
            type="text"
            name="epicFuturesForecasted"
            value={notes.parameter.sprintFuturesForecasted}
            onChange={handleChange}
            />
          </label>
          <br />
          <label>
          bugPercentage
            <input
            type="text"
            name="bugPercentage"
            value={notes.parameter.bugPercentage}
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
