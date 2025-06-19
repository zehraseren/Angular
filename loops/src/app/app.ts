import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  todos: string[] = ['Example 1', 'Example 2', 'Example 3'];
  todosDif: TodoModel[] = [
    { workDif: 'Example 1', isCompletedDif: true },
    { workDif: 'Example 2', isCompletedDif: true },
    { workDif: 'Example 3', isCompletedDif: true },
  ];

  showFirstText: boolean = false;
  showSecondText: boolean = false;

  constructor() {
    this.save();
  }

  show(num: number) {
    if (num == 1) {
      this.showFirstText = true;
      this.showSecondText = false;
    } else {
      this.showFirstText = false;
      this.showSecondText = true;
    }

    // If blogu kadar güçlü değildir her şeyi kontrol edilemiyor ancak spesifik şartlarda kullanılabilir
    // switch (num) {
    //   case 1:
    //     this.showFirstText = true;
    //     this.showSecondText = false;
    //     break;
    //   case 2:
    //     this.showFirstText = false;
    //     this.showSecondText = true;
    //     break;
    //   default:
    //     break;
    // }
  }

  save() {
    console.log('---------- for Döngüsü ----------');
    // "for" ile rastgele bir döngü açılabilir
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }

    console.log('---------- Listeyi for İle Dönme ----------');
    // "for" ile bir liste döndürülebilir
    for (let i = 0; i < this.todosDif.length; i++) {
      console.log(this.todosDif[i].workDif);
    }

    console.log('---------- Listeyi forEach İle Dönme ----------');
    // "forEach" bir liste ile beraber kullanılabilir
    this.todosDif.forEach((val) => {
      console.log(val.workDif);
      console.log(val.isCompletedDif);
    });

    console.log('---------- Listeyi for of ile Data Dönme ----------');
    // Burada todosDif içindeki veriler data değişkenin içine atılır ve log ile beraber data'nın içindeki değerler yazdırabilir
    // data çok önerilen bir yöntemdir aynı zamanda async yapıları destekler
    for (let data of this.todosDif) {
      console.log(data.workDif);
      console.log(data.isCompletedDif);
    }

    console.log('---------- Listeyi for in ile Index Dönme ----------');
    // Aşağıdaki yöntemde ise "in" ile birlikte listenin index'ini alır, yukaruda ise "of" ile data'nın kendisini alır
    for (let index in this.todosDif) {
      console.log(index);
    }
  }
}

export class TodoModel {
  workDif: string = '';
  isCompletedDif: boolean = false;
}
