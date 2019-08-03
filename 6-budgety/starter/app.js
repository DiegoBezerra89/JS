/*
TO DO LIST
=======================
STEP 1: PLANNING

- Add an event handler 
- Get input values
- Add new item to our data structure
- Add the new item to the UI
- Calculate budget
- Update the UI

=======================
STEP 2: STRUCTURING OUR CODE WITH MODULES

- MODULES: 
    > important aspect of any robust application's architecture;
    > Keep the units of code for a project both cleanly separeted and organized;
    > Encapsulate some data into privacy and expose other data publicly.

    ==============================
UI MODULE: 
    > Get input values
    > Add the new item to the UI
    > Update the UI
    ==============================
DATA MODULE:
    > Add a new item to our data structure
    > Calculate Budget
    ==============================
CONTROLLER MODULE:
    > Add event handler
    ==============================

*/
//EXAMPLE TO DEMONSTRATE HOW MODULES WORKS

/*
var budgetController = (function(){
    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }

})();

var UIController = (function(){

    //some code

})();

var controller = (function(budgetCtrl, UICtrl){

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }
})(budgetController, UIController);
*/


//BUDGET CONTROLLER
var budgetController = (function(){
    var Expense = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value
    };

    var Incomes = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }
})();


//UI CONTROLLER
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
    
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
            }
        });
    };


    //this function is called everytime when we click on ok button, or when we press Enter
    var ctrlAddItem = function() {
        // 1. Get the field input data
        var getInput = UICtrl.getInput();
        console.log(getInput);
        // 2. Add the item to the budget controller
        
        // 3. Add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget to the UI 
    }

    return {
        init: function(){
            setupEventListeners();
        }
    }
  

})(budgetController, UIController);

controller.init();











var budgetController = (function(){
    //some code
})();

var UIController = (function(){
    //some code
    /*
    > Get input values
    > Add the new item to the UI
    > Update the UI
    */
    return {
        getInput: function() {
           return{
            type: document.querySelector('.add__type').value,
            description: document.querySelector('.add__description').value,
            value: document.querySelector('.add__value')
           };
        }
    }
})();

var controller = (function(budgetCtrl, UICtrl){
    var getInput = UICtrl.getInput();

    document.querySelector('.add__btn').addEventListener('click', getInput);
    document.addEventListener('keypress', function(event){
        if(event.which === 13 || event.keyCode === 13){
            getInput();
        }
    });

})(budgetController, UIController);