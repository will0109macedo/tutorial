import React from 'react';

let count = 0;

const addOne = () => {
    count++;
    renderCounts();
    console.log(count)
};

const minusOne = () => {
    count--;
    renderCounts();
    console.log(count)
};

const reset = () => {
    count= 0;
    renderCounts();
    console.log(count)
};

const renderCounts = () => {
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