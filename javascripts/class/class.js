




class Animal {
	constructor(name){
		this.name = name;
	}
	eat(){
		console.log('eating....' + this.name);
	}
}

class Tiger extends Animal {
	run(){
		console.log('run');
	}
}

class Bird extends Tiger {
	fly(){
		console.log('Fly away....');
		
	}
}


// let tiger1 = new Tiger('Sang');
// let bird1 = new Bird('Dao')


// bird1.fly()