import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Store} from '@ngrx/store';
import {ProductInterface} from 'src/app/shared/types/product.interface';
import {
  decrementCartAction,
  incrementCartAction,
  removeCartAction,
} from '../../store/cart/actions/cart.action';

@Component({
  selector: 'pa-cart-product-cart',
  templateUrl: './cart-product-cart.component.html',
  styleUrls: ['./cart-product-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartProductCartComponent {
  @Input({alias: 'product', required: true}) productProp!: ProductInterface & {
    count: number;
  };

  constructor(private store: Store) {}
  increment() {
    this.store.dispatch(incrementCartAction({id: String(this.productProp.id)}));
  }
  decrement() {
    this.store.dispatch(decrementCartAction({id: String(this.productProp.id)}));
  }
  remove() {
    this.store.dispatch(removeCartAction({id: String(this.productProp.id)}));
  }
}
