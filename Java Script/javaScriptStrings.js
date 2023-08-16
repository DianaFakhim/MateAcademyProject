//STRINGs

const a = 'aaa';
const b = 'bbb';
const c = 'ccc';

   //Adding strings
// 1.method of interpalation
console.log(`${a}${b}${c}`);

// 2.method of concationation
console.log(a + b + c);

//how to add a quotes inside of quotes
const y = 'No, it isn\'t'; //add slash

const i = 'No, it \/ isn\'t' //add 2 slashes and if you want to actually add a slash
const o = 'No, it \n isn\'t' //will add text to a new line or '\t' will use tab

//use slash to find symbols signs in different coding standarts
console. log('\xA9'); // 00 - FF this is copyright sign
console. log ('\ud0A9'); // 0000 - FFFF (UTF-16) this is also copyright sign
console. log('lu{1F514|'); // 0 - 10FFFF (UTF-32) this is 'bell' icon :)

console. log("lu{1F514|"); //double quotes works the same as single


//usage of quotes in HTML
const s1 = '«div class="spinner">Loading...</div>';
console. log (s1);

const a1 = 2;
const b1 = 5;

//better to use reverted quotes in html so it will save formatting
const s2 = ` 
  <h1>Title</h1>
    <ul>
      <li>${a1} + ${b1} = ${a1 + b1}</li>
      <li>${a1} * ${b1} = ${a1 * b1}</li>
      <li>${a1} / ${b1} = ${a1 / b1}</li>
    </ul>
`;

console. log (s2);

//string methods

const word = 'abcdebc';
const part = 'bc';

//looking for  bc in string 'word'
console.log (
  word.includes (part), 
  word.indexOf (part, 3), //search starting from index 3
  word.lastIndex0f (part, 3), //search starting from index 3 from end
  word.startsWith(part),
  word.endsWith(part),
);

//casing

// Note! when chaching casing JS is creating a new line, not changing and swaping existing one

let message = 'Hello, Misha!'
let upperMessage = message. toUpperCase () ;
let lowerMessage = message. toLowerCase() ; I
console. log (upperMessage) ; // HELLO, MISHA! 
console. log (lowerMessage); // hello, misha! 
console. log (message); // Hello, Misha!



// charCodeAt() method will allow to find what is the code for symbol in string
// String.fromharCode(code) give you a symbol under code



const message1 = 'Hello, world!';


console. log (message1);

for (let i = 0; i < message1.length; i++) { 
  const code = message1.charCodeAt(i);
  console.log(message1[i], code, String.fromharCode(code)) ; // H 72 H
}

//each symbol in JS has a code 
const message2 = 'hello, world!';

//in this example if we compare this 2 message they will return false
console.log(
  message1,
  message2,
  message1 > message2
);

console.log(message1.charCodeAt(0), message2.charCodeAt(0)); //because H and h have different codes 
//and it compares code of symbol not lenght of string


//method localeCompare() used to compare actual number symbols and not its code
//it will return 1 if message1 is bigger than message2, 0 id message1 equals message2 and -1 if msg1 is smaller than msg2
console.log(message1.localeCompare(message2) > 0); 

//string slicing 

const message3 = '0123456789';

console.log (message3.substring (3, 5), // 34567 
message3.substring(3, 5), // 34
message3.slice(3, 5)); // 34

//in this case will return empty because ending index has be later than starting index
let results = message3.slice(-1, 1);
console.log(results);

//TRIM STRINGS 

const phrase = '    First    Last  ';

const trimmed = phrase.trim(); // 'First Last'
const trimmedRight = phrase.trimmedRight(); // '     First Last'
const trimmedLeft = phrase.trimmedLeft(); // 'First Last     '


// METHOD TO HIDE SENSATIVE INFO 

const cardNumber = '2597 5269 7640 6966';

const result = cardNumber. slice (-4) ;

// this method will pass card info in this formats
// **** **** **** **** 6966
console.log (result.padStart (19, '***** '));
console.log (result. padEnd (19, '***** '));

// METHOD REPEAT 
//this will give us a line of 15 dashes '---------------'
const divider = '-'.repeat(15);

// Replace
const phrase1 = 'what time is it';

//when using replace method it will replace only once
const result1 = phrase. replace(' ', '-');

//use regular expressions to have permanent replacement
const result2 = phrase. replace(/ /g, '-');

console.log(phrase1) ; 
console.log(result1) ;
