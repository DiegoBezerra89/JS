/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//dice = Math.floor(Math.random() * 6) + 1;

//document.querySelector('#current-' + activePlayer).textContent = dice;

//var x = document.querySelector('#score-' + activePlayer).textContent;
//console.log(x);

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    //2. display the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.src = 'dice-' + dice + '.png';
    diceDOM.style.display = 'block';

    //3. update the round score if the roll dice was not a 1 
    if(dice !== 1) {
        //add score
        youWon();
        roundScore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        //scores[activePlayer] += roundScore;
    } else {
        //next Player
        nextPlayer();
    }
});

//btn-hold
document.querySelector('.btn-hold').addEventListener('click', function() {
    //add to main score
    
    scores[activePlayer] += roundScore;
    
    //update the UI
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    //Check if Player won the game
    
    youWon();

    //Next Player
    nextPlayer();
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

function youWon() {
    if (roundScore + scores[activePlayer] >= 30) {
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        alert('O player ' + (activePlayer + 1) + ' GANHOU!');
    }
}

