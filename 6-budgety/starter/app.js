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

===========================


============================
STEP 3: DELETING AN ITEM OF UI AND UPDATE THE BUDGET

    - ADD AN EVENT HANDLER
    - DELETE THE ITEM FROM OUR DATA STRUCTURE
    - DELETE THE ITEM TO THE UI
    - RE-CALCULATE BUDGET
    - UPDATE THE UI
=======================================
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

    var calculateTotal = function(type){
        var sum = 0;
        data.allItems[type].forEach(function(cur){
            sum += cur.value;
        }); 
        data.totals[type] = sum;
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
        },
        budget: 0,
        percentage: -1
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

        calculateBudget: function() {
            // calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            // calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            // calculate the percentage of income that we spend
            if(data.totals.inc > 0){
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },  

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };    
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
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage'
    };
    // Get input values
    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.type).value,
                description: document.querySelector(DOMstrings.description).value,
                value: parseFloat(document.querySelector(DOMstrings.value).value)
            }; 
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;
            
            //Add the new item to the UI
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

        clearFields: function(){
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.description + ', ' + DOMstrings.value);
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });

            fieldsArr[0].focus();
        },

        displayBudget: function(obj) {
                document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
                document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
                document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;

                if(obj.percentage > 0) {
                    document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';  
                } else {
                    document.querySelector(DOMstrings.percentageLabel).textContent = '---';
                }
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    }
    
    //Update the UI
    
    
})();



//############################
//MAIN CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
    var updateBudget = function(){
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();

        // 2. Return the budget
        var budget = budgetCtrl.getBudget();

        // 3. Display the budget in the UI
        UICtrl.displayBudget(budget);

    };

    var ctrlAddItem = function(){
        var input, newItem;
        
        // 1. Get the field input data
        input = UICtrl.getInput();
        
        if(input.description !== "" && !isNaN(input.value) && input.value > 0){ //if input is empty and value is not a number and 0, the if doesn't init
        // 2. Add the item to the budget controller
            newItem = budgetController.addItem(input.type, input.description, input.value);

        // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);
        
        // 4. Clear the input fields
            UICtrl.clearFields();

        // 5. Calculate and update budget
            updateBudget();
        };

        // 6. Display the budget to the UI 
    };

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
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            }); 
        }
    }

})(budgetController, UIController);

controller.init();