//Logical operators 

//&&
console.log(
  0 || 1 || 2 || 3
); //returns 1 , since 0 is false it will always return first argument that is true

//&&
console.log(
  0 && 1 && 2 && 3
); //returns 0 , && operator will return first value that is false 

//multiple operators example && and ||
console.log(
  0 || 1 && 2 || 3
); // returns 2 because '&&' has priority over '||'

//in details what line above does
// always use () but this example rarely used
console.log(
  0 || (1 && 2) || 3,
  0 || 2 || 3,
  2 || 3,
); //retuns 2

//in this example logical operator will return one of the arguments 
console.log(
  true || false, //true
  true || false, //true
  false || true, //true
  false || false, //false
);

function or(a, b) {
  if(a) {
    return a;
  } else {
    return b;
  }
}

console.log(
  or(true, true),
  or(true, false),
  or(false, true),
  or(false, false),
);

// when we use numbers where 5 is true and 3 is false then outcome will differ
//thats because logical operator 'or' return first argument that is true and not the outcome of logical operation itself
console.log(
  5 || 3, //5
  5 || 3, //5
  3 || 5, //3
  3 || 3, //3
);

function or(a, b) {
  if(a) {
    return a;
  } else {
    return b;
  }
}

console.log(
  or(5, 5),
  or(5, 3),
  or(3, 5),
  or(3, 3),
);


//similarly works 'and' operator but it will return first arguments that is 'false' out of the logical operation
//BOTH || and && not returning 'true' or 'false' a boolean  . they return a value of argument
console.log(
  5 && 3, //5
  5 && 3, //3
  3 && 5, //5
  3 && 3, //3
);

function and(a, b) {
  if(a) {
    return a;
  } else {
    return b;
  }
}

console.log(
  and(5, 5),
  and(5, 3),
  and(3, 5),
  and(3, 3),
);