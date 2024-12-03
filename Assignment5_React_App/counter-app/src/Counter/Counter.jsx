import React, { useState } from 'react';
import './Counter.css';

export default function Counter() {
  const [counter, setCounter] = useState(0); 

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0); 

  return (
    <div>
      <div>My Counter: {counter}</div>
      <button onClick={increment} className="button-4">Increment</button>
      <button onClick={decrement} className="button-4">Decrement</button>
      <button onClick={reset} className="button-4">Reset</button>
    </div>
  );
}
