class Element {
	constructor(name, buildYear) {
		this.name = name;
		this.buildYear = buildYear;
	}
}

class Parks extends Element {
	constructor(name, buildYear, area, numTress) {
		super(name, buildYear);
		this.area = area;
		this.numTress = numTress;
	}
	treeDensity() {
		const density = this.numTress / this.area;
		console.log(
			`${this.name} has a tree density of ${density} trees per square km`
		);
	}
}

class Street extends Element {
	constructor(name, buildYear, length, size = 3) {
		super(name, buildYear);
		this.length = length;
		this.size = size;
	}

	classifyStreet() {
		const classification = new Map();
		classification.set(1, "tiny");
		classification.set(2, "small");
		classification.set(3, "normal");
		classification.set(4, "big");
		classification.set(5, "huge");
		console.log(
			`${this.name}, build in ${this.buildYear}, is a ${classification.get(
				this.size
			)} street.`
		);
	}
}

// Park
let gPark = new Parks("Green Park", 1987, 0.2, 215);
let nPark = new Parks("National Park", 1894, 2.9, 3120);
let oPark = new Parks("Oak Park", 1850, 0.4, 500);

// Street
let dnStreet = new Street("Dang Nghiem", 1950, 2.9, 4);
let lvvStreet = new Street("Le Van Viet", 1966, 1.2, 2);
let nvtStreet = new Street("Nguyen Van Tang", 1976, 1.1, 5);

const allParks = [gPark, nPark, oPark];
const allStreets = [dnStreet, lvvStreet, nvtStreet];

function calc(arr) {
	const sum = arr.reduce((prev, curr, index) => prev + curr, 0);
	return [sum, sum / arr.length];
}

function reportPark(p) {
	console.log("------PARKS------");

	// Desity
	const ages = p.map(el => new Date().getFullYear() - el.buildYear);
	p.forEach(el => el.treeDensity());

	const [totalAge, avgerage] = calc(ages);

	console.log(`Our ${p.length} parks have an average of ${avgerage} years`);

	// Find park has more than 1000 tree

	const i = p.map(el => el.numTress).findIndex(el => el >= 1000);
	console.log(`${p[i].name} has more than 1000 tree`);
}

function reportStreet(s) {
	console.log("------Streets------");

	// Total and average length of the town's streets
	const [totalLength, avgLength] = calc(s.map(el => el.length));
	console.log(
		`Our ${
			s.length
		} streets have a total length of ${totalLength}km, with an average of ${avgLength}`
	);

	s.forEach(el => el.classifyStreet());
}

reportPark(allParks);
reportStreet(allStreets);
