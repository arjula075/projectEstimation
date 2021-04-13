import React, { useState }  from 'react'
import axios from 'axios'
import SprintComponent from './components/SprintComponent'
import EpicComponent from './components/EpicComponent'

const App = () => {
  const [result, setResult] = useState([['waiting for data', 'waiting for data']])

   axios
     .get('http://localhost:3001/api/notes')
     .then(response => {
       console.log('promise fulfilled')
       console.log('response.data', response.data)
       setResult(response.data)
     })

  //const resultMatrix = wipService.createResultMatrix()

  return (
    <div>
      <EpicComponent sprints = {result} />
      <SprintComponent sprints = {result} />
    </div>
  )
}

export default App
