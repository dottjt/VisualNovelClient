import { HttpClient } from '@angular/common/http'
import { Component, signal } from '@angular/core';
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

  constructor(private httpClient: HttpClient) {
    // const params = new HttpParams({fromString: 'name=term'});
    // const existingSlides = this.httpClient.request('GET', 'http://localhost:5235/weatherforecast', { responseType:'json' });

    // httpClient.get<any>('http://localhost:5235/weatherforecast').subscribe(obj => {
    //   console.log(obj)
    // });
  }


  // searchHeroes(term: string): observable<Hero[]>{
  //   const params = new HttpParams({fromString: 'name=term'});
  //     return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
  //  }

}
