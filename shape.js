class Shape {
    constructor() {
        this.X = 0;
        this.Y = 0;
    }
    move(x,y) {
        this.X = x;
        this.Y = y;
    }
    distance_from_origin() {
        // Euclidean distance
        return Math.sqrt(this.X*this.X + this.Y*this.Y);
    }
}

let s = new Shape();
console.log(s.distance_from_origin());

s.move(10,10);
console.log(s.distance_from_origin());

class Square extends Shape {
    constructor(width = 1) {   // default width
        super();
        this.width = width;
    }
    area() {
        return(this.width * this.width);
    }
}

let sq = new Square();
sq.width = 5;
console.log(sq.area());

sq.move(-5,-5);
console.log(sq.distance_from_origin());

console.log(sq instanceof Square);
console.log(sq instanceof Shape);
console.log(sq instanceof Date);