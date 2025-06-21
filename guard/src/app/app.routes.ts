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
    //canActivateChild: [() => inject(Auth).isAuthenticated(), authGuard],
    children: [
      {
        path: '',
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
