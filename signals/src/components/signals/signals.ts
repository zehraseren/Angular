import { FormsModule } from '@angular/forms';
import { Component, signal } from '@angular/core';

export class UserModel {
  name: string = '';
  age: number = 0;
  email: string = '';
}

@Component({
  selector: 'app-signals',
  imports: [FormsModule],
  templateUrl: './signals.html',
})
export default class Signals {
  readonly name = signal<string>('Default değer buraya gelir');
  readonly user = signal<UserModel>(new UserModel());
  readonly users = signal<UserModel[]>([]); // Elde boş bir dizi olduğu belirtilir

  // Signal mutlaka bir başlangıç değeri ister, bu zorunluluğu aşmak için undefined verilebilir
  // Ancak bu durumda signal içeriği undefined olur ve bazı işlemlerde dikkatli kullanılmalıdır (null hatası fırlatabilir)
  // readonly user = signal<UserModel | undefined>(undefined);

  constructor() {
    // Yeni bir değer katama
    this.name.set('Yeni değer buraya gelir');

    // Var olan değeri güncelleme
    this.name.update((current) => current + '');

    // Sıfırdan set etmek için aağıdaki gibi kullanılır
    this.user.set(new UserModel());

    // Değerli bir şekilde set etmek için
    this.user.set({
      name: 'Zehra',
      age: 29,
      email: 'fatmazehraseren@gmail.com',
    });

    // Elde bir değişken varsa ve set edilmek isteniyorsa
    const userVariable = new UserModel();
    userVariable.name = 'Zehra Şeren';
    userVariable.age = 30;
    userVariable.email = 'fatmazehraseren@hotmail.com';
    this.user.set(userVariable);

    // Elde bir değişken varsa ve güncellenmek isteniyorsa
    this.user.update((prev) => ({
      ...prev,
      age: 31,
      isActive: true, // Örnek olarak yeni bir özellik eklemedir ancak bu HTML'de kullanılamıyor
    }));

    // Elde bir dizi varsa ve set edilmek isteniyorsa
    const users: UserModel[] = [];
    this.users.set(users);
    // Elde bir dizi varsa ve güncellenmek isteniyorsa
    const userVariables = new UserModel();
    this.users.update((prev) => [...prev, userVariables]);
  }
}
