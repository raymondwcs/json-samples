/*
function SimpleInterests() {
	this.principal = p;
	this.rate = r;
	this.period = t;
	this.interests = this.principal * this.rate * this.period;
}
*/
class SimpleInterests {
	constructor(p,r,t) {
		this.principal = p;
		this.rate = r;
		this.period = t;
		this.interests = this.principal * this.rate * this.period;
	}
}

let obj = new SimpleInterests(10000,0.03,10);
console.log(`Interests for $${obj.principal} at a yearly rate of \
${obj.rate *100}% for ${obj.period} years = $${obj.interests}`);
