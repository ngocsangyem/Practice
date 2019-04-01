// constructure function

function Mouse(name) {
	this.name = name;
}

let mouse1 = new Mouse('Sang');
let mouse2 = new Mouse('Dao');
// console.log(mouse2);

var cat = {
	name: 'Tom',
	stomach: [],
	eat: function(mouse){
		this.stomach.push(mouse);
		console.log(cat.stomach);
		return this;
	}
}

// cat.eat(mouse1).eat(mouse2);
// cat.stomach
