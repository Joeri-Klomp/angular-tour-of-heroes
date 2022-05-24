//Angular needs to know how the pieces of your application fit together and what other files and libraries the
//application requires. This information is called metadata.
//Some of the metadata is in the @Component decorators that you added to your component classes. Other critical metadata
//is in @NgModule decorators. The most important @NgModule decorator annotates the top-level AppModule class.
// The Angular CLI generated this AppModule class when it created the project.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//HeroesComponent must be imported and added to the declarations here, was done automatically by creating the component
import { HeroesComponent } from './heroes/heroes.component';
//ngModel (two-way data binding syntax) isn't available by default, belongs to FormsModule
import { FormsModule } from "@angular/forms";
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component'; // <-- NgModel lives here


@NgModule({
  declarations: [ // <-- declare components here
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [ // <-- external modules that the application needs
    BrowserModule,
    AppRoutingModule,
    FormsModule //FormsModule is added here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
