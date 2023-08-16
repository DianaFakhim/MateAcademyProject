 //if value will be skipped and not entered by user we get 'undefined'
 //we're putting the default of b = 0 so result will not be NaN
 //in this example we use one value in default , so at least one value will display 
 
 function sum (a, b = 0) {
  return a + b;
}

const result = sum(4, 8);
console.log(result);

//how to deal with functions that passing more values than expected or if we do not know how many agruments will be passed

//example 1 , if values will be more than 2
function sum (a, b, ...args) {
  console.log(args); 
}
sum(1,2,3,4); // result --> 1, 2 [3, 4] '...args' will create an array of additional args


//example 2 if we do not know how many will be passed
function sum (...args) {
  console.log(args); 
}
sum(1,2,3,4); // result --> [1, 2, 3, 4] '...args' will create an array of all args passed

// Arrow function declaration =>

//regular function declaration
function getCircleSquare1(r) {
  return Math.PI * r * r;
};

//assigning to a variable function
const getCircleSquare2 = function(r) {
  return Math.PI * r * r;
};

//arrown => function declaration where r is agrument passed
const getCircleSquare3 = (r) => {
  return Math.PI * r * r;
};

const getCircleSquare4 = (r) => Math.PI * r * r; // short version
const getCircleSquare5 = r => Math.PI * r * r; // even shorter version

