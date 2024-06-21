import { Component } from '@angular/core';

@Component({
  selector: 'novels',
  standalone: true,
  imports: [],
  templateUrl: './novels.component.html',
  styleUrl: './novels.component.css'
})
export class NovelsComponent {
  novels = []
}
