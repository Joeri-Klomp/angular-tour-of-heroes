import { Component, OnInit } from '@angular/core';
//Import the Hero interface:
import { Hero } from "../hero";
import {HeroService} from "../services/hero.service";
import {MessageService} from "../services/message.service";

//@Component should always be added to a component class.
//-> it's a decorator function that specifies the metadata for the component
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

//component classes should always be exported, so it can be imported elsewhere (like in the AppModule)
export class HeroesComponent implements OnInit {
  //expose HEROES array for binding by defining it as a property:
  heroes: Hero[] = [];

  //inject HeroService, like in Java
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  //ngOnInit() is a lifecycle hook
  //called shortly after creating a component (good place for initialization logic)
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(value => this.heroes = value);
    //when HeroService makes a request to the server, this function must wait for the Observable to emit the array of
    //heroes. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
  }
}
