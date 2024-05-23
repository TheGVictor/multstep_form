//Components
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'
import UserForm from './components/UserForm'
import ReviewForm from "./components/ReviewForm"
import Thanks from './components/Thanks'
import Steps from './components/Steps'

//Hooks
import { useForm } from './Hooks/useForm'

import { useState } from 'react'
import './App.css'


function App() {

const formTemplate = {
  name: "", 
  email: "",
  review: "",
  comment: ""
}

  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponent = [
    <UserForm data = {data} updateFieldHandler = {updateFieldHandler}/>,
    <ReviewForm data = {data} updateFieldHandler = {updateFieldHandler}/>,
    <Thanks data = {data} updateFieldHandler = {updateFieldHandler}/>
  ]

  const {currentStep, currentComponent, changeStep, isFirstStep, isLastStep} = useForm(formComponent)

  return (
  <div className="app">
    <div className="header">
      <h2>Deixe sua avaliação</h2>
      <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
    </div>
    <div className="formContainer">
      <Steps currentStep={currentStep}/>
      <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
        <div className="inputsContainer">{currentComponent}</div>
        <div className="actions">
          
          {!isFirstStep && (
            <button type='button' onClick={() => changeStep(currentStep - 1)}>
            <GrFormPrevious/>
          <span>Voltar</span>
          </button>
          )}

          {!isLastStep ? (
            <button type='submit'>
            <span>Avançar</span>
            <GrFormNext/>
            </button>
          ) : (
            <button type='button'>
            <span>Enviar</span>
            <FiSend/>
            </button>
          )}
        </div>
      </form>
    </div>
  </div>
  )
}

export default App
