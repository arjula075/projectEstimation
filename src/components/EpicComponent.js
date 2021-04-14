import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

const EpicComponent = () =>  {

  const dispatch = useDispatch()
  const result = useSelector(state => state)
  console.log('in EpicComponent', result)

  const spacing = {borderSpacing: '5px'}
  const bgColor = {backgroundColor: 'rgba(0,255,0,0.83)'}
  const bgColow = {backgroundColor: 'rgba(0,255,0,0.33)'}

  try {
    return (
      <div>
        <table>
        <tbody>
          <tr>
            <React.Fragment>
            <th>Name</th>
            <th>begin date</th>
            <th></th>
            <th>end date</th>
            <th></th>
            <th>span</th>
            </React.Fragment>
          </tr>
          {result.future.sprints.map(epic =>
            <tr>
            <React.Fragment>
              <td>{epic.name}</td>
              <td>{moment(epic.beginDate).format("L")}</td>
              <td> || </td>
              <td>{moment(epic.endDate).format("L")}</td>
              <td> || </td>
              <td>{epic.daySpan}</td>
            </React.Fragment>
          </tr>

        )}
        </tbody>
        </table>
      </div>
    )
  }
  catch (err) {
    return (
      <div>no data</div>
    )
  }


}

export default EpicComponent
