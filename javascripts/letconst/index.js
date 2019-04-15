function Person(name) {
	this.name = name;
}
var friends = ["Duc", "Nam", "Long", "Tinh"];

Person.prototype.myFriends = function(listFriend) {
	var arr = listFriend.map(el => this.name + " is friends with " + el);

	console.log(arr);
};

new Person("Sang").myFriends(friends);
