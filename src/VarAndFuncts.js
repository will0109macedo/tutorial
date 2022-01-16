import React from 'react';

// variables
var nameVar= 'Will';
var nameVar= 'Mike';

// let
let nameLet= 'Jen';

// const
const nameConst= 'Frank';


// function with var inside, if you render you gotta render the function
function getPetName() {
  var petName = 'Hal';
  return petName;
};

// const fullName
const fullName = "Will Macedo";

// takes (fullName) obj and => fullname.split('')[0]; separates the first name
let getFirstName = (fullName) => fullName.split(' ')[0];

// let firstName;

// if (fullName) {
//   firstName = fullName.split(' ')[0];
// };


// function with multiple objs and returning objs while messing with them
const squares = function (x, y, z) {
  return x * y + z;
}

// arrow function of ^^^
const square = (x, y, z) => x * y + z;


const add = (a, b) => { 
  return a + b 
};

const user1 = {
  name: 'Will',
  cities: ['Miami', 'Hollywood', 'Lima'],
  // function using the objs ^^^
  printPlacesLived() {
    // this calls user1 then we get the cities and separate them with map
    //give the value city to each 
    const cityMessages = this.cities.map((city) => {
      // return mssg using objs
      return this.name + ' is from ' + city + ' ';
    });
    // run cityMssgs with printPlacesLived
      return cityMessages;
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has live in ' + city)
    // });
  } 
};
// To run this you will need user1.printPlacesLived()

const multiplier = {
  number: [3, 5, 9],
  multiplyBy: 2,
  multiply() {
    // this = multiplier, number = [], map = separates
    // new number is = to number * multiplyBy = 2
    // it returns mssg for every obj in the array
    return this.number.map((numbers) => numbers * this.multiplyBy + ', ');
  }
};
// To run this you will need multiplier.multiply()


// const for texts
const text = {
  title:"Title",
  subtitle: "Text display",
  options: ['One', 'Two']
};

// template to render
// text gets pulled from the top + title
// && if theres text.subtitle then print it
// if the length is bigger than 0 show 1 messg : if not this one
const template = (
<div>
  <h1>{text.title}</h1>
  {text.subtitle && <p>{text.subtitle}</p>}
  <p>{text.options.length > 0 ? 'Here are your options' : 'No options'}</p>
  <ol>
  <li>1st</li>
  <li>2nd</li>
  </ol>
</div>
);

const user = {
  name: "Will",
  age: 30,
  location: "Hollywood"
};

// pulls the location from the ^^^
function getLocation(location) {
  // if theres a location
  if (location) {
    // render this mssg
    return <p>Location: {location}</p>;
  }
};

// time to render
// if there's a user.name ? print user.name : if not anon
// if user age is >= than 18 show following mssg
// fires up function (var.argument)
const template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

function App1() { return template2 }
  
export default App1;