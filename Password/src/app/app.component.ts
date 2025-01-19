import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  password = '';
  length: number = 0;

  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  modifyLetters() {
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  // Change Event Ekleme
  buttonClick() {
    // Harfler, sayılar ve semboller için tanımlamalar
    const letters = 'abcdefghijklmnoprstuvwyz'; // Geçerli harfler
    const numbers = '1234567890'; // Geçerli sayılar
    const symbols = '!@#$%^&*()'; // Geçerli semboller

    // Geçerli karakterlerin birikmesi için bir değişken
    let validChars = '';

    // Eğer harfler dahil edilecekse, 'validChars' değişkenine harfler eklenir
    if (this.includeLetters) {
      validChars += letters;
    }

    // Eğer sayılar dahil edilecekse, 'validChars' değişkenine sayılar eklenir
    if (this.includeNumbers) {
      validChars += numbers;
    }

    // Eğer semboller dahil edilecekse, 'validChars' değişkenine semboller eklenir
    if (this.includeSymbols) {
      validChars += symbols;
    }

    // Şifreyi oluşturacak değişken
    let generatedPassword = '';

    // Şifre uzunluğu kadar döngü çalıştırılır
    for (let i = 0; i < this.length; i++) {
      // Geçerli karakterler arasından rastgele bir karakter seçilir
      const index = Math.floor(Math.random() * validChars.length);

      // Seçilen karakter şifreye eklenir
      generatedPassword += validChars[index];
    }

    // Oluşturulan şifre 'Password' değişkenine atanır
    this.password = generatedPassword;
  }

  // Şifre Uzunluğunu Alma
  modifyLength(event: Event) {
    // "event.target" özelliği "HTMLInputElement" olarak belirtilerek, "value" özelliğine erişim sağlanır.
    // parseInt ile "value" özelliği metin olduğu için bir sayıya dönüştürülür.
    const parsedValue = parseInt((event.target as HTMLInputElement).value);

    // Eğer "parsedValue" geçerli bir sayıysa, "length" değişkenine atanır.
    // isNaN, bir değerin "Not-a-Number" (Geçersiz bir sayı) olup olmadığını kontrol eder.
    // Geçerli bir sayı değilse (örneğin, bir metinse), bu durum atlanır ve "length" değişmez.
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}
