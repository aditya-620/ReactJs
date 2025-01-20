import { useState } from 'react'

import './App.css'

import {useDispatch, useSelector} from 'react-redux'
import { getAllData } from './features/gitUserSlice';
function App() {
  
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.app;
  });

  if(data.loading){
    return <h1>Loading...</h1>
  }
  if(data.error != null){
    return <h3>{data.error}</h3>
  }

  return (
    
    <>
      <h1>hello</h1>
      <button onClick={() => dispatch(getAllData())}>Get GitHUb users</button>
      {data.users.map((ele) => (
        <li key={ele.id}>{ele.login}</li>
      ))}
    </>
  )
}

export default App
