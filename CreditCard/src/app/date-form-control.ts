import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  constructor(value: string | null = '', validators: any[] = []) {
    super(value || '', validators);
  }
  override setValue(value: string | null, options: any): void {
    if (!value) {
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }
    
    if (value?.match(/^\d{2}\/\d{2}$/)) {
      return;
    }

    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }

    if (value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
