interface GeometricShape {
    getArea():number;
    getPerimeter():number;
}

class Circle implements GeometricShape {
    radius:number;

    constructor( radius:number ) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements GeometricShape {

    constructor( private length:number, private width:number ) {

    }

    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return 2 * ( this.length + this.width );
    }
}

// let circle = new Circle( 3 );
// console.log( circle.getArea() );
// console.log( circle.getPerimeter() );
//
// let rectangle = new Rectangle( 3, 2 );
// console.log( rectangle.getArea() );
// console.log( rectangle.getPerimeter() );
let shapes = Array<GeometricShape>();

shapes.push( new Circle( 3 ) );
shapes.push( new Rectangle( 3, 2 ) );

shapes.forEach( ( shape ) => {
    console.log( shape.getArea() );
    console.log( shape.getPerimeter() );
} );
