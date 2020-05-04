var scores, roundScore, active, Name,gamePlay,last1,last2;
init();

// document.querySelector('#current-' + active).textContent=Math.floor((Math.random()*6)+1)

document.querySelector('.btn-roll').addEventListener('click', () => {
if(gamePlay){
    var dice1 = Math.floor((Math.random() * 6) + 1);
    var dice2 = Math.floor((Math.random() * 6) + 1);

    document.querySelector('#dice-1').style.display = 'block';
    document.querySelector('#dice-2').style.display = 'block';
    document.querySelector('#dice-1').src='dice-' + dice1 + '.png';
    document.querySelector('#dice-2').src='dice-' + dice2 + '.png';

    if((dice1===6&&last1===6)||(dice2===6&&last2===6)){
        scores[active]=0;
        alias('score-'+active);
        alert('you have got two six in a row')
        nextPlayer();

    }else   if (dice1 !== 1&&dice2 !== 1) {
        roundScore += dice1+dice2;
        document.querySelector('#current-' + active).textContent = roundScore;
    } else {
        alert('You have got a 1');
        nextPlayer();
    }
    last1=dice1;
    last2=dice2;

}});

document.querySelector('.btn-hold').addEventListener('click', () => {
    if(gamePlay){
    scores[active] += roundScore;
    document.querySelector('#score-' + active).textContent = scores[active];

    var input=document.getElementById('final').value;
     
    if(input){
        input=input;
    }else{
        input=100;
    }

    if(scores[active]>=input)
    {
         document.querySelector('#name-'+active).textContent="WINNER!!!";
         document.querySelector('#dice-1').style.display='none';
         document.querySelector('#dice-2').style.display='none';
         document.querySelector('.player-'+active+'-panel').classList.add('winner');
         document.querySelector('.player-'+active+'-panel').classList.remove('active');
         gamePlay=false;
    } else{
    nextPlayer();
    }}
});

function nextPlayer() {
    
    active === 0 ? active = 1 : active = 0;
    roundScore = 0;

    alias('current-0');
    alias('current-1');

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
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
document.querySelector('#dice-1').style.display = 'none';
document.querySelector('#dice-2').style.display = 'none';
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('name-0').textContent="Player 1";
    document.getElementById('name-1').textContent="Player 2";
    last=0;
}

function alias(id) {
    return document.getElementById(id).textContent = '0';
}
