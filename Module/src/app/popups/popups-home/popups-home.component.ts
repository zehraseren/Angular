import { Component } from '@angular/core';

@Component({
  selector: 'app-popups-home',
  standalone: false,

  templateUrl: './popups-home.component.html',
  styleUrl: './popups-home.component.css',
})
export class PopupsHomeComponent {
  modalOpen = false;
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
