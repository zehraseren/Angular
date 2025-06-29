import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Template-driven form için kullanılan model
  todo: { title: string; completed: boolean } = { title: '', completed: false };

  // Reactive form için FormControl’leri içeren bir nesne
  controls: any = {
    titleR: new FormControl('', [Validators.required, Validators.minLength(3)]), // En az 3 karakter ve zorunlu
    completedR: new FormControl(false), // Boolean tipi form kontrolü
  };

  // FormControl'leri bir FormGroup içine toplanır
  groupReactive = new FormGroup(this.controls);

  constructor() {
    // Formun tamamına başlangıç değeri atar
    this.groupReactive.setValue({ titleR: 'Default Value', completedR: false });
    // Sadece titleR alanına yeni değer verir
    this.groupReactive.controls['titleR'].setValue('Default Value 2');
  }

  // Template-driven formun submit edilmesi
  save(form: NgForm) {
    if (!form.valid) {
      alert('Not valid'); // Eğer form geçersizse kullanıcıya bilgi verir
      return;
    }
    console.log(form.value); // Geçerli form verisi konsola yazdırılır
  }

  // Reactive formun submit edilmesi
  saveReactive() {
    console.log(this.groupReactive.valid); // Form geçerli mi?
    console.log(this.groupReactive.value); // Formdaki mevcut değerler
    this.groupReactive.reset(); // Formu sıfırlar (başlangıç durumuna getirir)
  }
}
