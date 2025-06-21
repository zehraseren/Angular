import { Home } from './home/home';
import { CanDeactivateFn } from '@angular/router';

export const checkGuard: CanDeactivateFn<Home> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  var result = confirm('Sayfadan çıkmak istiyor musunuz?');
  return true;
};
