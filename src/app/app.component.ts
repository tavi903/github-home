import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'github-home';
  names: String[];

  constructor(private router: Router) {
    this.names = ['Home', 'Random', 'Projects'];
  }

  navigateTo(path: string) {
    this.router.navigateByUrl("/"+path.toLowerCase());
  }
}
