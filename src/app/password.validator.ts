import { AbstractControl } from '@angular/forms';

export function ValidatePassword(control: AbstractControl) {
  var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$")
  if (!pattern.test(control.value)) {
    return { validPassword: false };
  }
  return null;
}