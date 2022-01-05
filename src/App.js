import React, { useState } from 'react';

function App() {
    let [count, setCount] = useState(0);
    
    const addOne = () => {
        setCount(count++)
    };
    
    const minusOne = () => {
        setCount(count--)
    };
    
    const reset = () => {
        setCount(count = 0)
    };
    return (
        <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={addOne}>+1</button>
        <button disabled={count === 0} onClick={minusOne}>-1</button>
        <button disabled={count === 0} onClick={reset}>Reset</button>
        </div>
    )
}
  
export default App;