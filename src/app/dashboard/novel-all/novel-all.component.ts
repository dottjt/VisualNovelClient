import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'novel-all',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './novel-all.component.html',
  styleUrl: './novel-all.component.css'
})
export class NovelAllComponent {
  novels = []
}
