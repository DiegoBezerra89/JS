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
var dice, scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

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
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else { 
        //next player
        nextPlayer();
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    youWon();
});

document.querySelector('.btn-new').addEventListener('click', function(){
    newGame();
});


//FUNCTIONS
function newGame() {
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'block'; 
    document.getElementById('.player-name').style.color = '#555';
    document.getElementById('name-' + activePlayer).textContent = 'Player ' + activePlayer;
}

function nextPlayer() {
    document.getElementById('current-' + activePlayer).textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;  
    roundScore = 0;
}

function youWon() {
    if(scores[activePlayer] >= 30) {
        document.getElementById('name-' + activePlayer).textContent = 'WINNER';
        document.getElementById('name-' + activePlayer).style.color = 'red';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';       
    } else {
        nextPlayer();
    }
}