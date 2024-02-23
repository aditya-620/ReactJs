import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //let counter = 15;
  
  //yeh hook state ko change karne ke liye respnsible(not the value, but the UI part)
  //here hook returns an array containing two elements.. a varible and a method which modify the variable
  let [counter, setCounter] = useState(15)

  const addValue = () => {
    if(counter <20 && counter >= 0){
      counter = counter + 1
      setCounter(counter)
    }
  }

  const removeValue = () => {
    if(counter <= 0){
      return
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>aditya rastogi</h1>
      <h2>counter value: {counter} </h2>

      <button onClick={addValue}>add value</button>  
      <button onClick={removeValue}>remove value</button>
    </>
  )
}

//on line 34 & 35, we are just passing the reference on onClick, as when the button is pressed then only it will execute

export default App
