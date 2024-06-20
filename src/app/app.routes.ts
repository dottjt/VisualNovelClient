import { Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { VisualNovelChaptersComponent } from './visual-novel-creator/visual-novel-chapters/visual-novel-chapters.component'
import { VisualNovelCreatorComponent } from './visual-novel-creator/visual-novel-creator.component'

export const routes: Routes = [
  {
    path: '',
    component: AppComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'dashboard', // child route path
        component: VisualNovelCreatorComponent, // child route component that the router renders
        children: [
          {
            path: 'chapters', // child route path
            component: VisualNovelChaptersComponent, // child route component that the router renders
          },
        ]
      },
    ],
  },
];



