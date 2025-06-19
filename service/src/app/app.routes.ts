import { A } from './components/a/a';
import { B } from './components/b/b';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: A,
  },
  {
    path: 'a',
    component: A,
  },
  {
    path: 'b',
    component: B,
  },
];
