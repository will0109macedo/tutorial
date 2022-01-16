// getting that hook
import React, { useState } from 'react';

function App5() {
    // using that hook, useState(count)
    let [count, setCount] = useState(0);
    
    // plus 1 button
    const addOne = () => {
        setCount(count++)
    };
    
    // minus 1 button
    const minusOne = () => {
        setCount(count--)
    };
    
    // reset button
    const reset = () => {
        setCount(count = 0)
    };
    return (
        <div>
        <h1>Counter</h1>
        <h2>{count}</h2>
        <button onClick={addOne}>+1</button>
        <button disabled={count < 1} onClick={minusOne}>-1</button>
        <button disabled={count === 0} onClick={reset}>Reset</button>
        </div>
    )
}
  
export default App5;