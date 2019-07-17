///////////////////////////////////////
// Lecture: Hoisting

//contexto de funções é executado primeiro
/*
calculateAge(1989); // em execução, esta função já existe, o que torna possível o seu uso.

function calculateAge(year) {
    console.log(2019 - year);
}



//retirement(1989);//retirement is not defined

//funções em variáveis, são executadas depois do contexto de funções
var retirement = function(year) {
    console.log(65 - (2019 - year));
}

retirement(1989);
*/
//******************************************/

/*
//variables
console.log(age); // em execução, age é undefined
var age = 18; // age é definida
console.log(age); // 18
*/
///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









