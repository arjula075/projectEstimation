import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'

const EpicComponent = () =>  {

  const result = useSelector(state => state)


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
          {result.future.resultMatrix.map(epic =>
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
      <div>{result.parameter.loadingState}</div>
    )
  }


}

export default EpicComponent
