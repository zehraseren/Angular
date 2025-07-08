import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // /practice/products URL'i (boş path = parent route)
    path: '',
    // Products ana component'ini yükler
    loadComponent: () => import('./products'),
  },
  {
    // /practice/products/create URL'i
    path: 'create',
    // Create product component'ini yükler
    loadComponent: () => import('./create-product/create-product'),
  },
];
