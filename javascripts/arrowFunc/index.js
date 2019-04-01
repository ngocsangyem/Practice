var sang = {
	name: 'Sang',
	doSomething: function(){
		let that = this;
		setTimeout(() => {
			console.log(this.name);
			
		}, 2000);
	}
}

sang.doSomething();