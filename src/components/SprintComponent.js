import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SprintComponent = (props) =>  {

  const result = useSelector(state => state)
  console.log('in SprintComponent', result)

  const spacing = {borderSpacing: '5px'}
  const bgColor = {backgroundColor: 'rgba(0,255,0,0.83)'}
  const bgColow = {backgroundColor: 'rgba(0,255,0,0.33)'}

    try {
      return (
        <div>
          <table>
          <tbody>
            {result.future.resultMatrix.map(epic =>
              <tr><td>{epic.name}</td>{epic.sprints.map(sprint =>
                <React.Fragment>
                  <td style={sprint.color}>{sprint.cumulativeCount}</td>
                </React.Fragment>
              )}
            </tr>

          )}
          </tbody>
          </table>
        </div>
      )
    }
  catch (err) {
    return (
      <div>
      {props.sprints[0]}
      </div>
    )
  }

}


export default SprintComponent
