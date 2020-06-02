import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { HomeComponent } from '../pages/home/home.component';
import { ProjectsComponent } from '../pages/projects/projects.component';
import { RandomComponent } from '../pages/random/random.component';

import appRoutes from "./routerConfig";
@NgModule({
  declarations: [
    AppComponent,
    MyHeaderComponent,
    HomeComponent,
    ProjectsComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
