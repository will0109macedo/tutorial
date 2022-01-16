import React from "react";

const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
};

// .bind lets you use this. from another obj
// and lets you set up attributes with { }
// const getName = obj.getName.bind({ name: 'Will' });
// thats to make it work
//console.log(getName());
// Parent component of them all
// Options has a child of its own Option
class IndecisionApp extends React.Component {
    render() {
        // variable to pass down to values
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing three']
        // title to set up, {title} to call the variables
        return (
        <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
        </div>
        )
    }
}

// makes it my component <Header /> and my bitch
// Uppercase so I can use the class component
class Header extends React.Component {
    // React.Component always renders and then return***
    render() {
        // this.props take the title value and converts it
        // over into a object
        console.log(this.props);
        // what it shows
        // this.props.title to call it from
        // where it's returned
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h3>{this.props.subtitle}</h3>
            </div>
        )
    }
} 

class Action extends React.Component {
    // setting up handlePick method
    // before rendering it
    handlePick() {
        alert('Hi')
    }
    // render() follow by jsx with {}
    render() {
        // remember everything inside the return with ()
        // this calls Action, .handlePick calls the method
        return (
        <div>
        <button onClick={this.handlePick}>What should I do?</button>
        </div>
        )
    }
}

class Options extends React.Component {
    // constructor and super not to break app
    constructor(props) {
        super(props);
        // calling itself with bind(this) to be able to use it after
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        alert('Sup')
    }
    // React.component extends any arguments ohhhhhh
    render() {
        // inside {} JSX
        // this.props.options to call them
        // .map to set a new array per each object
        // (option) is the name for each single object
        // it needs a key if not error*
        // {option} to call each one
        // optionText={option} to passed it down
        // to child component Option
        return (
            <div>
            <button onClick={this.handleRemoveAll}>Remove All</button>
            {
                this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }
            </div>
        )
    }
}

// Option inside of Options with different code (starting from React.)
// this.props.optionText from parent component
class Option extends React.Component {
    render() {
        return (
        <div>
        {this.props.optionText}
        </div>
        )
    }
}

class AddOption extends React.Component {
    // argumente that we need is the event aka e***
    handleAddOption(e) {
        // e.preventDefault always on forms
        // so we don't get a full page refresh
        e.preventDefault();
        // setting up option variable
        // e.target.elements = event+form+input"elements"+name(option)
        // value = to the actual text
        //.trim() to get rid of extra blank spaces
        const option = e.target.elements.option.value.trim();
        // if there is an option then do...
        if(option) {
            alert(option)
        }
    }
    render() {
        // form does handleAddOption
        // with input text and namig the text input
        // as option to be used elsewhere
        // button fires up the whole form
        return (
            <div>
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button>Add Option</button>
            </form>
            </div>
        )
    }
}

function App() { return <IndecisionApp />
}

export default App;