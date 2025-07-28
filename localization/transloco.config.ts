import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';

const config: TranslocoGlobalConfig = {
  // rootTranslationsPath: Dil dosyalarının konumu
  rootTranslationsPath: '/i18n/',

  // langs: Uygulamada kullanılacak diller
  langs: ['en', 'tr'],

  // opsiyonel olarak anahtar yöneticisi konfigürasyonu eklenebilir
  keysManager: {},
};

export default config;
