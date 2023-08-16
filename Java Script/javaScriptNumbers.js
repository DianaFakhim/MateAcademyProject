//ways of declaring numbers
//all below values equal 42

let x1 = 42;

let x2 = 0b101010; //Binary number system
let x3 = 0o52; //The octal number system
let x4 = 0x2A; //same as x4 = 0x2a; Hexadecimal number system

console.log(x1, x2, x3, x4);

let y1 = 42.000;
let y2 = 42.;

let y3 = 0.42e2; //0.42 * (10 ** 2) //возвести в степень "**"
let y4 = .42e2; //this way mostly not used 

let y5 = 42000e-3; //42000 / (10 ** 3)

console.log(y1, y2, y3, y4, y5);


//BINARY AND HEX NUMBER SYSTEMS

const decimal = 100101;

/* 
  example of decimal number system (we use in life)
  100101 = 1*100000 + 0*10000 + 0*1000 + 1*100 + 0*10 + 1*1 (base-10)

*/

 // example how binary number calculated (base-2)
const binary = 0b100101;
/*

  example of binary
   100101 = 1*32 + 0*16 + 0*8 + 1*4 + 0*2 + 1*1 

 */

const hex = 0x100101;

/*

  example of hexadecimal (base-16)

   100101 = 1*1048576 + 0*65536 + 0*4096 + 1*256 + 0*16 + 1*1 

   meaning of letters in hex format: (only up to 15)

   a - 10
   b - 11
   c - 12
   d - 13
   e - 14
   f - 15

 */

console.log(`decimal 100101 = ${decimal}`);
console.log(`binary 100101 = ${binary}`);
console.log(`hex 100101 = ${hex}`);

// Using 'to String' method to convert numbers into different number systems

 let decimal2 = 123;
//example with binary (base-2)
console.log(`converted using toString + ${decimal2.toString(2)}`);
//example with hex (base-16)
console.log(`converted using toString + ${decimal2.toString(16)}`);


/*
  Infinity in Java script
when a number is longer than 64 bit program will run infinite

to check you infinite number use following:
*/

const t = Infinity;

console.log(isFinite(t)); //will return true

// NaN - means Not A Number
//example

const k = 10 * '30gghd'; //will return NaN

/* to check value that is not a NaN you can use 'isNaN'
    but in many different scenarious that can get broken 
    better to use 'isFinite' that checks for 'Infinite' and "NaN"

    Java Script is not a strict language so when checking value
    better to use .trim() && isFinite methods when checking input
    'trim' doesn't trim spaces in between charecters example '  5  6  '
*/

// Trim to 2 decimals
const float = 12.0000001;
float.toFixed(2); //returns 12.01

// Math functions in Java Script https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

console.log('----task----')
debugger;
function getLeaders(numbers) {
  // write your code here
  const arrayOfSums = [];

  for (let i = 0; i < numbers.length; i++) {
    const newArr = numbers.toSpliced(i, 1);

    let sum = 1;
    for (let y = 0; y < newArr.length; y++){
          sum = sum * newArr[y];
          
    }
    arrayOfSums.push(sum);
  }
  console.log(arrayOfSums);
}
getLeaders([4, 5, 2, 19, 8, 80]);


