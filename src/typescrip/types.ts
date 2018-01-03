
// Una "clase" Persona
class Person {

    firstName:string; // Tipos permitidos en TypeScript
    lastName:string;

    constructor( firstName:string, lastName:string ) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    print() {
        console.log( `${this.firstName} ${this.lastName}` );
    }
}

// Una "clase" PeopleList
class PeopleList {

    people:Array<Person>; // Tipos permitidos en TypeScript
    constructor( people:Array<Person> ) {
        this.people = people;
    }

    addPerson( person:Person ) {
        this.people.push( person );
    }

    printAll() {
        this.people.forEach( ( person ) => {
            // console.log(this); // Será la clase PeopleList misma!
            person.print();
        } );
    }
}

let batman = new Person( "Bruce", "Wayne" );
let superman = new Person( "Clark", "Kent" );
let justiceLeague = new PeopleList( [] );

justiceLeague.addPerson( batman );
justiceLeague.addPerson( superman );
// justiceLeague.addPerson( 1 );
justiceLeague.printAll();
