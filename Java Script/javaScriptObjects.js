// OBJECTS IN JS

//example 1

const age = 36;

const user = {
  //key value syntax examples
  'firstName': 'Didi',
  "lastName": 'Fahim',
  fullName : 'Didi Fahim', 
  1 : 'Didi Fahim',

  //make actions with key using square brakets []
  ['is' + 'Married']: true,
  age, //using variable above
};


// print object properties
console.log(user);

//print as table key = value pair
console.table(user);

// ADD/PRINT/edit PROPERTIES

user.firstName = 'Diana'; //re asign new name
user['isCriminal'] = false; //add new object property

//same output
console.log(
  user['firstName'],
  user.lastName
);
//delete object properties works both ways
delete user['age'];
delete user.age;


//how to check if key is in object

console.log(
  'isMarries' in user, //return true
  user.hasOwnProperty('isMarried') //returns true , best way
);

// OBJECT KEY IS ALWAYS A STRING

  let firstName = 'Fakhim';

  console.log([firstName]); //will return 'undefined', because we're looking for key 'Fakhim' which does not exits in object


  //iterating through objects

  const point = {
    x: 1,
    y: 2,
    z: 3,
    1 : 123, //when iterating through keys, key with 'numbers' will be first in list
             // if only strings are in 'keys' they will be printed by last added to object
  }; 

  for (let key in point) {
    console.log(key, point[key]);
  }

  // GET array of Object keys

  const keys = Object.keys(point)
  console.log(keys);

  //GET array of Object values

  const values = Object.values(point);
  console.log(values);

  //GET array of key and values arrays

  const entries = Object.entries(point);
  console.log(entries); //you'll get array inside of an array 

  // important thing about iterating through object is that 'Object' creating array that can be passed in other methods
  // cycle 'for' is better when you need to retireve at values or keys at that momemnt of code execution
  // cycle 'for ' also considers inheritance while 'Object' only working with it's own keys 