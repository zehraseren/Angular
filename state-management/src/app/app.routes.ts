import { Home } from './home/home';
import { Routes } from '@angular/router';
import { Layouts } from './layouts/layouts';
import { Tutorial } from './tutorial/tutorial';
import { SmService } from './sm-service/sm-service';

export const routes: Routes = [
  {
    path: 'tutorial',
    component: Tutorial,
  },
  {
    path: 'service',
    component: SmService,
    children: [
      {
        path: '',
        component: Layouts,
        children: [
          {
            path: '',
            component: Home,
          },
        ],
      },
    ],
  },
];
