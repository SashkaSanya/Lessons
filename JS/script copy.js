'use strict';

window.addEventListener('DOMContentLoaded', () => {
	let start = new Date();

	for (let i = 0; i < 10000000000; i++) {
		let some = i ** 15;
	}

	let end = new Date();

	console.log("Цикл отработал за " + (end - start) + ' милисекунд');
});



