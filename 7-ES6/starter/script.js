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
console.log(boxes);
//converting this node list to an array


var boxArr5 = Array.prototype.slice.call(boxes);


boxArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue'
});
*/


//ES6
//this convert a nodelist in an array
//const boxes = document.querySelectorAll('.box');
//console.log(boxes);
//Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
//const boxes2 = Array.from(boxes);
//console.log(boxes2);

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

/*
=======================

    SPREAD OPERATOR ...

=======================
Takes an array and basicaly transform this array into single values
It's used in a function call or in a var declaration

//passing an array as argument to a function
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
*/

/*
========================

    REST PARAMETERS

========================
Receive a couple of single values, and transforms them into an array when we call a function with multiple parameters
It's used in a function declaration


//ES5
function isFullAge() {
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach( function(cur) {
        console.log((2019 - cur) >= 18);
    });
}
//isFullAge(1990, 2019, 2001, 2008);


//ES6
function isFullAge6(...years) {
    years.forEach(cur => console.log(2019 - cur >= 18));
};
isFullAge6(1999, 2018, 1989, 2015);


function isFullAge6(limit, ...years) { // vc pode inserir quantos parametros quiser, o rest irá pegar o resto deles e formar um array
    years.forEach(cur => console.log(2019 - cur >= limit));
}; 

isFullAge6(16, 1999, 2018, 1989, 2015);
*/

/* 
==========================
    DEFAULT PARAMETERS
==========================


//ES5 "Default Parameters"
function SmithPerson(firtsName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName = 'Bezerra' : lastName = lastName;
    nationality === undefined ? nationality = 'Brasileiro': nationality = nationality;
    
    this.firtsName = firtsName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
};

var john = new SmithPerson('John', 1989);
console.log(john);
var emily = new SmithPerson('Emily', 1998, 'Diaz', 'Spanish');
console.log(emily); //this overwriten the default parameters



//ES6
function SmithPerson2(firtsName, yearOfBirth, lastName = 'Bezerra', nationality = 'Brasileiro') { //this way you can define the default parameters values in ES6
    
    this.firtsName = firtsName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;

};

var john2 = new SmithPerson('John', 1989, 'Smith', 'american');
var diego = new SmithPerson2 ('Diego', 1989);
console.log(diego);
console.log(john2);

*/

/*
===========================

            MAPS

===========================


const question = new Map();

question.set('question', 'Is Javascript the best programming language in the game?');//set a value to the Map
question.set(1, 'I dont know');
question.set(2, 'Maybe');
question.set(3, 'No doubt about it');
question.set(4, 'No');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong answer!');

console.log(question.get('question'));//get a value from the Map
console.log(question.size);

if(question.has(4)){//has the propertie on the Map? this returns boollean value
    //question.delete(4);//Delete a propertie from the map
}
console.log(question);

//question.clear();//delete all itens from the Map


question.forEach((value, key) => {
    console.log(`"${key}" : ${value}`);
});

for(let [key, value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt(`${question.get('question')}\nDigite a resposta certa:\n`));
console.log(question.get(ans === question.get('correct')));
*/

/*
===========================
        CLASS
===========================




//ES5
const Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job
};

Person5.prototype.calculateAge1 = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5 ('John', 1998, 'Designer');
//console.log(john5);
john5.calculateAge1();

//ES6
//class definitions aren't hoisted, we need to declare before use it.
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge2() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

let john6 = new Person6('Diego', 1989, 'Web developer');
john6.calculateAge2();
let age = new Date().getFullYear();
*/


//=======================
//Sub Classes
//=======================
/*
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge2() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const diego = new Athlete('Diego', 1989, 'Swimmer', 'Tokyo', 12);
const renata = new Person6('Renata', 1996, 'Developer');

diego.wonMedal();
diego.calculateAge2(); //subclasses inherit the superclasses methods
renata.wonMedal();//superclasses don't inherit subclasses methods (obviously)
*/

/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

//3 parks         
//4 streets
//both has name and build year
/*
class Element {
    constructor(name, buildyear) {
        this.name = name;
        this.buildyear = buildyear;
    }
}

class Park extends Element {
    constructor(name, buildyear, area, trees) {
        super(name, buildyear);
        this.trees = trees;
        this.area = area;
    }

    treeDensity(){
        const density = this.trees / this.area;
        console.log(`The ${this.name}, have a trees density of ${density} per m².`);
    }
}

class Street extends Element {
    constructor(name, buildyear, length, size = 3) {
        super(name, buildyear);
        this.length = length;
        this.size = size;
    }

    classifyStreets() {
        const classification = new Map();
        classification.set(1, 'Tiny');
        classification.set(2, 'Small');
        classification.set(3, 'Normal');
        classification.set(4, 'Big');
        classification.set(5, 'Huge');
        console.log(`${this.name} street, build in ${this.buildyear}, is a ${classification.get(this.size)} street.`);
    }

}

const allParks = [
    new Park('Central park', 1907, 20000, 2100),    
    new Park('Água Branca', 1935, 15000, 900),
    new Park('Jurassic Park', 1995, 45000, 31000)
]

const allStreets = [
    new Street('Rua Palestra Itália', 1914, 2400, 4),
    new Street('Wall Street', 1820, 1500, 3),
    new Street('Avenida Paulista', 1840, 3500, 4),
    new Street('5th Avenue', 1830, 6700, 5)
]

function calc(arr) {
    const sum = arr.reduce((acc, current, index) => acc + current, 0);

    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log('------ PARKS REPORT ------');

    //DENSITY
    p.forEach(el =>  el.treeDensity());//show all park density

    const ages = p.map(el => new Date().getFullYear() - el.buildyear);
    const [totalAges, avgAge] = calc(ages);
    console.log(`Our ${p.length} parks have a average of ${avgAge} years.`);

    //which park has mmore than 1000 trees?
    const i = p.map(el => el.trees).findIndex(el => el >= 1000);
    console.log(`the ${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
    console.log('========STREETS REPORT=========');

    //LENGTH
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} have a total length of ${totalLength}, and ha a average of ${avgLength} Km.`);

    s.forEach(el => el.classifyStreets());
}

reportParks(allParks);
reportStreets(allStreets);
//Total and average length of the town's streets
*/
let j;
for( j = 0; j < 10; j ++) {
    print();
}

function print(){
    setTimeout(()=>{
        console.log(j);
    },1000);
}