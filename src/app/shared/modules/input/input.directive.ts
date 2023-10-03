import {Directive} from '@angular/core';

@Directive({
  selector: '[pa-InputText]',
  host: {
    class: '',
    // '[class.p-filled]': 'filled',
  },
})
export class InputText {}
