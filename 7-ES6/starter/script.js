/* 
SOME DIFFERENCES BETWEEN ES5 AND ES6
*/

/*
//ES5
var name5 = 'Jane Miller';
var age5 = 29;
name5 = 'Jane Smith';
console.log(name5);//Jane Smith

//ES6
const name6 = "Jane Miller"; //const means that this variable can't be mutated
let age6 = 29; //let can be mutated
name6 = 'Jane Smith'; //this will apresent an error because a const cannot be mutated 
age6 = 34;//this is ok
console.log(name6);//script.js:15 Uncaught TypeError: Assignment to constant variable.
console.log(age6); //34
*/


//ES5
/*
function driverLicense5(haveAge) {
    if (haveAge) {
        var name = 'John';
        var yearOfBirth = '1990';
    }
    console.log(name + ' was born in ' + yearOfBirth + ', and he can drive.');//John was born in 1990, and he can drive.
}

driverLicense5(true);
*/

//ES6


function driverLicense6(haveAge) {
    if (haveAge) {
        let name = 'John';//the name can mutate
        const yearOfBirth = '1990';//the year of birth can't mutate
    }
    console.log(name + ' was born in ' + yearOfBirth + ', and he can drive.');
}

driverLicense6(true); //script.js:40 Uncaught ReferenceError: yearOfBirth is not defined at driverLicense6 (script.js:40 at script.js:43


//The variables created with "let" and "const", are usable only in the block scope

function driverLicense6(haveAge) {
    if (haveAge) {
        let name = 'John';//the name can mutate
        const yearOfBirth = '1990';//the year of birth can't mutate
        console.log(name + ' was born in ' + yearOfBirth + ', and he can drive.');
    }
}

driverLicense6(true);// John was born in 1990, and he can drive.


//for loops with let
/*
let i = 23;

for(let i = 0; i < 5 ; i++) {
    console.log(i);
}

console.log(i);

0
1
2
3
4
23

In this case the let inside the for loop only works in that block, in the global scope, the i continues with the 23 value;
*/

/*
var i = 23;

for(i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
0
1
2
3
4
5
*/




/* ==========================
    IIFE DECLARATIONS IN ES6
   ==========================

{
    let a = 20;
    const b = 30;
    var c = 40;
}

//console.log(a+b); //Uncaught ReferenceError: a is not defined
//a and b turns into private variables in this block scope, they aren't accessible in global scope
console.log(c); //40
*/

/*
=====================
    STRINGS
=====================
*/
 //ES5
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1989;

function calcAge(year) {
    return 2019 - year;
}

console.log('This is ' + firstName + ' ' + lastName + ', he borns in ' + yearOfBirth + ', and he is ' + calcAge(yearOfBirth) + ' years old');

//ES6
console.log(`This is ${firstName} ${lastName}, he borns in ${yearOfBirth}, and he is ${calcAge(yearOfBirth)} years old.`);


//NEW STRING METHODS

const n = `${firstName} ${lastName}`;

console.log(n.startsWith('J')); //it starts with 'J'? -> true


