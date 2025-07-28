import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
         // Dil dosyasını dinamik olarak çeker
        return this.http.get<Translation>(`/i18n/${lang}.json`);
    }
}

// Transloco çeviri dosyalarını HTTP üzerinden yükler
// Örnek: /i18n/en.json, /i18n/tr.json gibi
// inject() ile Angular'ın DI sisteminden HttpClient alınır
