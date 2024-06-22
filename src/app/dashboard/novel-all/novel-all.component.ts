import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { Novel } from '../../../types/Type'

@Component({
  selector: 'novel-all',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './novel-all.component.html',
  styleUrl: './novel-all.component.css'
})
export class NovelAllComponent {
  novels: Novel[] = []

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<Novel[]>('/api/novels', { responseType: 'json' }).subscribe(obj => {
      this.novels = obj
    });;
  }
}
