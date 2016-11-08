import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Person } from "./person";
import { PersonService } from './person.service'
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'people',
  templateUrl: './people.component.html',
  providers: [PersonService]
})

export class PeopleComponent {
  title = 'People from Star Wars';

  term = new FormControl();

  people: Observable<Person[]>;
  // people: Person[] = [];
  errorMessage: string = '';
  

  constructor(private personService: PersonService){

    this.people = this.term.valueChanges
                 .debounceTime(400)
                 .distinctUntilChanged()
                 .switchMap(term => this.personService.searchAll(term));

//      this.personService
 //       .getAll()
  //      .subscribe(
   //       /* happy path */ p => this.people = p,
    //      /* error path */ e => this.errorMessage = e);
          
  }

  ngOnInit(){
    //this.people = this.personService.getAll();
  }

}

/*  Put this back into the PeopleComponent class if disconnecting from the service for testing
  title: string = 'The People from Star Wars';
  person: Person = ({
   id: 1,
    url: "A Url",
    name: "A name",
    weight: 66,
    height: 55
  })
  people: Person[] = [this.person]; */