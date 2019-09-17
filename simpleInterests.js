/*
function SimpleInterests() {
	this.principal = p;
	this.rate = r;
	this.period = t;
	this.interests = this.principal * this.rate * this.period;
}
*/
const principal = 1000000;
const rate = 0.01;
const period = 10;

class SimpleInterests {
	constructor(p=principal,r=rate,t=period) {
		this.principal = p;
		this.rate = r;
		this.period = t;
		this.interests = this.principal * this.rate * this.period;
	}

	print() {
		console.log(`Interests for $${this.principal} at an annual rate of \
${this.rate *100}% for ${this.period} years = $${this.interests}`);
	}
}

let obj1 = new SimpleInterests();
obj1.print();

let obj2 = new SimpleInterests(10000);
obj2.print();

let obj3 = new SimpleInterests(10000,0.03);
obj3.print();

let obj4 = new SimpleInterests(10000,0.03,10);
obj4.print();
