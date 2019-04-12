
function tip(arr) {
	let money = Array.from(arr);
	let tip = [];
	let amountBill = []
	for (let i = 0; i < money.length; i++) {
		if (money[i] < 50) {
			let tip1 = (20 * money[i]) / 100;
			let amountBill1 = tip1 + money[i];
			amountBill.push(amountBill1)
			tip.push(tip1);
		} else if (50 <= money[i] <= 200) {
			let tip2 = (15 * money[i]) / 100;
			let amountBill2 = tip2 + money[i];
			amountBill.push(amountBill2)
			tip.push(tip2);
		} else {
			let tip3 = (10 * money[i]) / 100;
			let amountBill3 = tip3 + money[i];
			amountBill.push(amountBill3)
			tip.push(tip3);
		}
	}
	console.log('Containing all three tips: ' + tip);
	console.log('Containing paid amount: ' + amountBill);
}


tip([124, 48, 268]);

