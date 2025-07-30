import { Component, inject, signal } from '@angular/core';
import {
  FlexiToastIconType,
  FlexiToastOptionsModel,
  FlexiToastService,
} from 'flexi-toast';

@Component({
  selector: 'app-flexitoast',
  imports: [],
  templateUrl: './flexitoast.html',
})
export default class Flexitoast {
  // FlexiToastService'i inject ile alır
  readonly #toast = inject(FlexiToastService);

  // Toast ayarlarını reactive olarak saklayan signal
  readonly options = signal<FlexiToastOptionsModel>(
    new FlexiToastOptionsModel()
  );

  constructor() {
    // Varsayılan toast ayarları
    this.options().autoClose = true;
    this.options().themeClass = 'dark';
    this.options().position = 'bottom-right';
  }

  // Parametre olarak gelen ikona göre toast bildirimi gösterir
  callToast(icon: FlexiToastIconType) {
    let title = '';

    // İkon tipine göre başlık belirler
    switch (icon) {
      case 'success':
        title = 'Success';
        break;
      case 'info':
        title = 'Information';
        break;
      case 'error':
        title = 'Error';
        break;
      case 'warning':
        title = 'Warning';
        break;
      default:
        title = 'Unknown';
        break;
    }

    // Toast mesajını gösterir
    this.#toast.showToast(
      title, // Başlık
      'This is a message for ' + title, // Mesaj içeriği
      icon, // İkon tipi
      this.options() // Ayarlar
    );
  }

  // SweetAlert tarzı onay popup’ı açar
  callSwal() {
    this.#toast.showSwal(
      'Delete?', // Başlık
      'Are you sure you want to delete this item?', // Mesaj
      'Delete', // Onay buton metni
      () => {
        // Onaylandığında çalışacak fonksiyon
        this.#toast.showToast('Info', 'Item deleted successfully', 'info');
      },
      'Cancel' // İptal buton metni
    );
  }
}
