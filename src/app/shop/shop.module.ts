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
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {AvatarComponent} from './components/avatar/avatar.component';
import {ProductCartComponent} from './components/product-card/product-cart.component';
import {CartProductCartComponent} from './components/cart-product-cart/cart-product-cart.component';
import {NgIconsModule} from '@ng-icons/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {
  jamPlus,
  jamMinus,
  jamDocument,
  jamShoppingCart,
  jamClose,
  jamStarF,
  jamArrowLeft,
  jamPower,
  jamSearch,
  jamUserCircle,
  jamUserPlus,
} from '@ng-icons/jam-icons';
import {ProductPageComponent} from './components/product-page/product-page.component';
import {ProductsService} from './services/products.service';
import * as getProductsEffect from './store/products/effects/get-products.effect';
import * as getProductEffect from './store/product/effects/get-product.effect';
import * as getCartProductsEffect from './store/cart/effects/get-cart-product.effect';
import * as hydrateEffect from './store/cart/effects/hydrate.effect';
import {productsReducer} from './store/products/products.reducer';
import {HttpClientModule} from '@angular/common/http';
import {productReducer} from './store/product/product.reducer';
import {cartReducer} from './store/cart/cart.reducer';

const routes = [
  {
    path: '',
    component: ShopLayoutComponent,
    children: [
      {path: '', component: MainPageComponent},
      {path: 'cart', component: CartPageComponent},
      {path: 'success', component: SuccessPageComponent},
      {path: 'product/:id', component: ProductPageComponent},
    ],
  },
];

@NgModule({
  declarations: [
    SuccessPageComponent,
    CartPageComponent,
    MainPageComponent,
    ProductCartComponent,
    ShopLayoutComponent,
    SidebarComponent,
    AvatarComponent,
    CartProductCartComponent,
    ProductPageComponent,
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule,
    HeadingModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    NgIconsModule.withIcons({
      jamPlus,
      jamMinus,
      jamDocument,
      jamShoppingCart,
      jamClose,
      jamStarF,
      jamArrowLeft,
      jamPower,
      jamSearch,
      jamUserCircle,
      jamUserPlus,
    }),
    EffectsModule.forFeature([
      {...getProductsEffect},
      {...getProductEffect},
      {...getCartProductsEffect},
      {...hydrateEffect},
    ]),
    StoreModule.forFeature('products', productsReducer),
    StoreModule.forFeature('product', productReducer),
    StoreModule.forFeature('cart', cartReducer),
  ],
  providers: [ProductsService],
})
export class ShopModule {}
