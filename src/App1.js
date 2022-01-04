import React from 'react';

var nameVar= 'Will';
var nameVar= 'Mike';

let nameLet= 'Jen';

const nameConst= 'Frank';

function getPetName() {
  var petName = 'Hal';
  return petName;
};

const fullName = "Will Macedo";

let getFirstName = (fullName) => fullName.split(' ')[0];

// let firstName;

// if (fullName) {
//   firstName = fullName.split(' ')[0];
// };

const squares = function (x, y, z) {
  return x * y + z;
}

const square = (x, y, z) => x * y + z;

const add = (a, b) => { 
  return a + b 
};

const user1 = {
  name: 'Will',
  cities: ['Miami', 'Hollywood', 'Lima'],
  printPlacesLived() {
    const cityMessages = this.cities.map((city) => {
      return this.name + ' is from ' + city + ' ';
    });
      return cityMessages;
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has live in ' + city)
    // });
  } 
};  

const multiplier = {
  number: [3, 5, 9],
  multiplyBy: 2,
  multiply() {
    return this.number.map((numbers) => numbers * this.multiplyBy + ', ');
  }
};

const text = {
  title:"Title",
  subtitle: "Text display",
  options: ['One', 'Two']
};

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

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
};

const template2 = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

function App1() { return template }
  
export default App1;