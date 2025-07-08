import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // Ana route path'i - /tutorial URL'idir
    path: 'tutorial',
     // Lazy loading ile tutorial component'ini yükler
    loadComponent: () => import('../tutorial/tutorial'),
    // Alt route'ları tanımla (nested routing)
    children: [
      {
        path: 'home',
        loadComponent: () => import('../tutorial/home/home'),
      },
      {
        path: 'product',
        loadComponent: () => import('../tutorial/product/product'),
      },
      {
        path: 'category',
        loadComponent: () => import('../tutorial/category/category'),
      },
    ],
  },
  {
    // Ana route path'i - /practice URL'i
    path: 'practice',
    // Practice component'ini lazy yükler
    loadComponent: () => import('../practice/practice'),
    children: [
      {
        // /practice URL'i (boş path = parent route'un kendisi)
        path: '',
        // Default olarak home component'ini yükler
        loadComponent: () => import('../practice/pages/home/home'),
      },
      {
        // /practice/products URL'i
        path: 'products',
        // Tüm bir route modülünü lazy yükler (birden fazla route içerebilir)
        loadChildren: () =>
          import('../practice/pages/products/router').then((m) => m.routes), // Router dosyasından routes'ları alr
      },
    ],
  },
];
