"use strict";

const box = document.getElementById('box'),
	btns = document.getElementsByTagName('button'),
	circles = document.getElementsByClassName('circle'),
	wrapper = document.querySelector('.wrapper'),
	hearts = wrapper.querySelectorAll('.heart'),
	oneHeart = wrapper.querySelector('.heart');


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;


btns[1].style.borderRadius = "100%";

// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
	item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('sdfsdf');

div.classList.add('black');

wrapper.append(div);

// wrapper.prepend(div);

// hearts[0].after(div);

// circles[0].remove();

hearts[0].replaceWith(circles[2]);

div.innerHTML = '<h1>Hello world</h1>';

// div.textContent = '<h1>Hello world</h1>';

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');