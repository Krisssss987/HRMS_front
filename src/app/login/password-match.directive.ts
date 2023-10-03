import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appPasswordMatch]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordMatchDirective,
      multi: true,
    },
  ],
})


export class PasswordMatchDirective implements Validator {
  @Input('appPasswordMatch') passwordToMatch!: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    const password = control.value;
    const passwordToMatch = this.passwordToMatch;

    if (password !== passwordToMatch) {
      return { passwordMismatch: true };
    }

    return null;
  }
}
