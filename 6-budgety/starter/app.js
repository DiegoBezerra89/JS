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


//########################################
//BUDGET CONTROLLER
var budgetController = (function(){
    
    //Expenses constructor
    var Expense = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value
    };

    //Incomes constructor
    var Income = function(id, description, value) {
        this.id = id,
        this.description = description,
        this.value = value
    };

    //data structure, I made all this together to give a solid structure, and to make maintenance easier
    var data = {
        allItems: { //this will have all expenses and incomes in arrays
            exp: [],
            inc: []
        },
        totals: { //this will have the total sum of expenses and incomes
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            if(data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if(type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            data.allItems[type].push(newItem);

            return newItem;
        },
        testing: function() {
            console.log(data);
        }
    };

})();



//###################################
//UI CONTROLLER
var UIController = (function(){
    var DOMstrings = {
        type: '.add__type',
        description: '.add__description',
        value: '.add__value',
        button: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };
    // Get input values
    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.type).value,
                description: document.querySelector(DOMstrings.description).value,
                value: document.querySelector(DOMstrings.value).value
            }; 
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;
            
            //create a html string with placeholder text
            if(type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            //Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            //insert the html into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    }
    //Add the new item to the UI
    
    //Update the UI
    
    
})();



//############################
//MAIN CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){
        var input, newItem;
        
        // 1. Get the field input data
        input = UICtrl.getInput();
        
        // 2. Add the item to the budget controller
        newItem = budgetController.addItem(input.type, input.description, input.value);

        // 3. Add the item to the UI
        UICtrl.addListItem(newItem, input.type);
        // 4. Calculate the budget
        
        // 5. Display the budget to the UI 
    }

    var setupEventListeners = function(){ //this takes the values of input fields
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.button).addEventListener('click',ctrlAddItem);
        document.addEventListener('keypress', function(event){
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    }

    return {
        init: function(){
            setupEventListeners();
            console.log('Application has started!');
        }
    }

})(budgetController, UIController);

controller.init();