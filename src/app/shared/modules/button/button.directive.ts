import {Directive, Input} from '@angular/core';

@Directive({
  selector: '[pa-button]',
  host: {
    class: 'pa-button',
    '[class.pa-button_md]': 'size === "md"',
    '[class.pa-button_lg]': 'size === "lg"',
    '[class.pa-button_sm]': 'size === "sm"',
    '[class.pa-button_secondary]': 'appearance === "secondary"',
    '[class.pa-button_no-border]': 'appearance === "no-border"',
  },
})
export class Button {
  @Input('pa-size') size: 'md' | 'lg' | 'sm' = 'md';
  @Input('pa-appearance') appearance: 'primary' | 'secondary' | 'no-border' =
    'primary';
}
