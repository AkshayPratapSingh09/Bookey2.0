import { useState } from 'react'
import './App.css'
import InputBox from './InputBox'
import Cards from './Cards'

function App() {
  
  return (
    <>
    <div className="container">

      <div className="navbar">First</div>
      <div className="title">Your Daily
        <div className="maintitle">Bookey</div>For You!</div>
      <div className="addWebbox">

      <InputBox/>

      </div>
      <div className="card-container">
        <Cards/>
      </div>
    </div>
    </>
  )
}

export default App
