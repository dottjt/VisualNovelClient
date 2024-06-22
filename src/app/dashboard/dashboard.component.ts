import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'

import { NavbarComponent } from '../shared/navbar/navbar.component'

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  // existingSlides = signal([])

  // searchHeroes(term: string): observable<Hero[]>{
  //   const params = new HttpParams({fromString: 'name=term'});
  //     return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
  //  }
}
