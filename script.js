var scores, roundScore, active, Name;
scores = [0, 0];
roundScore = 0;
active = 0;

// document.querySelector('#current-' + active).textContent=Math.floor((Math.random()*6)+1);

document.querySelector('.dice').style.display = 'none';

function alias(id) {
    return document.getElementById(id).textContent = '0';
}

alias('score-0');
alias('current-0');
alias('current-1');
alias('score-1');

document.querySelector('.btn-roll').addEventListener('click', () => {

    var dice = Math.floor((Math.random() * 6) + 1);

    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';



    if (dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + active).textContent = roundScore;
    } else {
        alert('You have got a 1');
        nextPlayer();
    }

});

document.querySelector('.btn-hold').addEventListener('click', () => {

    scores[active] += roundScore;
    document.querySelector('#score-' + active).textContent = scores[active];

    nextPlayer();



});

function nextPlayer() {
    var diceDom = document.querySelector('.dice');
    active === 0 ? active = 1 : active = 0;
    roundScore = 0;

    alias('current-0');
    alias('current-1');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    diceDom.style.display = 'none';
}