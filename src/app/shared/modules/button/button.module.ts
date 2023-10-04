import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {Button} from './button.directive';

@NgModule({
  declarations: [Button],
  imports: [CommonModule],
  exports: [Button],
})
export class ButtonModule {}
