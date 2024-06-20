import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VisualNovelCreatorComponent } from './visual-novel-creator/visual-novel-creator.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    VisualNovelCreatorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'VisualNovelClient';
}
