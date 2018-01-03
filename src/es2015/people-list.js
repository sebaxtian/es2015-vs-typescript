export class PeopleList {
    constructor( people ) {
        this.people = people;
    }

    addPerson( person ) {
        this.people.push( person );
    }

    printAll() {
        this.people.forEach( ( person ) => {
            person.print();
        } );
    }
}
