let mark = {
	fullName: 'Mark',
	mass: 68,
	height: 1.76,
	calcBmi: function(){
		return this.bmi = this.mass / Math.pow(this.height, 2)
	}
};
let john = {
	fullName: 'John',
	mass: 80,
	height: 1.8,
	calcBmi: function(){
		return this.bmi = this.mass / Math.pow(this.height, 2)
	}
};
if (mark.calcBmi() > john.calcBmi()) {
	console.log(mark.fullName + ' is the highest BMI: ' + mark.calcBmi());
} else if (mark.calcBmi() < john.calcBmi()){
	console.log(john.fullName + ' is the highest BMI: ' + john.calcBmi());
} else {
	console.log('They are the same');
}

console.log(mark);
