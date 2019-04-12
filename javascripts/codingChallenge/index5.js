var johnFamilly = {
	name: 'John',
	bills: [124, 48, 268, 180, 42],
	tipCalc: function () {
		this.tip = [];
		this.finalValue = [];
		for (let i = 0; i < this.bills.length; i++) {
			let percentage;
			let bill = this.bills[i];
			if (bill < 50) {
				percentage = 0.2;
			} else if (50 <= bill >= 200) {
				percentage = 0.15;
			} else {
				percentage = 0.1;
			}
			this.tip[i] = bill * percentage;
			this.finalValue[i] = bill + bill * percentage;
		}
	}
};

var markFamilly = {
	name: 'Mark',
	bills: [77, 475, 110, 45],
	tipCalc: function () {
		this.tip = [];
		this.finalValue = [];
		for (let i = 0; i < this.bills.length; i++) {
			let percentage;
			let bill = this.bills[i];
			if (bill < 100) {
				percentage = 0.2;
			} else if (100 <= bill >= 300) {
				percentage = 0.1;
			} else {
				percentage = 0.25;
			}
			this.tip[i] = bill * percentage;
			this.finalValue[i] = bill + bill * percentage;
		}
	}
};

// function sum(){
// 	let money = Array.from(arguments);
// 	let moneyResult = 0;
// 	for (let i = 0; i < money.length; i++) {
// 		moneyResult += money[i];
// 	}
// 	return moneyResult;
// }
// function average() {
// 	let sumCalc = sum.apply(null, arguments);
// 	return sumCalc / arguments.length;
// }

function average(tips) {
	sum = 0;
	for (let i = 0; i < tips.length; i++) {
		sum += tips[i];
	}
	return sum / tips.length;
}



markFamilly.tipCalc();
console.log(markFamilly);
johnFamilly.tipCalc();
console.log(johnFamilly);

markFamilly.average = average(markFamilly.tip);
johnFamilly.average = average(johnFamilly.tip);


console.log(markFamilly, johnFamilly);
