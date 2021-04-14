import React from 'react'
import { useSelector } from 'react-redux'

const SprintComponent = () =>  {

  const result = useSelector(state => state)

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
      {result.parameter.loadingState}
      </div>
    )
  }

}


export default SprintComponent
