import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SuccessPageComponent} from './components/success-page/success-page.component';
import {CartPageComponent} from './components/cart-page/cart-page.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {ShopLayoutComponent} from './components/shop-layout/shop-layout.component';
import {RouterModule} from '@angular/router';
import {InputModule} from '../shared/modules/input/input.module';
import {ButtonModule} from '../shared/modules/button/button.module';
import {HeadingModule} from '../shared/modules/heading/heading.module';

const routes = [
  {
    path: '',
    component: ShopLayoutComponent,
    children: [
      {path: '', component: MainPageComponent},
      {path: 'cart', component: CartPageComponent},
      {path: 'success', component: SuccessPageComponent},
    ],
  },
];

@NgModule({
  declarations: [
    SuccessPageComponent,
    CartPageComponent,
    MainPageComponent,
    ShopLayoutComponent,
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    HeadingModule,
    RouterModule.forChild(routes),
  ],
})
export class ShopModule {}
