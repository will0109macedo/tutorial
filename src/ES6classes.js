import React from 'react';

class Person {
    // constructor + (argument list(s), = is for default)
    // you're constructing the components with the arguments
    constructor(name = 'Anonymous', age = 0) {
    // this = Person, .name sets the name, getting it from the name string
    // || = OR
        this.name = name;
        this.age = age;
        //  no commas inside constructors
    }
    // define next method here
    // this method can be called by the instance of the class
    getGreeting() {
        // `` enables us to inject this.name
    return `Hi. I am ${ this.name }`;
    }
    getDescription() {
        return `${ this.name } is ${ this.age } year(s) old.`
    }
};

// 
class Student extends Person {
    // setting up the 2 arguments and adding 1 more
    constructor(name, age, major) {
        // calls the parent class Person!!!! and gets the 2 arguments
        super(name, age);
        // sets up 3rd argument
        this.major = major
    }
        // adding another method but only for Student
    hasMajor() {
        // !! switches a full string to true
        // !! switches empty string to false
        // ! switches empty string to true
        return !!this.major
    }
    // over writing method for Student
    getDescription() {
        // sets up variable to be called later description
        // super.getDescription calls on the parent constructor function
        let description = super.getDescription();
        // if, this = Student, hasMajor is true
        if(this.hasMajor()) {
            // description line + (little space between sentences) new line
            description += ` Their major is ${this.major}`;
        }
        // returns description either from getDescription
        // or by adding the major
        return description
    }
};

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if(this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`
        }
        return greeting
    }
};

const me = new Traveler('Will Macedo', 31, 'Hollywood');

console.log(me.getGreeting())

const other = new Student();

console.log(other.getDescription());

function App5() {
}

export default App5;