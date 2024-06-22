import { Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { NovelAllComponent } from './dashboard/novel-all/novel-all.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { NovelNewComponent } from './dashboard/novel-new/novel-new.component'
import { NovelEditComponent } from './dashboard/novel-edit/novel-edit.component'
import { HomeComponent } from './home/home.component'

export const routes: Routes = [
  {
    path: '',
    component: AppComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          {
            path: '',
            component: NovelAllComponent,
          },
          {
            path: 'new',
            component: NovelNewComponent,
          },
          {
            path: 'edit',
            component: NovelEditComponent,
          },

        ]
      },
    ],
  },
];



