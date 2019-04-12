// Function constructor

// let sang = {
// 	name: 'Sang',
// 	yearOfBirth: 1999,
// 	job: 'Student'
// };

let Person = function(name, yearOfBirth, job){
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
};

Person.prototype.calcBirth = function(){
	console.log(2018 - this.yearOfBirth);
}

let john = new Person('John', 1999, 'Student');

john.calcBirth();

console.log(john);
