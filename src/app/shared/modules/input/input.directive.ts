import {Directive} from '@angular/core';

@Directive({
  selector: '[pa-inputText]',
  host: {
    class: 'pa-input',
    // '[class.p-filled]': 'filled',
  },
})
export class InputText {}
