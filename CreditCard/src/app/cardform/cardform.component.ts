import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control';

@Component({
  selector: 'app-cardform',
  standalone: false,
  templateUrl: './cardform.component.html',
  styleUrl: './cardform.component.css',
})
export class CardformComponent {
  cardForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    cardNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
    ]),
    expiration: new DateFormControl(null, [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  get nameControl(): FormControl {
    return this.cardForm.get('name') as FormControl;
  }

  get cardNumberControl(): FormControl {
    return this.cardForm.get('cardNumber') as FormControl;
  }

  get expirationControl(): DateFormControl | null {
    const control = this.cardForm.get('expiration');
    return control instanceof DateFormControl ? control : null;
  }

  get securityCodeControl(): FormControl {
    return this.cardForm.get('securityCode') as FormControl;
  }

  onSubmit() {
    console.log(this.cardForm.value);
  }

  resetForm() {
    this.cardForm.reset();
  }
}
