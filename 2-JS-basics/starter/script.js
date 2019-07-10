/*************
 * Variables and data types
 */

//console.log('Hello World!');
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 29;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job); //undefined

job = 'Teacher';
console.log(job);
*/

// variables names can't start with: symbols and numbers
//also with JS reserved words, like: function, if, delete

/*************
 * Variable mutation and type coercion
 */

/*
var firstName = 'John';
var age = 29;

//type coercion
console.log(firstName + ' ' + age); //John 29

var job, isMarried;
job = 'Driver';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried); //John is a 29 years old Driver. Is he married? false

//variable mutation
age = 'twenty eight';
job = 'Teacher';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('what is his last name?'); //prompt is an input function
console.log(firstName + ' ' + lastName );
*/

/*********************
 *Basic Operators
 * 
 */
var now, ageMark, ageJohn;
now = 2019;
ageJohn = 33;
ageMark = 30;

console.log(ageJohn);

console.log(now - 10); //2009
console.log(now + 30); //2049
console.log(now / 10); //


//Logical operators
var johnOlder = ageJohn > ageMark; //is ageJohn bigger than ageMark?
console.log(johnOlder); //true

//type of operators
console.log(typeof johnOlder); //boolean
console.log(typeof ageMark); //number
console.log(typeof 'Eu sou lindo, mentira sou não'); //string

var x;
console.log(typeof x); //undefined