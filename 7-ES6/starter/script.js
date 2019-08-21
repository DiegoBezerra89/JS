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

*/

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
