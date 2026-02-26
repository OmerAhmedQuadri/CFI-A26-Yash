class Shape {
    constructor() {

    }
    area() {
        console.log('Area:');
    }
}

class Square extends Shape {
    constructor(side){
        super()
        this.side = side
    }
    area() {
        console.log('Area of square:', this.side * this.side);
    }
}

class Circle extends Shape {
    static Pi = 3.14
    constructor(radius) {
        super()
        this.radius =radius
    }
    area() {
        console.log('Area of circle:',2*Circle.Pi*this.radius);
    }
}

const c = new Circle(4)
const s = new Square(4)

c.area()
s.area()