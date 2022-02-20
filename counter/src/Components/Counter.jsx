import React from 'react'
import { useState } from 'react'

export const Counter = (props) => {
    const [counter, setCounter] = useState(props.number)
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={() => {setCounter(Number(counter) + 1)}}>Increment</button>
        <button onClick={() => {setCounter(Number(counter) - 1)}}>Decrement</button>
        <button onClick={() => {setCounter(Number(counter) * 2)}}>DoubleIncrease</button>
    </div>
  )
}
