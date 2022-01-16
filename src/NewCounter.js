import React from "react";


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
            name: 'Will',
        };
    }
    handleAddOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    };
    
    handleMinusOne () {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    };
    
    handleReset () {
        this.setState(() => {
            return {
                count: 0
            };
        });
    };
    
    render() {
        return (
            <div>
            {this.state.name}
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne} 
            disabled={this.state.count > 4}>+1</button>
            <button onClick={this.handleMinusOne} 
            disabled={this.state.count < 1}>-1</button>
            <button onClick={this.handleReset} 
            disabled={this.state.count === 0}>Reset</button>
            </div>
        )
    }
}

function App() { return <Counter />
}

export default App;