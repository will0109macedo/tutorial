import React from 'react';
 // sets up the count
let count = 0;
 // function
const addOne = () => {
    // adds 1
    count++;
    // for re rendering
    renderCounts();
    console.log(count)
};

const minusOne = () => {
    // minus 1
    count--;
    renderCounts();
    console.log(count)
};

const reset = () => {
    // resets count to 0
    count= 0;
    renderCounts();
    console.log(count)
};

// re rendering method
const renderCounts = () => {
    //template
    // {count} renders it
    //onClick={addOne} calls the addOne function
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
    </div>
);
return templateTwo;
};

function App2() { return renderCounts() } 

export default App2;