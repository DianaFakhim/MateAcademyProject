const count = 3;

if (count === 1) {
  console.log ('One');
} else if (count === 2) {
  console. log ('Two');
} else {
  console. log ('Many');
}


//switch case with break
switch (count) {
 case 1:
 console. log ('One');
  break;

 case 2:
 console. log ('Two');
  break;
  
 default:
 console.log ('Many');
}


//use one same outcome for multiple conditions
//note that if there's no break then switch will run all cases and not checking if condition is true or false
//

const count2 = 5;
switch (count2) {
 case 1:
  console. log ('One');
  break;

 case 2:
 case 3:
 case 4:
  console. log ('A few');
  break;

default:
console. log ('Many');
}


// when using return we dont need to add break, switch will stop at the first case that is true
switch (count2) {
 case 1:
  return 'One';
  break;

 case 2:
 return 'Three';
 
default:
console.log ('Many');
}

//switch case is not making any calculations it is identifing whether case is true or false

switch (count2) { //wrong!!  has to be the condition true or false (count < 5)

  case count2 < 5:  // in this example it compares true === 5 (number cannot not equal boolean)
   return 'A few';
 
  case count2 > 10:
   return 'Many';
  
 default:
   return 'Some';
 }
