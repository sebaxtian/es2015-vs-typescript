import {Person} from './person';
import {PeopleList} from './people-list';

class App {

    static createJusticeLeague() {
        let batman = new Person( "Bruce", "Wayne" );
        let superman = new Person( "Clark", "Kent" );
        let justiceLeague = new PeopleList( [] );

        justiceLeague.addPerson( batman );
        justiceLeague.addPerson( superman );
        justiceLeague.printAll();
    }
}

App.createJusticeLeague();
