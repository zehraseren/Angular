import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  // Route parametrelerini almak için kullanılan klasik ActivatedRoute yaklaşımıdır.
  constructor(private activated: ActivatedRoute) {
    // Aktif route'un parametrelerini dinler (örneğin: /contact/5)
    this.activated.params.subscribe((res) => {
      // Route parametrelerinden 'params' adında bir alanı konsola yazdırmaya çalışır
      console.log(res['params']);
    });
  }
}
