import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
//The hero property must be an Input property, because the external HeroesComponent will bind to it. So we import Input
import { Input } from "@angular/core";
//imports added to make the HeroDetailComponent routable:
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {HeroService} from "../services/hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  //? to indicate the variable is undefined: not initialized with a value, but not null
  //Since this component only receives a Hero object and displays it, this class doesnt' need more logic

  constructor(
    private route: ActivatedRoute,
    //ActivatedRoute holds info about the route to this instance of the HeroDetailsComponent: this component is interested
    //in the route's parameters (id parameter in the URL)
    private heroService: HeroService,
    //to get data from the remote server
    private location: Location
    //Location is een Angular service for interacting with the browser: we will use it to navigate back to the view that
    //navigated here
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //route.snapshot: static image of the route information shortly after the component was created
    //paramMap is a dictionary of route parameter values extracted from the URL
    //Route parameters are always Strings, the Number function converts the string to number
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
