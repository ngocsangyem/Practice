// Object.create

let personProto = {
	calcAge: function(){
		console.log(2018 - this.yearOfBirth);
	}
};

let sang = Object.create(personProto);

sang.name = 'Sang';
sang.yearOfBirth = 1999;
sang.job = 'Student';

let dao = Object.create(personProto, {
	name: {value: 'Dao'},
	yearOfBirth: {value: 1999},
	job: {value: 'Student'}
})