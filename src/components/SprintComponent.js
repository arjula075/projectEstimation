import React from 'react'

const SprintComponent = (props) =>  {

  console.log('props', props)

  const spacing = {borderSpacing: '5px'}
  const bgColor = {backgroundColor: 'rgba(0,255,0,0.83)'}
  const bgColow = {backgroundColor: 'rgba(0,255,0,0.33)'}

    try {
      return (
        <div>
          <table>
          <tbody>
            {props.sprints.map(epic =>
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
      {props.sprints[0]}...
      </div>
    )
  }

}


export default SprintComponent
