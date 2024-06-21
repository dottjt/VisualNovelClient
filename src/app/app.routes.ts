import { Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { NovelsComponent } from './dashboard/novels/novels.component'
import { DashboardComponent } from './dashboard/dashboard.component'

export const routes: Routes = [
  {
    path: '',
    component: AppComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'dashboard', // child route path
        component: DashboardComponent, // child route component that the router renders
        children: [
          {
            path: '', // child route path
            component: NovelsComponent, // child route component that the router renders
          },
        ]
      },
    ],
  },
];



