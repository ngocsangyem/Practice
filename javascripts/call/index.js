// Sử dung hàm call để goi hàm và đưa ra một giá trịcho đối tượng 'this'
// function cvJob (name, age){
// 	console.log(`Hi! My name is ${this.name}, i am ${this.age} years old`);
// }
// let sang = {
// 	name: 'Dao',
// 	age: 20
// }
// cvJob.call(sang)

// Sử dung call để chain constructors cho một đối tượng
// function cv(name, age){
// 	this.name = name;
// 	this.age = age;
// }

// function sang(name, age) {
// 	cv.call(this, name, age);
// 	this.class = '12A1';
// }

// function dao(name, age) {
// 	cv.call(this, name, age);
// 	this.class = '12D2'
// }

// let x = new sang('Sang', 22);
// let y = new dao('Dao', 20)

// console.log(x, y);


//  Sử dung hàm call để goi ?một hàm ẩn danh (anonymous function)

var animals = [{
		species: 'Lion',
		name: 'King'
	},
	{
		species: 'Whale',
		name: 'Fail'
	}
];

for (var i = 0; i < animals.length; i++) {
	(function () {
		this.print = function () {
			console.log('#' + i + ' ' + this.species +
				': ' + this.name);
			// console.log(i);
			
		}
		this.print();
	}).call(animals[i], i);
	// console.log(i);
	
}