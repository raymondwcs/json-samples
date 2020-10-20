class Point {
    constructor(x = 0, y = 0) {
        this.X = x;
        this.Y = y
    }
    move(x,y) {
        this.X = x;
        this.Y = y;
    }
    distance_from_origin() {
        // Euclidean distance
        return Math.sqrt(this.X**2 + this.Y**2);
    }
}

let p = new Point();
console.log(p.distance_from_origin());

p.move(10,10);
console.log(p.distance_from_origin());

class Square extends Point {
    constructor(width = 1) {   // default width
        super();
        this.Width = width;
    }
    area() {
        return(this.Width**2);
    }
}

let sq = new Square();
sq.width = 5;
console.log(sq.area());

sq.move(-5,-5);
console.log(sq.distance_from_origin());

console.log(sq instanceof Square);
console.log(sq instanceof Point);
console.log(sq instanceof Date);