import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./flexigrid/flexigrid'),
  },
  {
    path: 'flexitoast',
    loadComponent: () => import('./flexitoast/flexitoast'),
  },
  {
    path: 'flexiselect',
    loadComponent: () => import('./flexiselect/flexiselect'),
  },
];
