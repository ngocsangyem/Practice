function interviewQuestion(job) {
	return function(name) {
		if (job === "designer") {
			console.log(name + "can you please explain what UX desgin is in ");
		} else if (job === "teacher") {
			console.log(name + ", What subject do you teach ");
		} else {
			console.log("hello " + name + ", what do you do");
		}
	};
}
interviewQuestion("teacher")("Sang");
