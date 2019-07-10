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

/*
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

//operators
var x,y;

x = 3;
y = 5;
x = x + y;
console.log(x); //8

x += y;
console.log(x); //13

x += 5;
console.log(x); //18

x++;
console.log(x); //19

x--;
console.log(x); //18

x -= 3;
console.log(x); //15
*/








/*****************************
* CODING CHALLENGE 1
******************************/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

/*
var markMass = 90;
var markHeight = 1.98;
var bmiMark = markMass / (markHeight * markHeight);
var johnMass = 78;
var johnHeight = 1.76;
var bmiJohn = johnMass / (johnHeight * johnHeight);

console.log(bmiMark);
console.log(bmiJohn);
var bmiComparisson = bmiMark > bmiJohn;
console.log('Is mark\'s bmi higher than john\'s bmi? ' + bmiComparisson);
*/


/**************************/



/*****
 * IF / ELSE STATEMENTS
 */  

/*
 var isMarried = 'yes';
if(isMarried === 'yes') {
    console.log('John is married.');
} else {
    console.log('John isn\'t married yet');
}

var isMarried = false;

if(isMarried) {
    console.log('John is married.');
} else {
    console.log('John isn\'t married yet');
}
*/

/***************************** OTHER SOLUTION FOR THE CHALLENGE **********************/
/*
var markMass = 90;
var markHeight = 1.98;
var bmiMark = markMass / (markHeight * markHeight);
var johnMass = 78;
var johnHeight = 1.76;
var bmiJohn = johnMass / (johnHeight * johnHeight);

if(bmiMark > bmiJohn){
    console.log('Mark has a higher BMI than John');
} else {
    console.log('John has a higher BMI than Mark');
}
*/

/********* BOOLEAN LOGIC ************/

var name = 'John';
var age = 32;

if(age < 13) {
    console.log('John is a boy.');
} else if ( age >= 13 && age < 18 ) {
    console.log('John is a teenager.')
} else if ( age >= 18 && age < 30) {
    console.log("John is a young man.");
} else {
    console.log('John is a man.');
}