//Conversion to boolean

let condition1 = 12;

console. log (
Boolean (condition1), 
  !!condition1 //двойное отрицание --> return false
);
//if your condition will be number and not a boolean then it will always be true
if (condition1) {
console. log ('Hello');
console. log('world!');
}

/// false will return empty value like 

let condition = false;
condition = 0;
condition = NaN;
condition = On;
condition = '';
condition = null;
condition = undefined;

//empty objects or arrays will return true condition = {}, or condition = []

//CONVERT to Number

const value = '100';
console. log (Number (value), 'Number'); //Number function
console. log (+value, '+'); //add plus sign

//parsing with other symbols
value = '100as';

console. log (parseFloat (value), 'parseFloat'); //return 100
console. log (parseInt (value), 'parseInt'); //returns 100

//additional function to convert to octa number system
value = '100.5';
console. log (parseInt (value, 2), 'parseInt'); //result = 4


// == VS ===

console. log(
  2 === 2.0, //true
  2 == 2.0) //true
 

  console. log(
  2 !== '2.0', //true
  2 != '2.0') //fasle  , returns false because '==' comparing types 'number vs string'

  //NaN value never equals itself

  console.log(
    NaN === NaN, //false
    NaN == NaN, //false

    //to check strictly use Object.is
    Object.is(NaN, NaN),//returns true
  );

  // Compare different types of data

  console.log ('2' > 18); // false  -->converting to number
  console.log (2 > '18'); // false -->converting to number
  console.log ('2' > '18'); // true --> strings comparing by symbols code (UTF8 or other)


  
  console.log(2 == ' \t 2. \n '); //true -- because it is parsing string to a number and trimming all spaces and other characters
  console.log (1 == true); //true (because we not using strict compare '===' )
  console.log(0 == null); //false -->null not converting to number
  console.log (null == undefined); //true 
  

  // NOTE better not to use '==' but use '===' to compare different types of data
  //and when comparing is converting both value to same data type




