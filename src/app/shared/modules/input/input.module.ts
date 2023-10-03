import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {InputText} from './input.directive';

@NgModule({
  declarations: [InputText],
  imports: [CommonModule],
  exports: [InputText],
})
export class InputModule {}
