import { AbstractControl } from '@angular/forms';

export function ValidateNumber(control: AbstractControl) {
  if (isNaN(control.value)) {
    return { validNumber: false };
  }
  return null;
}