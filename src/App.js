import React, { useEffect }  from 'react'
import axios from 'axios'
import SprintComponent from './components/SprintComponent'
import EpicComponent from './components/EpicComponent'
import InputComponent from './components/InputComponent'
import SubmitButtonComponent from './components/SubmitButtonComponent'

const App = () => {


  return (
    <div>
      <EpicComponent />
      <SprintComponent  />
      <InputComponent />
      <SubmitButtonComponent />
    </div>
  )
}

export default App
