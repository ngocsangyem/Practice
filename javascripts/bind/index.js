// var sang = {
// 	name: 'Sang',
// 	sayHi: function(){
// 		console.log('My name is ' + this.name);
// 	}
// }

// // sang.sayHi();
// var dao = {
// 	name: 'Dao'
// }
// var oke = sang.sayHi.bind(dao)

// oke();
var button = document.getElementById('btn')
var me = {
	name: 'Sang',
	doSomething: function(){
		console.log(this.name + ' is walking');
	}
};

button.addEventListener('click', me.doSomething.bind(me))