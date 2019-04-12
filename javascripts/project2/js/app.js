// Budget controller
const budgetController = (function() {
	let Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	let Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var data = {
		allItems: {
			exp: [],
			inc: []
		},
		totals: {
			exp: 0,
			inc: 0
		}
	};

	return {
		addItem: function(type, des, val) {
			// console.log(data);

			let newItem, ID;

			// [1 2 3 4 5] => next ID = 6
			// [1 2 3 4 6 7] => next ID = 8
			// ID = lastID + 1

			// Create new Id
			if (data.allItems[type].length > 0) {
				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			} else {
				ID = 0;
			}

			// Create new item based on 'inc' or 'exp' type
			if (type === "exp") {
				newItem = new Expense(ID, des, val);
			} else if (type === "inc") {
				newItem = new Income(ID, des, val);
			}

			// Push it into our data structure
			console.log(data.allItems[type].push(newItem));

			// Return the new element
			return newItem;
		},
		testing: function() {
			console.log(data);
		}
	};
})();

// UI controller
const UIController = (function() {
	let DOMstrings = {
		inputType: ".add__type",
		decriptionType: ".add__description",
		valueInput: ".add__value",
		inputBtn: ".add__btn",
		incomeContainer: ".income__list",
		expenseContainer: ".expenses__list"
	};
	return {
		getInput: function() {
			return {
				type: document.querySelector(DOMstrings.inputType).value,
				description: document.querySelector(DOMstrings.decriptionType).value,
				value: document.querySelector(DOMstrings.valueInput).value
			};
		},
		addListItem: function(obj, type) {
			let html, newHtml, element;
			// Create HTML string

			if (type == "inc") {
				element = DOMstrings.incomeContainer;
				html =
					'<div class="item clearfix" id="income-%id%"> <div class="item__description">%decription%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
			} else if ((type = "exp")) {
				element = DOMstrings.expenseContainer;
				html =
					'<div class="item clearfix" id="expense-%id%"> <div class="item__description">%decription%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
			}
			// replace placeholder text with some  actual data
			newHtml = html.replace("%id%", obj.id);
			newHtml = newHtml.replace("%decription%", obj.description);
			newHtml = newHtml.replace("%value%", obj.value);
			// Insert the html into DOM
			document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
		},
		// make DOMstrings object can be access in other control || make DOMstrings to public
		getDomstrings: function() {
			return DOMstrings;
		}
	};
})();

// App controller
const appController = (function(budgetCtrl, UICtrl) {
	let setupEventListener = function() {
		let DOM = UICtrl.getDomstrings();

		document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

		document.addEventListener("keypress", function(event) {
			if (event.keyCode === 13 || event.which === 13) {
				ctrlAddItem();
			}
		});
	};

	let ctrlAddItem = function() {
		let input, newItem;
		// Get input data

		input = UICtrl.getInput();

		// Add item to the budget controller

		newItem = budgetCtrl.addItem(input.type, input.description, input.value);

		// Add the item to the UI

		UICtrl.addListItem(newItem, input.type);
		// Caculate the budget
		// Display the budget
	};

	return {
		init: function() {
			console.log("Application has started");
			setupEventListener();
		}
	};
})(
	budgetController, // assign to budgetCtrl
	UIController // assign to UICtrl
);

appController.init();
