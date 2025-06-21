import { Home } from './home/home';
import { CanDeactivateFn } from '@angular/router';

// 'checkGuard' adlı bir CanDeactivate guard fonksiyonu tanımlanır
// Bu guard, kullanıcı bir component'ten çıkmak istediğinde devreye girer
export const checkGuard: CanDeactivateFn<Home> = (
  component, // Şu anki aktif component örneği (burada: Home)
  currentRoute, // Aktif olan rota (sayfa) bilgisi
  currentState, // Şu anki URL durumu
  nextState // Gitmek istenen URL durumu
) => {
  // Kullanıcıya sayfadan çıkmak isteyip istemediğini sorar
  var result = confirm('Sayfadan çıkmak istiyor musunuz?');
  // ❗ Şu an her durumda çıkışa izin veriliyor çünkü return true
  return result;
};
