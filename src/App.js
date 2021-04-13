import React, { useState }  from 'react'
import SprintComponent from './components/SprintComponent'
import EpicComponent from './components/EpicComponent'
const epicService = require('./services/epicsService.js')
const sprintService = require('./services/sprintsService.js')
const wipService = require('./services/wipService.js')

const App = () => {
  const [result, setResult] = useState([[1, 2]])

  const resultMatrix = wipService.createResultMatrix()

  return (
    <div>
      <EpicComponent sprints = {resultMatrix} />
      <SprintComponent sprints = {resultMatrix} />
    </div>
  )
}

export default App
