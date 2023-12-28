import React from 'react'
import { useCounterStore } from '../store/useCounterStore'

const Counter = () => {
    const {count, increment, decrement, reset, setNumber} = useCounterStore();
  return (
    <div>
        <p>{count}</p>
        <button onClick={increment} style={{padding: 5}}>One UP</button>
        <button onClick={decrement} style={{padding: 5,  marginLeft:10, marginRight: 10}}>One DOWN</button>
        <button onClick={reset} style={{padding: 5}}>Reset</button>
        <button onClick={() => setNumber(3)} style={{padding: 5, marginLeft: 10}}>Set 3</button>
    </div>
  )
}

export default Counter