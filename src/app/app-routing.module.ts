import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
//routes tell the Router which view to display when a user follows a link
//typically has two properties:
//      path: string that matches the URL in the browser address bar
//      component: component that the router should create when navigating to this route
const routes: Routes = [{path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  //to make the application navigate to the dashboard automatically:
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  //add a parametrized route for the hero detail view:
  {path: 'detail/:id', component: HeroDetailComponent,}
  //the colon (:) character in the path indicates that :id is a placeholder for a specific hero id.
];
//This tells the router to match that URL to path: 'heroes' and display the HeroesComponent when the URL is something
//like localhost:4200/heroes.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
