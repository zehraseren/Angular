import { catchError, of } from 'rxjs';
import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';

// errorInterceptor: HTTP isteklerinde ortaya çıkabilecek hataları yakalayıp yönetmek için kullanılan interceptor fonksiyonudur
export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  // İsteği devam ettirilir, ama eğer hata olursa yakalanır ve işleme alınır
  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      // Hata geldiğinde konsola basılır, geliştirici dostu debug noktasıdır
      //debugger
      console.log(err);

      // Hata ile karşılaşıldığında stream'i boş bir Observable ile tamamlanır, böylece zincirin bozulmasını engellenir
      return of();
    })
  );
};
