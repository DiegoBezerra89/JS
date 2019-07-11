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
/*
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
*/
//AND : both situations must be true
//OR: one situation must be true
//NOT: invert the variable boolean value

/******************** Ternary Operator *****************/

var age = 31;
var name = 'John';

/*traditional way*/
// if(age >= 18) {
//     var drink = 'Beer';
// } else {
//     var drink = 'Juice';
// }

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

/******************** SWITCH ****************/
console.log(age);

switch(true) { //o switch checa a veracidade das informações nos seus cases, se for true ele executa o case.
    case age < 13:
        console.log('John is a boy.');
    break;
    case age >= 13 && age < 18:
        console.log('John is a teenager.');
    break;
    case age >= 18 && age < 30:
        console.log('John is a young man.');
    break;
    case age > 30:
        console.log('John is a man.');
    break;
    default:
        console.log('valor incorreto.');
}

/************************ Truthy and Falsy values ************************/

/* Falsy */
//undefined, null, 0, '', false, NaN

/*Truthy*/
//Tudo que não for falsy

/************* Equality operators **************/

var num = '20';

num == 20 ? console.log('Yes') : console.log('No'); // desta maneira o JS faz a conversão e só testa se os valores são iguais

num === 20 ? console.log('Yes') : console.log('No'); //desta maneira o JS tbm testa os tipos

/*****************************
* CODING CHALLENGE 2
******************************/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

/*
var johnPontuation = 89 + 120 + 103;
var johnAverage = johnPontuation / 3;
var mikePontuation = 116 + 94 + 123;
var mikeAverage = mikePontuation / 3;

console.log('John\'s average: ' + johnAverage);
console.log('Mike\'s average: ' + mikeAverage);
johnAverage > mikeAverage ? console.log('John\'s average is higher than mike\'s.') : console.log('Mike\'s average is higher than John\'s.'); //no draw situation

switch(true) {
    case johnAverage > mikeAverage:
        console.log('John\'s average is higher than mike\'s.');
    break;
    case mikeAverage > johnAverage:
        console.log('Mike\'s average is higher than John\'s.');
    break;
    default:
        console.log('The both averages are equal.');
}

var maryPontuation = 97 + 134 +105;
var maryAverage = maryPontuation / 3;

console.log('Mike: ' + mikeAverage);
console.log('John: ' + johnAverage);
console.log('Mary: ' + maryAverage);


switch(true) {
    //winners
    case maryAverage < mikeAverage && johnAverage < mikeAverage:
        console.log('Mike is the winner');
    break;
    case maryAverage < johnAverage && mikeAverage < johnAverage:
        console.log('John is the winner');
    break;
    case mikeAverage < maryAverage && johnAverage < maryAverage:
        console.log('Mary is the winner');
    break;
    //draw with a winner
    case mikeAverage == maryAverage && mikeAverage < johnAverage:
        console.log('john is the winner');
    break;
    case johnAverage == maryAverage && johnAverage < mikeAverage:
        console.log('Mike is the winner');
    break;
    case mikeAverage == johnAverage && mikeAverage < maryAverage:
        console.log('Mary is the winner');
    break;
    default: 
        console.log('It\'s a DRAW! The averages are equal!');
}
*/




/**************************
 * FUNCTIONS
 **************************/

/*
 function calculateAge(birthYear) {
    return 2019 - birthYear;
}

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement <= 0){
        console.log(firstName + ' is already retired.');
    } else {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    }
}

yearsUntilRetirement(1989, 'Diego');
yearsUntilRetirement(1996, 'Renata');
yearsUntilRetirement(1945, 'Bete');
*/

/*
var whatDoYouDo = function(name, job){
    switch(job){
        case 'Teacher':
            return name + ' teaches kids how to code.';
        case 'Driver':
            return name + ' Drives cars.';
        case 'Designer':
            return name + ' designs beautiful websties.';
        default:
            return name + ' Does something else.';
    }
}

console.log(whatDoYouDo('Diego', 'Programmer'));
console.log(whatDoYouDo('Renata', 'Teacher'));
*/

/********* ARRAYS ************/

//initialize arrays
/*
var names = ['John', 'Mark', 'Anne'];
var years = new Array(1990, 1978, 2003);

console.log(names[2]); //Anne
console.log(names.length); //3

//mutate array data
names[1] = 'Diego';
names[names.length] = 'Renata';
console.log(names);

//Different data types
var john = ['John', 'Smith', 28, 'designer', false];

john.push('blue'); //add in the end of the array
john.unshift('Mr.'); //add in the beginning of the array
console.log(john);

john.pop(); //remove from the end
john.pop(); //remove from the end
john.shift(); //remove from the beggining
console.log(john);

console.log(john.indexOf(28)); //return the index of the parameter

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer.' : 'John is a designer.'; //indexOf returns -1 when it don't contain the parameter

console.log(isDesigner);
*/




/*****************************
* CODING CHALLENGE 3
******************************/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

function tipCalculator(bill1, bill2, bill3) {
    var amount = [];
    var tips = [];
    switch(true) {
        case bill1 < 50 :
            tips.push(bill1 * .2);
        break;
        case bill1 >= 50 && bill1 <= 200 :
            tips.push(bill1 * .15);
        break;
        case bill1 > 200 :
            tips.push(bill1 * .1);
        break;
    }
    switch(true) {
        case bill2 < 50 :
            tips.push(bill2 * .2);
        break;
        case bill2 >= 50 && bill2 <= 200 :
            tips.push(bill2 * .15);
        break;
        case bill2 > 200 :
            tips.push(bill2 * .1);
        break;
    }
    switch(true) {
        case bill3 < 50 :
            tips.push(bill3 * .2);
        break;
        case bill3 >= 50 && bill3 <= 200 :
            tips.push(bill3 * .15);
        break;
        case bill3 > 200 :
            tips.push(bill3 * .1);
        break;
    }
    amount.push(tips[0] + bill1);
    amount.push(tips[1] + bill2);
    amount.push(tips[2] + bill3);

    console.log(tips);
    console.log(amount);

    
}