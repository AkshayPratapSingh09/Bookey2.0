import React, { useState } from 'react'
import './inputBox.css';

const InputBox = () => {

  const[input,setInput] = useState("");
  return (
    <div class="input-main">
  <input
    class="input"
    value={input}
    onChange={e=>setInput(e.target.value)}
    placeholder="Enter any Link eg. https://github.com"
    name="text"
    type="text"
  />
  <div class="button-container">
    <button class="submit-button">
      <svg
        class="submit-icon"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 64 64"
        height="50"
        width="50"
      >
        <path
          fill-opacity="0.01"
          fill="white"
          d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
        ></path>
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="3.76603"
          stroke="white"
          d="M42.8496 18.7067L21.0628 44.6712"
        ></path>
        <path
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke-width="3.76603"
          stroke="white"
          d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
        ></path>
      </svg>
      <div class="rotate-45-bg"></div>
      <div class="rotate-neg45-bg"></div>
    </button>
  </div>
</div>

  )
}

export default InputBox