'use strict';

let secret_number = Math.trunc(Math.random()*20) + 1;
let score = 20;
let high_score = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = high_score;

function decrese_score(){
    score -= 1;
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', ()=>{
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        document.querySelector('.message').textContent = "⛔️ No number";
    } else if (guess === secret_number){
        document.querySelector('.number').textContent = secret_number;
        document.querySelector('.message').textContent = "🎉 Correct Number";
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > high_score){
            high_score = score;
            document.querySelector('.highscore').textContent = high_score;
        }
    } else if (guess > secret_number){
        if (score > 1){
            decrese_score()
            document.querySelector('.message').textContent = "📈 Too high!";
        } else {
            decrese_score()
            document.querySelector('.message').textContent = "💥 You lost the game";
        }
    } else if (guess < secret_number) {
        if (score > 1){
            decrese_score()
            document.querySelector('.message').textContent = "📉 Too low!";
        } else {
            decrese_score()
            document.querySelector('.message').textContent = "💥 You lost the game";
        }
    }
});

document.querySelector('.again').addEventListener('click', ()=>{
    score = 20;
    secret_number = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.number').textContent = secret_number;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";   
});