// var sang = function doSomething(){
// 	console.log(this);
// };

// console.log(sang());


var sang = {
	name: 'Sang',
	doSomething: function(){
		console.log(this.name);
		function doInHere(){
			console.log(this);
		}
		doInHere;
	}
}


console.log(sang.doSomething());
