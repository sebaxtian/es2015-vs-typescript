export class Person {
    constructor( firstName, lastName ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    print() {
        console.log( `${this.firstName} ${this.lastName}` );
    }
}
