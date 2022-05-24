import { Injectable } from '@angular/core';
import { Hero} from "../hero";
import {HEROES} from "../mock-heroes";
//Angulars HttpClient methods return RxJS Observables, here we simulate getting data from the server
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
//@Injectable marks the class as one that participates in the dependency injection system
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("HeroService: fetched heroes");
    //of(HEROES) returns an Observable<Hero[]>, much like a get request with Angulars HttpClient would
    return heroes;
  }

  constructor(private messageService: MessageService) {
    // we inject the MessageService
  }

  getHero(id: number): Observable<Hero> {
    //here the assumption is made that a hero with a specified id always exists
    const hero = HEROES.find(value => value.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
