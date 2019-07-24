//https://diegobezerra89.github.io/JS/4-DOM-pig-game/starter/index.html

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//var declarations
var dice, scores, roundScore, activePlayer, count;


init();

//reset all scores
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.dice').style.display = 'none';//no dice image

document.querySelector('.btn-roll').addEventListener('click', function(){
    var diceDOM = document.querySelector('.dice');
    dice = Math.floor(Math.random() * 6) + 1;
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    if(dice !== 1){
        roundScore += dice;
        dice === 6 ? count += 1 : ''; //se o dado for 6 o count soma 1
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        loseScore();
    } else { 
        //next player
        nextPlayer();
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    noneDice();
    //add current score to Global score
    scores[activePlayer] += roundScore;

    //update the UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    //chack if the player won
    youWon();
});

document.querySelector('.btn-new').addEventListener('click', function(){
    newGame();
});


//FUNCTIONS
function newGame() {
    noneDice();
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'block'; 
    document.querySelector('.player-name').style.color = '#555';
    document.getElementById('name-' + activePlayer).textContent = 'Player ' + (activePlayer + 1);
    document.getElementById('name-' + activePlayer).classList.remove('winner');
    init();
}

function nextPlayer() {
    noneDice();
    count = 0;
    document.getElementById('current-' + activePlayer).textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;  
    roundScore = 0;
}

function youWon() {
    var winner = inputValue();
    if(scores[activePlayer] >= winner) {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER!';
        document.getElementById('name-' + activePlayer).classList.add('winner');
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';       
    } else {
        nextPlayer();
    }
}

function noneDice() {
    document.querySelector('.dice').style.display = 'none';
}

function init() {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
}

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


//1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)

function loseScore() {
    if(count > 1) { //quer dizer q o seis foi tirado duas vezes na mesma rodada
        scores[activePlayer] = 0;
        alert("you have got two times the number 6!");
        document.getElementById('score-' + activePlayer).textContent = '0';
        nextPlayer();
    }
}

//2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)

function inputValue() {
    var x = document.getElementById('inputValue').value;
    return x;
}

// 3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)

