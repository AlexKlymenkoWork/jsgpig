
var scores, roundScore, activePlayer, gamePlaying;

var lastDice, lastDice1;

init();

//document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {

        // 1.Random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;

        //2.Display the resul
        var diceDOM = document.querySelector('.dice');
        var diceDOM1 = document.querySelector('.dice-1');

        diceDOM.style.display = 'block';
        diceDOM1.style.display = 'block';

        diceDOM.src = 'dice-' + dice + '.png';
        diceDOM1.src = 'dice-' + dice1 + '.png';

        // 3. Update the round score IF the rolled nuber was NOT 1
        // if(dice === 6 && dice1 === 6  && lastDice === 6 && lastDice1 === 6){
            
        //     scores[activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = '0';
        //     nextPlayer();

        // }else
             if (dice !== 1 && dice1 !== 1) {
            
            //Add score
            roundScore += dice + dice1;
            // roundScore += dice1;

            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
           
            // Next Player
            nextPlayer();
        }
        console.log(dice,dice1);
        console.log(dice + dice1);
        // lastDice = dice;
        // lastDice1 = dice1;
        // console.log('last dice + dice1: '+ lastDice+ ', ' + lastDice1);
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    
    if(gamePlaying){
        
        // Add Current score to global score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // Check if player won the game
       
        var input = document.querySelector('.final-score').value;
        var winningScore

        if(input){

            winningScore = input;
        } else {

            winningScore = 100;
        }

        if (scores[activePlayer] >= winningScore) {
            
            console.log("Player" + activePlayer + " win");
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            
            gamePlaying = false;

        } else {
            // Next Player
            nextPlayer();
        }
    }
});
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}


