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

UI MODULE: 
    > Get input values
    > Add the new item to the UI
    > Update the UI

DATA MODULE:
    > Add a new item to our data structure
    > Calculate Budget

CONTROLLER MODULE:
    > Add evente handler

===========================================

*/

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

