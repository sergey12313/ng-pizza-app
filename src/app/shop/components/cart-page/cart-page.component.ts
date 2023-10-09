import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {
  addCartAction,
  cartCheckoutAction,
  getCartProductsAction,
} from '../../store/cart/actions/cart.action';
import {Observable, map} from 'rxjs';
import {ProductInterface} from 'src/app/shared/types/product.interface';
import {
  cartCountSelector,
  cartProductsIsErrorSelector,
  cartProductsIsLoadingSelector,
  cartProductsSelector,
  cartSumSelector,
} from '../../store/cart/cart.selectors';
import {isLoggedInSelector} from 'src/app/shared/store/auth/auth.selectors';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  isError$!: Observable<boolean>;
  data$!: Observable<Array<ProductInterface & {count: number}>>;
  sum$!: Observable<number>;
  totalPrice$!: Observable<number>;
  count$!: Observable<number>;
  deliveryPrice = 169;
  isLoginIn$!: Observable<boolean>;
  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  constructor(private store: Store) {}

  fetchData() {
    this.store.dispatch(getCartProductsAction());
  }

  checkout() {
    this.store.dispatch(cartCheckoutAction());
  }
  initializeValues() {
    this.isLoading$ = this.store.pipe(select(cartProductsIsLoadingSelector));
    this.isError$ = this.store.pipe(select(cartProductsIsErrorSelector));
    this.data$ = this.store.pipe(select(cartProductsSelector));
    this.sum$ = this.store.pipe(select(cartSumSelector));
    this.totalPrice$ = this.sum$.pipe(map((sum) => sum + this.deliveryPrice));
    this.count$ = this.store.pipe(select(cartCountSelector));
    this.isLoginIn$ = this.store.pipe(select(isLoggedInSelector));
  }
}
