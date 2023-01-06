"use strict"
/*//Burger JavaScript
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.main__title');
let container = document.querySelector('.container');
burger.addEventListener('click', function(){
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	container.classList.toggle('lock');


})

//ibg JavaScript

function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();


*/



//Burger JQuery
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.main__title').toggleClass('active');
		$('body').toggleClass('lock');
	});

//ibg JQuery
function ibg(){
$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}
ibg();


});
