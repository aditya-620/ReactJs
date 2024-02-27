import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName : "aditya",
    age : 20
  }
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-3'>tailwindcss</h1>
      {/* <Card channel ="aditya" ourObject = {myObj}/> */}
      <Card username = "aditya" btntxt = "click me" />
      <Card username = "shaurya" />
    </>
  )
}

export default App
