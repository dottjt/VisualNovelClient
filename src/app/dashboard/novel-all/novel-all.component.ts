import { Component } from '@angular/core';

@Component({
  selector: 'novel-all',
  standalone: true,
  imports: [],
  templateUrl: './novel-all.component.html',
  styleUrl: './novel-all.component.css'
})
export class NovelAllComponent {
  novels = []
}
