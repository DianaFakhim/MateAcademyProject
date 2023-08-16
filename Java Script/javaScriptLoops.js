// Infinite loops - Break and Continue

debugger;

// in this infinite loop we use 'break' where eventually when 'if' statement becomes true
// then infinite loop will break its cycle
for (let i = 0; true; i++) {
  console.log(i);
  console.log('ok');
 
  if (i >= 3) {
    break;
  }

}

console.log('--- DONE ---');

//in this loop we're checking whether 'i' is even number so when i is not even
//then 'continue' statements will not execute line 26 and 27 and will keep looping
for (let i = 0; i < 10; i++) {
  if (i % 2 !==0) {
    continue;
  }

  console.log('i');
  console.log('ok');
}

console.log('--- DONE ---');

//optimize your loop performance


//in this example we are globilizing variable count and calculations outside of the loop 
//so it will not perform exta repeated steps and opmize loop performace
const count = getCount();
const calcSeconds = 60 * 60 * 24;

for (let i = 0; i < count; i++) {
  const seconds = i * calcSeconds;

  console.log(seconds);

}

function getCount() {
  console.log('Counting');

  return 10;
}

//WHILE loop 

//while loop is used when we do not know how many iteration we will have,
//so we can put condition first and then do something


// in this example we're checking how many times number is divided by 2
//then we print count
let n = 1234;
let count2 = 0;

while (n % 2 === 0) {
  n = n / 2;
  count2++;
}

console.log(count2);

// we can use 'do' keyword and first do some action then check condition
//this is used when we need to do the action first time at any condition then we check condition
do {
  n = n / 2;
  count2++;
} while (n % 2 === 0)

console.log(count2);

//WHEN to use infinite loop

//in this function we are going through random numbers 
//until number is less than 0.2 but we
function getValue() {
  const value = Math.random();

  if (value < 0.2) {
    return 0;
  }

  return value;
}
//right here it will help us to avoif printing 0 and simplify the code
while (true) {
  let x = getValue();

  if (x === 0){
    break;
  }

  console.log(x);
}

console.log('--- Done ---')