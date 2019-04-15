var names = ["Sang", "Dao", "Duc", "Nam", "Trong"];
function sumFunc(a, b, c, d) {
	return a + b + c + d;
}

// ES 5
var years = [1999, 2000, 2001, 2002];

var sum1 = sumFunc.apply(null, years);
// console.log(sum1);

// ES6
const numbers = [1, 2, 2, 22];
const sum2 = sumFunc(...numbers);
const family1 = ["Sang", "Dao", "Trong"];
const family2 = ["Duc", "Nam", "John"];
const bigFamily = [...family1, ...family2];

// console.log(sum2);
console.log(bigFamily);
