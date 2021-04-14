import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import SprintComponent from './components/SprintComponent'
import EpicComponent from './components/EpicComponent'
import InputComponent from './components/InputComponent'
import SubmitButtonComponent from './components/SubmitButtonComponent'

const App = () => {
  const dispatch = useDispatch()
  const result = useSelector(state => state)

  //const resultMatrix = wipService.createResultMatrix()

  return (
    <div>
      <EpicComponent sprints = {result} />
      <SprintComponent sprints = {result} />
      <InputComponent />
      <SubmitButtonComponent />
    </div>
  )
}

export default App
