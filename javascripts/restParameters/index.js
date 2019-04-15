/*
// ES5

function fullAge5() {
	argsArr = Array.prototype.slice.call(arguments);

	argsArr.forEach(function(curr) {
		console.log(2019 - curr >= 18);
	});
}
// fullAge5(1999, 2000, 2001, 2002);

// ES6

function fullAge6(...years) {
	years.forEach(curr => console.log(2019 - curr >= 18));
}
fullAge6(1999, 2000, 2001, 2002);
*/

// ES5

function fullAge5(limit) {
	argsArr = Array.prototype.slice.call(arguments, 1);

	argsArr.forEach(function(curr) {
		console.log(2019 - curr >= limit);
	});
}
// fullAge5(18, 1999, 2000, 2001, 2002);

// ES6

function fullAge6(limit, ...years) {
	years.forEach(curr => console.log(2019 - curr >= limit));
}
fullAge6(18, 1999, 2000, 2001, 2002);
