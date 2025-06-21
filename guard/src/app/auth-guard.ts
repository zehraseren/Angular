import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// 'authGuard' adlı bir CanActivate fonksiyonu tanımlanır (standalone guard)
export const authGuard: CanActivateFn = (route, state) => {
  // localStorage'dan 'token' adlı değeri alır (kullanıcının giriş yapıp yapmadığını kontrol eder)
  const token: string | null = localStorage.getItem('token');
  // Router servisini inject eder (kullanıcıyı yönlendirmek için)
  const router = inject(Router);
  
  // Eğer token yoksa kullanıcı giriş yapmamıştır → login sayfasına yönlendirilir
  if (!token) {
    router.navigateByUrl('/login'); // Giriş sayfasına yönlendir
    return false; // Route erişimi engellenir
  }

  // Eğer token varsa route'a erişime izin verilir
  return true;
};
