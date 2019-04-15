var boxes = document.querySelectorAll(".box");
/*
// ES5

var boxArr5 = Array.prototype.slice.call(boxes);

boxArr5.forEach(function(el) {
	return (el.style.backgroundColor = "#3498db");
});
for (var i = 0; i < boxArr5.length; i++) {
	if (boxArr5[i].className === "box box2") {
		continue;
	}
	boxArr5[i].textContent = "Changed text";
}
*/
// ES6

const boxArr6 = Array.from(boxes);

Array.from(boxes).forEach(el => {
	el.style.backgroundColor = "#3498db";
});

for (const curr of boxArr6) {
	if (curr.className.includes("box2")) {
		continue;
	}
	curr.textContent = "Changed text";
}
