import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  // Router servisi dependency injection ile alınır
  constructor(private router: Router) {}

  // Kullanıcının oturum açıp açmadığını kontrol eden method
  isAuthenticated() {
    // localStorage'dan 'token' adlı anahtarla giriş bilgisi alınır
    const token: string | null = localStorage.getItem('token');

    // Eğer token yoksa (giriş yapılmamışsa)
    if (!token) {
      // Kullanıcı login sayfasına yönlendirilir
      this.router.navigateByUrl('/login');
      return false; // Yetkisiz → erişim reddedilir
      return false;
    }

    // Token varsa → kullanıcı yetkilidir
    return true;
  }
}
