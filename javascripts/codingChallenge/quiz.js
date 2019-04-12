/* (function() {
	function Question(question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}
	Question.prototype.displayRandomQuestion = function() {
		console.log(this.question);
		for (let i = 0; i < this.answers.length; i++) {
			console.log(i + ": " + this.answers[i]);
		}
	};

	Question.prototype.checkAnswer = function(ans) {
		if (ans === this.correct) {
			console.log("Correct answer!!!!");
		} else {
			console.log("Wrong answer");
		}
	};

	let q1 = new Question("Is Sang is the most handsome?", ["Yes", "No"], 0);
	let q2 = new Question("Is Sang is a Student?", ["Yes", "No"], 0);
	let q3 = new Question(
		"Where is Sang live",
		["Sai Gon", "America", "ThaiLand"],
		1
	);

	let question = [q1, q2, q3];

	let randomNumberQuestion = Math.floor(Math.random() * question.length);

	question[randomNumberQuestion].displayRandomQuestion();

	let answerInput = parseInt(prompt("Please enter your answer"));

	question[randomNumberQuestion].checkAnswer(answerInput);
})();
*/

(function() {
	function Question(question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}
	Question.prototype.displayRandomQuestion = function() {
		console.log(this.question);
		for (let i = 0; i < this.answers.length; i++) {
			console.log(i + ": " + this.answers[i]);
		}
	};

	Question.prototype.checkAnswer = function(ans, callback) {
		let sc;
		if (ans === this.correct) {
			console.log("Correct answer!!!!");
			sc = callback(true);
		} else {
			console.log("Wrong answer");
			sc = callback(false);
		}
		this.displayScore(sc);
	};

	Question.prototype.displayScore = function(score) {
		console.log("Yout current score is: " + score);
		console.log("-----------------");
	};

	let q1 = new Question("Is Sang is the most handsome?", ["Yes", "No"], 0);
	let q2 = new Question("Is Sang is a Student?", ["Yes", "No"], 0);
	let q3 = new Question(
		"Where is Sang live",
		["Sai Gon", "America", "ThaiLand"],
		1
	);
	let question = [q1, q2, q3];
	function score() {
		var sc = 0;
		return function(correct) {
			if (correct) {
				sc++;
				// console.log(sc);
			} else {
				return sc;
			}
		};
	}

	let keepScore = score();
	function nextQuestion() {
		let randomNumberQuestion = Math.floor(Math.random() * question.length);

		question[randomNumberQuestion].displayRandomQuestion();

		let answerInput = prompt("Please enter your answer");

		if (answerInput !== "exit") {
			question[randomNumberQuestion].checkAnswer(
				parseInt(answerInput),
				keepScore
			);
			nextQuestion();
		}
	}
	nextQuestion();
})();
