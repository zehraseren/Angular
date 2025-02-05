import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})
export class InputComponent {
  @Input() control!: FormControl;
  @Input() label!: string;

  showErrors() {
    if (!this.control) return false;
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
