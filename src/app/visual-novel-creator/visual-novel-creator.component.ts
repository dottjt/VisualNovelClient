import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core';

@Component({
  selector: 'app-visual-novel-creator',
  standalone: true,
  templateUrl: './visual-novel-creator.component.html',
  styleUrl: './visual-novel-creator.component.css'
})
export class VisualNovelCreatorComponent {
  // existingSlides: Slide[] =

  constructor(private httpClient: HttpClient) {
    // const params = new HttpParams({fromString: 'name=term'});
    // const existingSlides = this.httpClient.request('GET', 'http://localhost:5235/weatherforecast', { responseType:'json' });
    // console.log('existingSlides', existingSlides)
  }
  // searchHeroes(term: string): observable<Hero[]>{
  //   const params = new HttpParams({fromString: 'name=term'});
  //     return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
  //  }

}
