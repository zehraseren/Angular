import { Auth } from './auth';
import { Home } from './home/home';
import { Login } from './login/login';
import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';
import { checkGuard } from './check-guard';
import { Layouts } from './layouts/layouts';

export const routes: Routes = [
  {
    path: '',
    component: Layouts,
    // canActivateChild ile tüm alt rotalarda auth kontrolü yapılabilir
    //canActivateChild: [() => inject(Auth).isAuthenticated(), authGuard],
    children: [
      {
        path: '',
        // Bu sayfaya gitmeden önce çıkış onayı istenir
        canActivate: [checkGuard],
        component: Home,
      },
      {
        path: 'about',
        component: Home,
      },
      {
        path: 'contact',
        component: Home,
      },
      {
        path: 'personals',
        component: Home,
      },
    ],
  },
  {
    path: 'login',
    component: Login,
  },
];
