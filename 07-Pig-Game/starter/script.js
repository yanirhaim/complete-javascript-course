'use strict';

const btn_new = document.querySelector('.btn--new');
const btn_roll = document.querySelector('.btn--roll');
const btn_hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

let player_0_score;
let player_1_score;

let player_0_current_score;
let player_1_current_score;

let turn;

function start_game(){
    turn = 0;
    player_0_score = 0;
    player_1_score = 0;
    player_0_current_score = 0;
    player_1_current_score = 0;
    document.getElementById('score--0').textContent = player_0_score;
    document.getElementById('score--1').textContent = player_1_score;
    document.getElementById('current--0').textContent = player_0_current_score;
    document.getElementById('current--1').textContent = player_1_current_score;
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    dice.style.display = 'none';
}

btn_roll.addEventListener('click', ()=>{
    let number = Math.trunc(Math.random()*6) + 1;
    dice.setAttribute('src', `dice-${number}.png`);
    dice.style.display = 'block';
    if (number != 1){
        add_current_player(number);
    } else {
        remove_point();
        next_turn();
    }
})

function add_current_player(number){
    if (turn === 0){
        player_0_current_score += number;
        document.getElementById('current--0').textContent = player_0_current_score;
    } else {
        player_1_current_score += number;
        document.getElementById('current--1').textContent = player_1_current_score;
    }
}

function remove_point(){
    if (turn === 0){
        player_0_current_score = 0;
        document.getElementById('current--0').textContent = player_0_current_score;
    } else {
        player_1_current_score = 0;
        document.getElementById('current--1').textContent = player_1_current_score;
    }
}

function next_turn(){
    if (turn === 0){
        document.querySelector('.player--0').classList.remove('player--active');
        document.querySelector('.player--1').classList.add('player--active');
    } else {
        document.querySelector('.player--0').classList.add('player--active');
        document.querySelector('.player--1').classList.remove('player--active');
    }
    turn = (turn + 1)%2;
}

function hold(){
    if (turn === 0){
        player_0_score += player_0_current_score;
        document.getElementById('score--0').textContent = player_0_score;
        player_0_current_score = 0;
        document.getElementById('current--0').textContent = player_0_current_score;
        if (player_0_score >= 100){
            document.querySelector('.player--0').classList.add('player--winner');
            document.querySelector('.player--0').classList.remove('player--active');
        } else {next_turn();}
    } else {
        player_1_score += player_1_current_score;
        document.getElementById('score--1').textContent = player_1_score;
        player_1_current_score = 0;
        document.getElementById('current--1').textContent = player_1_current_score;
        if (player_0_score >= 100){
            document.querySelector('.player--1').classList.add('player--winner');
            document.querySelector('.player--1').classList.remove('player--active');
        } else {next_turn();}
    }
}
btn_hold.addEventListener('click', hold);
btn_new.addEventListener('click', start_game);
start_game();