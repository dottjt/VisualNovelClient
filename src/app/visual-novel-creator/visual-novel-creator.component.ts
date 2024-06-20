import { HttpClient } from '@angular/common/http'
import { Component, signal } from '@angular/core';
import { VisualNovelChaptersComponent } from './visual-novel-chapters/visual-novel-chapters.component'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-visual-novel-creator',
  standalone: true,
  imports: [
    VisualNovelChaptersComponent,
    RouterOutlet,
  ],
  templateUrl: './visual-novel-creator.component.html',
  styleUrl: './visual-novel-creator.component.css'
})
export class VisualNovelCreatorComponent {
  existingSlides = signal([])

  constructor(private httpClient: HttpClient) {
    // const params = new HttpParams({fromString: 'name=term'});
    // const existingSlides = this.httpClient.request('GET', 'http://localhost:5235/weatherforecast', { responseType:'json' });

    httpClient.get<any>('http://localhost:5235/weatherforecast').subscribe(obj => {
      console.log(obj)
    });
  }


  // searchHeroes(term: string): observable<Hero[]>{
  //   const params = new HttpParams({fromString: 'name=term'});
  //     return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
  //  }

}
