import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {
  addCartAction,
  getCartProductsAction,
} from '../../store/cart/actions/cart.action';
import {Observable} from 'rxjs';
import {ProductInterface} from 'src/app/shared/types/product.interface';
import {
  cartProductsIsErrorSelector,
  cartProductsIsLoadingSelector,
  cartProductsSelector,
} from '../../store/cart/cart.selectors';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  isError$!: Observable<boolean>;
  data$!: Observable<Array<ProductInterface & {count: number}>>;

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
  }

  constructor(private store: Store) {}

  fetchData() {
    this.store.dispatch(getCartProductsAction());
  }

  initializeValues() {
    this.isLoading$ = this.store.pipe(select(cartProductsIsLoadingSelector));
    this.isError$ = this.store.pipe(select(cartProductsIsErrorSelector));
    this.data$ = this.store.pipe(select(cartProductsSelector));
  }
}
