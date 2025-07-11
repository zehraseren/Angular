import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'signals',
    loadComponent: () => import('../components/signals/signals'),
  },
  {
    path: 'computed',
    loadComponent: () => import('../components/computed/computed'),
  },
  {
    path: 'effect',
    loadComponent: () => import('../components/effect/effect'),
  },
  {
    path: 'resource',
    loadComponent: () => import('../components/resource/resource'),
  },
  {
    path: 'httpresource',
    loadComponent: () => import('../components/http-resource/http-resource'),
  },
  {
    path: 'input-output-viewchild',
    loadComponent: () =>
      import('../components/input-output-viewchild/input-output-viewchild'),
  },
];
