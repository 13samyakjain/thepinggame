var scores, roundScore, active, Name,gamePlay;
init();

// document.querySelector('#current-' + active).textContent=Math.floor((Math.random()*6)+1)

document.querySelector('.btn-roll').addEventListener('click', () => {
if(gamePlay){
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

}});

document.querySelector('.btn-hold').addEventListener('click', () => {
    if(gamePlay){
    scores[active] += roundScore;
    document.querySelector('#score-' + active).textContent = scores[active];

    

    if(scores[active]>=100)
    {
         document.querySelector('#name-'+active).textContent="WINNER!!!";
         document.querySelector('.dice').style.display='none';
         document.querySelector('.player-'+active+'-panel').classList.add('winner');
         document.querySelector('.player-'+active+'-panel').classList.remove('active');
         gamePlay=false;
    } else{
    nextPlayer();
    }}
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

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
     
     scores = [0, 0];
roundScore = 0;
active = 0;
gamePlay=true;
alias('score-0');
alias('current-0');
alias('current-1');
alias('score-1');
document.querySelector('.dice').style.display = 'none';
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('name-0').textContent="Player 1";
    document.getElementById('name-1').textContent="Player 2";
}

function alias(id) {
    return document.getElementById(id).textContent = '0';
}
