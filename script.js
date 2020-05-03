var scores,roundScore,active;
scores=[0,0];
roundScore=0;
active=0;
 
document.querySelector('#current-' + active).textContent=Math.floor((Math.random()*6)+1);

document.querySelector('.dice').style.display= 'none';