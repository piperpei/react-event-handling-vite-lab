import { useState } from 'react'
import './App.css'
import PasswordInput from './components/PasswordInput'
import SubmitButton from './components/SubmitButton'

function App() {

  return (
    <div>
      <PasswordInput/>
      <SubmitButton/>
    </div>
  )
}

export default App
