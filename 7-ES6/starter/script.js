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

/*
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
*/

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
console.log(n.endsWith('Sm')); //it ends with 'Sm'? -> false
console.log(n.includes('oh')); //it includes ' '? -> true John Smith
console.log(firstName.repeat(5)); //it repeats the string 5 times JohnJohnJohnJohn
console.log(`${firstName} `.repeat(5)); //it repeats the string 5 times John John John John
*/

/*
========================
    ARROW FUNCTIONS
========================

const years = [1989, 1965, 1992, 1996];

//ES5
var ages5 = years.map(function(el) {
    return 2019 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2019 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
console.log(ages6); //we can use more than one argument

ages6 = years.map((el, index) => { //if we want more lines of code, we need to add the curly braces {}
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);
*/

/*
========================
    ARROW FUNCTIONS 2
========================

LEXICAL 'THIS' KEYWORD


//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;//this in here, points to box5
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ', and it is ' + self.color + '.';// if we use 'this' in here, it appoints to WINDOW object, it is a JS "Bug"
            alert(str);
        });
    }
}

//box5.clickMe();

//ES6
var box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => { //agora o this aponta para o objeto acima dele
            var str = `This is box number ${this.position}, and it is ${this.color}.`;
            alert(str);
        });
    }
}

//box6.clickMe();

function Person(name) {
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el + '.';
    }.bind(this));
    console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);

//ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}.`);
    console.log(arr);
};

new Person('Diego').myFriends6(friends);
*/

/*
=====================
    DESTRUCTURING
=====================


//ES5
var john = ['John', 29];
// var name = john[0];
// var age = john[1];

//ES6
const [name , age] = ['John', 29];
console.log(name);
console.log(age);

//declaring an object
const obj = {
    firstName: 'John',
    lastName: 'Smith'
}

//declaring two variables by an object, with the same names of the object properties
const {firstName , lastName} = obj;
console.log(firstName);
console.log(lastName);

//declaring two variables by an object, with different names of the object properties
const{firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

//a function which returns two values
function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);

*/

/*

============================
           ARRAYS
============================



//ES5
const boxes = document.querySelectorAll('.box'); // this creates a node list

//converting this node list to an array


var boxArr5 = Array.prototype.slice.call(boxes);


boxArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue'
});
*/

//ES6
//this convert a nodelist in an array
//Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


//====================
//For loop in arrays
//ES5
/*
for(var i = 0; i < boxArr5.length ; i++ ) {
    if(boxArr5[i].className === 'box blue') {
        continue;
    }
    boxArr5[i].textContent = 'I changed to blue!';
};
*/

//ES6
/*
for(const cur of boxArr5) {
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!';
}
*/


//==============================
//NEW ARRAY METHODS
//===============================

/*
var ages = [16, 17, 10, 23, 14, 12];

//how to show the full age
//ES5
var full = ages.map(function(cur) {
    return cur >= 18;
});
console.log(full);//[false, false, false, true, false, false]
console.log(full.indexOf(true));//3
console.log(ages[full.indexOf(true)]);//23

//ES6
console.log(ages.findIndex(cur => cur >= 18));//3 this find where on the array the condition is true
console.log(ages.find(cur => cur >= 18));//23 this finds the content of where on the array the condition is true
*/


//passing an array as argument to a fubction
function sum (a, b , c, d) {
    return a + b + c + d;
}
var sum1 = sum(10, 20, 30, 40);//no array method
console.log(sum1);

//ES5
var ages = [10, 20, 30, 25];
var sum2 = sum.apply(null, ages);//this turns sum arguments in array
console.log(sum2);

//ES6
const sum3 = sum(...ages);//this pass all content of ages array as arguments to sum function
console.log(sum3);

//joinning arrays
const familyBezerra = ['Leo', 'Di', 'Bete', 'Diana', 'Bernardo', 'Renata'];
const familyMartins = ['Rapha', 'Fio', 'Edson', 'Ale'];
const bigFamily = [...familyBezerra, ...familyMartins]; //you can insert an element in this expression: const bigFamily = [...familyBezerra, 'DUNHA' ,...familyMartins];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple'); //turns all text on purple