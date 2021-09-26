// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
	const box = document.querySelector('button');

	box.addEventListener('touchmove', (e) => {
		e.preventDefault();

		console.log(e.targetTouches[0].pageX);

	});

});

//touches
//targetTouches
//changedTouches