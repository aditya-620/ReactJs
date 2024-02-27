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
      // counter = counter + 1
      // setCounter(counter)

      //interview ques: what if we have to do setcounter(counter + 1) 4 times
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      // setCounter(counter + 1)
      //do will it increment the value from 15 to 19 in onw click?
      //NO, as the useState created a whole package, it see that all the method is doing the same thing so the counter will increment from 1 only (i.e. 15 to 16)
      
      //so, isin't there any way?
      //the setCounter method have a call back
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)
      setCounter(prevCounter => prevCounter + 1)
      //now, they do not go as a bunch of package and beacuse of it when line 28 return then line 29 execute and so on

      //here: prevCounter, counter, setCounter are just names and can be of any name what the programmer want
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
