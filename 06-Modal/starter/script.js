'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn_close_modal = document.querySelector('.close-modal');
const btns_show_modal = document.querySelectorAll('.show-modal');

function hide_modal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btns_show_modal.length; i++){
    btns_show_modal[i].addEventListener('click', function (){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
}

btn_close_modal.addEventListener('click', hide_modal);
overlay.addEventListener('click', hide_modal);
document.addEventListener('keydown', (e)=>{
    if (e.key === "Escape"){
        hide_modal();
    }
});