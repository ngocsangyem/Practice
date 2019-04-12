function sum(){
	let numbers = Array.from(arguments);
	let result = 0;
	for (let i = 0; i < numbers.length; i++) {
		result += numbers[i];
	}
	return result;
};


function average(){
	let sumResult = sum.apply(null, arguments);
	return sumResult / arguments.length
};


let johnTeamScore = average(89, 120, 103);
let mikeTeamScore = average(116, 94, 123);
let maryTeamScore = average(97, 134, 105);

if (johnTeamScore > mikeTeamScore && johnTeamScore > maryTeamScore) {
	console.log('Congratulation!! John team is the winner: ' + johnTeamScore);
} else if (mikeTeamScore > johnTeamScore && mikeTeamScore > maryTeamScore) {
	console.log('Congratulation!! Mike team is the winner: ' + mikeTeamScore);
} else if (maryTeamScore > johnTeamScore && maryTeamScore > mikeTeamScore) {
	console.log('Congratulation!! Mike team is the winner: ' + mikeTeamScore);
} else {
	console.log('There is a draw');
}
