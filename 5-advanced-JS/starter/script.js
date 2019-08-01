//Creating objects and cronstructors

    /*
    //literal method
    var john = {
        name: 'John',
        yearOfBirth: 1990,
        job: 'Teacher'
    }

    var Person = function(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    //method of Person
        this.calculateAge = function() {
        console.log(2019 - this.yearOfBirth);
        }
    }

    //we can insert a property with the constructor prototype
    Person.prototype.lastName = 'Smith';

    var mark = new Person('Mark', 1985, 'Designer');

    //we can use the prototype inheritance to insert a method to a constructor
    Person.prototype.calculateAge = function() {
        console.log(2019 - this.yearOfBirth);
    }

    //mark inherit the methods in the constructor prototype
    mark.calculateAge();

    console.log(mark.lastName);//Smith
    */

    /*
    //TEST
    var Car = function(name, brand, year) {
        this.name = name;
        this.brand = brand;
        this.year = year;
    }; 

    Car.prototype.inputColor = function(col) {
        this.color = col;
    };

    var carro = new Car('Gol', 'volks', 1989);

    carro.inputColor('azul');

    console.log(carro);
    */

    /*********
     * 
     * object.create
     * 
     *********/
/*
    var personProto = {
        calculateAge: function() {
            console.log(2019 - this.yearOfBirth);
        }
    };

    var john = Object.create(personProto);
    john.name = 'John';
    john.yearOfBirth = 1989;
    john.job = 'Teacher';

    var jane = Object.create(personProto, {
        name: { value: 'Jane'},
        yearOfBirth: { value: 1997 },
        job: { value: 'Designer'}
    });
*/


/*************** PRIMITIVES VS OBJECTS ***************/

        /*
        //OBJECTS
        var obj1 = {
            name: 'John',
            age: 26
        };

        var obj2 = obj1;
        obj1.age = 30;
        console.log(obj1.age);
        console.log(obj2.age);
        //was created a reference to obj1 in memory, always that obj1 has change, obj2 changes too.

        //FUNCTIONS
        var age = 27;
        var obj = {
            name: 'Jonas',
            city: 'Lisbon',
        };

        function change( a, b ){
            a = 30;
            b.city = 'San Francisco';
        }

        change(age, obj);

        console.log(age);//27
        console.log(obj.city);//san francisco

        //when you declare a variable value, this turns to a primitive value, imutable, unless if you changes the value directly x = change(), it returns a result to variable, then it value changes.
        //objects are always a pointer to an object, them could be mutated with indirect declarations
        */


/**************** 

PASSING FUNCTIONS AS ARGUMENTS

*****************/
/*
var years = [1990, 1987, 1964, 2007, 1999];

function arrayCalc (arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2019 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}


var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);

console.log(ages);
console.log(fullAges);
//it's a hard concept, so, I'll need to repeat a lot of times the video
*/




/* FUNCTIONS RETURNING FUNCTIONS */

/*
function interviewJob(job) {
    if(job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    } else if (job === 'Designer') {
        return function(name) {
            console.log(name + ', can you explain whats is UX design?');
        } 
    } else {
        return function(name) {
            console.log(name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewJob('teacher');
teacherQuestion('Mike'); //Mike, what subject do you teach?

var designQuestion = interviewJob('Designer');
designQuestion("Diego"); //Diego, can you explain whats is UX design?

var noProfession = interviewJob('Nada');
noProfession('Edson');

console.log(interviewJob("Dunha")); //returns the function with else condition

interviewJob('teacher')('Michael'); //Michael, what subject do you teach?

function gente(time) {
    if(time === 'Palmeiras') {
        return function(nome) {
            console.log(nome + ' vc é gente!');
        }
    } else if (time === 'Santos') {
        return function(name) {
            console.log('Mano, ' + time + ' nem é time ' + name);
        }
    } else if (time === 'Corinthians') {
        return function(nome) {
            console.log('Não, ' + nome + ', vc não é gente.');
        }
    }

}

gente('Palmeiras')('Diego');
gente('Santos')('Bruno');
gente('Corinthians')('Ivan');
*/


/***** immediately invoked function || IIFE *****/

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();



(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score); score is not defined, because the IIFE creates a local scope

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5); //true
*/



/**** Closures ****/

/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland =  retirement(67);

retirementUS(1990);
retirementGermany(1978);
retirementIceland(1996);
*/
/*
function interviewJob(job) {
    if(job === 'teacher') {
        return function(name) {
            console.log(name + ', what subject do you teach?');
        }
    } else if (job === 'Designer') {
        return function(name) {
            console.log(name + ', can you explain whats is UX design?');
        } 
    } else {
        return function (name) {
            console.log(name + ', what do you do?');
        }
    }
}
*/

