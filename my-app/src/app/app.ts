import { Home } from './home/home';
import { About } from './about/about';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, NgClass, NgStyle, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

// Angular ve TypeScript projelerinde kodun okunabilirliğini ve bakımını artırmak için sınıf içi öğelerin (class members) belirli bir sıraya göre yazılması önerilir. Bu bir zorunluluk değil ama iyi bir kod standartıdır.
// 1. Public değişkenler (özellikler)
// 2. Constructor
// 3. Public methodlar (kullanıcı etkileşimiyle ilgili)
// 4. Diğer methodlar (güncelleme, yardımcı işler vs.)
export class App {
  helloWorld: string = 'Hello World from TS!';
  twoDataBinding: string = 'from Two Data Binding!';

  pClassNameRed: string = 'red';
  pClassNameBlue: string = 'blue';
  bgColor = 'orange';
  bgColorGreen = 'green';
  pStyle = {
    backgroundColor: this.bgColorGreen,
    color: 'white',
  };

  mySelect: string = '';

  clickMe() {
    alert('Beni Tıkladın!');
  }

  // Kullanıcının input alanına yazdığı değeri alıp 'helloWorld' değişkenine atayan method
  changeHelloWorldVariable(event: any) {
    // 'event.target.value' ile inputa girilen değeri alır
    // Bu değeri 'helloWorld' adlı değişkene aktarır (genellikle HTML'de gösterilir)
    this.helloWorld = event.target.value;
  }

  setPElementClass() {
    return 'purple';
  }

  checkActive() {
    return this.bgColorGreen === 'green';
  }
}

// 🧠 Not: Büyük projelerde şu sıralama daha net olur:
// 1. @Input() ve @Output() tanımları (jenerik component’lerde)
// 2. Public properties
// 3. Private properties
// 4. Constructor
// 5. Lifecycle methodları (ngOnInit, ngOnDestroy vs.)
// 6. Public methodlar
// 7. Private methodlar
