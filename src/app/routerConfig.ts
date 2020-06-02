import { Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { ProjectsComponent } from '../pages/projects/projects.component';
import { RandomComponent } from '../pages/random/random.component';

const appRoutes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent 
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  { 
    path: 'random',
    component: RandomComponent
  }
];
export default appRoutes;