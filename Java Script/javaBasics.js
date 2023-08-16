'use strict'; //using this extention will not allow to declare same variables 2 times or have it undefined. 
            //it is helpful to use accross the projects


//code style to follow
let myFirstValue = 'myfirstvalue';
let mySecondValue = myFirstValue + 'mysecondvalue';
let myThirdValue = myFirstValue + mySecondValue + 'mythirdvalue';

console.log(myFirstValue, mySecondValue, myThirdValue);


//diffient syntax in incerement gives different results

let a = 0;
let b = ++a;

console.log(a); // right now 'a' equals 1
console.log(b); // right now 'b' equals 0 and value has not been assigned

//this is because in this case we're using 'post fix incerement ' and '++' is in front;

//if i use '++' before then it will give  variable 'b' different resulf 

let a2 = 0;
let b2 = a++;

console.log(a); // right now 'a' equals 1
console.log(b); // right now 'b' equals 1

//this is because in this case we're using 'post fix incerement ' and '++' is in front;

//use incerement separately !!

let a3 = 0;
a++;
let b3 = a; 

console.log(a); // right now 'a' equals 1
console.log(b); // right now 'b' equals 1

//different syntax of conditional statements

//number 1 example is better to use for selection of value depending on condition
let age = 18;
(age > 18)
  ? console. log ('Adult')
  : (age > 7)
  ? console. log ('Child')
  : console. log ('Baby') ;


// number 2 example is better to use for conditions 
if (age > 18) {
  console. log('Adult');
} else if (age > 7) {
  console. log('Child');
} else {
  console. log ('Baby');
}


  //best usage example of #1 where we selecting a value best on condiotion
  //still better to use if's for simplicity of further changes or modifications in code.

  let message = (age > 18)
    ? 'Adult'
    : (age > 7)
      ? 'Child'
      : 'Baby';
  
  console.log(message);

  // checkout for more coding styles of Java Script https://javascript.info/coding-style