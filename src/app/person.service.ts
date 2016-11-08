import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Person } from './person';


@Injectable()
export class PersonService {
    private baseUrl: string = 'http://swapi.co/api';
    constructor(private http : Http){
    }

    getAll(): Observable<Person[]>{
        let people$ = this.http
        .get(`${this.baseUrl}/people`, {headers: this.getHeaders()})
        .map(mapPersons);
        return people$;
    }
    searchAll(term: string): Observable<Person[]>{
        let people$ = this.http
        .get(`${this.baseUrl}/people/?search=${term}`, {headers: this.getHeaders()})
        .map(mapPersons);
        return people$;
    }
    get(id: number): Observable<Person> {
        let person$ = this.http
        .get(`${this.baseUrl}/people/${id}`, {headers: this.getHeaders()})
        .map(mapPerson)
        .catch(handleError);
        return person$;
    }

    private getHeaders(){
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
    
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}

function mapPersons(response:Response): Person[]{
    //throw new Error('ups! Force choke!');
   // The response of the API has a results
   // property with the actual results
   return response.json().results.map(toPerson)
}

// helper functions
function toPerson(r:any): Person{
  let course = <Person>({
    id: extractId(r),
    url: r.url,
    name: r.name,
    weight: Math.round(r.mass / 0.453592),
    height: Math.round(r.height / 2.54),
  });
  console.log('Parsed person:', course);
  return course;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(personData:any){
 let extractedId = personData.url.replace('http://swapi.co/api/people/','').replace('/','');
 return parseInt(extractedId);
}

function mapPerson(response:Response): Person{
  // toPerson looks just like in the previous example
  return toPerson(response.json());
}