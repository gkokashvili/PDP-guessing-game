'use strict';

//Get needed values
let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Create needed functions
let countFunc = function(message){
    if(score > 1){
        document.querySelector('.message').textContent = message;
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;
    }
}
let winFunc = function(){
        document.querySelector('.message').textContent = 'Correct';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').style.width = '40rem';
        document.querySelector('.number').textContent = randomNumber;
        if(score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

}

document.querySelector('.check').addEventListener('click', function(){
    const inputValue = Number(document.querySelector('.guess').value);
    //When number is not valid
    if(!inputValue){
        countFunc('Not valid number');
    }
    //When winning the game
    else if(inputValue === randomNumber){
        winFunc();
    }
    //When number is incorret
    else{
        countFunc( inputValue > randomNumber ? 'Lower down number' : 'Increase Number');
    }
})

//Renewing game on click again button
document.querySelector('.again').addEventListener('click', function(){
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing number';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})