/*
//MY WAY
function interviewJob(job) {
    var a = ', what subject do you teach?';
    var b = ', can you explain whats is UX design?';
    var c = ', what do you do?';
    return function(nome) {
        if(job === 'Teacher'){
            console.log(nome + a);
        } else if (job === 'Designer') {
            console.log(nome + b);
        } else {
            console.log(nome + c);
        }
    }
}

var design = interviewJob('Designer');
var teacher = interviewJob('Teacher');
var nothing = interviewJob('nothing');

design('Diego');
teacher('Dunha');
nothing('Edson');

//JONAS WAY
function interviewJob(job) {
    return function(name) {
        if (job === 'Teacher') {
            console.log(name + ', what subject do you teach?');
        } else if (job === 'Designer') {
            console.log(name + ', can you explain whats is UX design?');
        } else {
            console.log(name + ', what do you do?');
        }
    }
}

interviewJob('Teacher')('Dunha');
interviewJob('Designer')('Diego');
interviewJob('nothing')('Edson');
*/

/*
var john = {
    name: 'John',
    age: 28,
    job: 'Teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. have a nice ' + timeOfDay + '!' );
        }
    } 
};

john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 28,
    job: 'Designer'
};

john.presentation.call(emily, 'friendly', 'afternoon'); //it borrows the method of john

//john.presentation.apply(emily, ['afternoon', 'friendly']);

var johnFriendly = john.presentation.bind(john, 'friendly');

//johnFriendly turns into a function, which needs a method(timeOfDay)
johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('night');
*/


/*********************** exercise ************************/

//creating a constructor
/*var Person = function(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

Person.prototype.timeQueTorce = function(time) {
    console.log(this.name + ' torce para o ' + time + '.');
}

var diego = new Person('Diego', 29, 'Web Developer');

diego.timeQueTorce('Palmeiras');


//closure
function jobInterview(job) {
    var a = ' works as a ';
    return function(name) {
        console.log(name + a + job);
    }
}

jobInterview('Teacher')('Ana');
*/




/////////////////////////////
// CODING CHALLENGE


/*
(function() {


--- Let's build a fun quiz game in the console! ---
1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)
*/
//2. Create a couple of questions using the constructor
//3. Store them all inside an array
//4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).
//5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
//6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: write another method for this).
//7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
/*
function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.showQuestion = function(){
    console.log(this.question);
    for(var i = 0; i < this.answers.length; i ++) {
        console.log( (i+1) + '- ' + this.answers[i] );
    }
}

Question.prototype.rightQuestion = function(answer) {
    if (answer === this.correct){
        console.log('Certa a Resposta!');
    } else {
        console.log('Errou, fascista!');
    }
}

var question1 = new Question('O que fazer com um fascista?', ['Passar pano', 'Votar', 'Proteger', 'Espancar até a morte'], 3);
var question2 = new Question('Complete a frase: \'Fogo ...\'', ['nos racistas', 'no colchão', 'no parquinho', 'na caixa d\'agua'], 0);
var question3 = new Question('Biroliro é:', ['manjador de economia', 'sábio', 'inteligente', 'lindo', 'Fascista'],4);
var questions = [ question1, question2, question3 ];

var n = Math.floor(Math.random() * arr.length);
questions[n].showQuestion(); //random position
var answer = parseInt(prompt('Digite a resposta certa: ') - 1);
questions[n].rightQuestion(answer);

})();//IIFE - imediately invoked function expression
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {

    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.showQuestion = function(){
        console.log(this.question);
        for(var i = 0; i < this.answers.length; i ++) {
            console.log( (i + 1) + '- ' + this.answers[i] );
        }
    }

    Question.prototype.rightQuestion = function(answer, callback) {
        var sc;
        if (answer === this.correct){
            console.log('######### CERTA A RESPOSTA! #########');
            console.log('>>>>>>>>>>>>>>>>>>>>');
            sc = callback(true);
        } else {
            console.log('######### ERROU, FASCISTA! ##########');
            console.log('>>>>>>>>>>>>>>>>>>>>');
            sc = callback(false);
        }
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score: ' + score);
        console.log('---------------------');
    }

    var question1 = new Question('O que fazer com um fascista?', ['Passar pano', 'Votar', 'Proteger', 'Espancar até a morte'], 4);
    var question2 = new Question('Complete a frase: \'Fogo ...\'', ['nos racistas', 'no colchão', 'no parquinho', 'na caixa d\'agua'], 1);
    var question3 = new Question('Biroliro é:', ['manjador de economia', 'sábio', 'inteligente', 'lindo', 'Fascista'], 5);
    var questions = [ question1, question2, question3 ];

    function score() {
        var sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
                console.log(sc);
            }
            return sc;
        }
    }

    var keepScore = score();//precisa de um argumento "correct"
    /*function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        }
    */
   


    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].showQuestion(); //random position
        var answer = prompt('Digite a resposta certa:');    
        if(answer !== 'exit'){
            questions[n].rightQuestion(parseInt(answer) , keepScore);
            nextQuestion();
        }  
    }

    nextQuestion();

})();