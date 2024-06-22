import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core';

@Component({
  selector: 'novel-edit',
  standalone: true,
  imports: [],
  templateUrl: './novel-edit.component.html',
  styleUrl: './novel-edit.component.css'
})
export class NovelEditComponent {

  constructor(public httpClient: HttpClient) { }

  onSubmit() {
    this.httpClient.get<Novel[]>('/api/novels', { responseType: 'json' }).subscribe(obj => {
      this.novels = obj
    });;
  }
}
