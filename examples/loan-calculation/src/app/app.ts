import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <h1>Faiz Hesaplama</h1>
    <div>
      <h4>Faiz Türü:</h4>
      <label>
        <input type="radio" value="aylik" [(ngModel)]="faizTuru" /> Aylık
        <input type="radio" value="yillik" [(ngModel)]="faizTuru" /> Yıllık
      </label>
    </div>
    <hr />
    <label>İstediğiniz Miktarı Giriniz: </label>
    <input type="number" [(ngModel)]="miktar" /> ₺
    <div>
      <label>Vade Süresini Seçiniz: </label>
      <select [(ngModel)]="vade" (change)="faizOraniGoster()">
        @if(faizTuru === "aylik") {
        <option [value]="3">3</option>
        <option [value]="6">6</option>
        <option [value]="9">9</option>
        } @else {
        <option [value]="1">1</option>
        <option [value]="2">2</option>
        <option [value]="3">3</option>
        }
      </select>
      <br />
      <label>Faiz Oranı (%): </label>
      <label> {{ faiz }} </label>
      <br />
      <br />
      <button (click)="calculate()">Hesapla</button>
    </div>
    <hr />
    <h4>Aylık Taksit Miktarı:</h4>
    <label>{{ aylikTaksitTutari }} ₺</label>
    <br />
    <h4>Toplam Faiz Miktarı:</h4>
    <label>{{ toplamFaiz }} ₺</label>
    <br />
    <h4>Toplam Ödeme Miktarı:</h4>
    <label>{{ toplamOdeme }} ₺</label>
  `,
})
export class App {
  faizTuru: string = '';
  vade: number = 0;
  faiz: number = 0;
  miktar: number = 0;
  aylikTaksitTutari: number = 0;
  toplamOdeme: number = 0;
  toplamFaiz: number = 0;

  mySelect: number = 0;

  faizOraniGoster() {
    this.vade = Number(this.vade);

    if (this.faizTuru === 'aylik') {
      if (this.vade === 3) {
        this.faiz = 0.3;
      } else if (this.vade === 6) {
        this.faiz = 0.5;
      } else if (this.vade === 9) {
        this.faiz = 0.7;
      }
    } else {
      if (this.vade === 1) {
        this.faiz = 1.03;
      } else if (this.vade === 2) {
        this.faiz = 1.57;
      } else if (this.vade === 3) {
        this.faiz = 1.97;
      }
    }
  }

  calculate() {
    this.toplamFaiz = Number(this.toplamFaiz);
    this.toplamOdeme = Number(this.toplamOdeme);
    this.aylikTaksitTutari = Number(this.aylikTaksitTutari);

    const toplamFaizOrani = this.faiz;
    const toplamFaizMiktari = this.miktar * toplamFaizOrani;
    const toplamOdemeMiktari = this.miktar + toplamFaizMiktari;
    const aylikTaksit = toplamOdemeMiktari / this.vade;

    this.toplamFaiz = toplamFaizMiktari;
    this.toplamOdeme = toplamOdemeMiktari;
    this.aylikTaksitTutari = aylikTaksit;
  }
}
