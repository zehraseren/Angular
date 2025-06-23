import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

// authInterceptor: Her HTTP isteğine müdahale eden interceptor fonksiyonudur
// Amaç: İsteklerin header'larına kimlik doğrulama bilgisi (Bearer token) ve özel 'Year' bilgisini eklemektir
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Gelen isteği klanlanır, çünkü Angular'da isteği direkt değiştiremeyiz, immutable yapıda. Ancak bu isteğe müdahale edilebilir
  const clone = req.clone({
      // Yeni header'ları eklenir: Authorization ve Year.
    headers: new HttpHeaders({
      Authorization: 'Bearer token...', // Burada gerçek token'ını yerleştirilir
      Year: 2025, // İsteğe özel, örneğin versiyon ya da tarih bilgisi gibi düşünülebilir
    }),
  });
  // Modifiye edilmiş isteği zincirde bir sonraki adıma verilir
  return next(clone);
};
