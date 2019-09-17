/*
function SimpleInterests() {
	this.principal = p;
	this.rate = r;
	this.period = t;
	this.interests = this.principal * this.rate * this.period;
}
*/
class SimpleInterests {
	constructor(p=1000000,r=0.01,t=10) {
		this.principal = p;
		this.rate = r;
		this.period = t;
		this.interests = this.principal * this.rate * this.period;
	}

	print() {
		console.log(`Interests for $${this.principal} at a yearly rate of \
${this.rate *100}% for ${this.period} years = $${this.interests}`);
	}
}

let obj1 = new SimpleInterests();
obj1.print();

let obj2 = new SimpleInterests(10000,0.03,10);
obj2.print();
