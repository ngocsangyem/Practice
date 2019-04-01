


function Pet(action, run){
	this.action = action;
	this.run = run;
};



Pet.prototype.eat = function(food){
	console.log('eating ' + food);
};

function Dog(action, run) {
	
	Pet.call(this, arguments) // // thừa kế properties của construcrure function Pet (actice)
	console.log(this);
	
	
}
// Kế thừa prototype của Pet
Dog.prototype = new Pet();

let dog1 = new Dog('walk', 20)

console.log(dog1);
