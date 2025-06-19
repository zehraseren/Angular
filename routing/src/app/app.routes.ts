import { Home } from './home/home';
import { About } from './about/about';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { Layouts } from './layouts/layouts';
import { Route, Routes } from '@angular/router';

export const homeRoute: Route = {
  path: '',
  component: Home,
};

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: '',
    component: Layouts,
    children: [
      homeRoute,
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'about',
        component: About,
      },
      {
        path: 'contact',
        component: Contact,
      },
      {
        // Parametre eklenmek istendiğinde aşağıdaki gibi olur
        path: 'contact/:params',
        component: Contact,
      },
    ],
  },
];

