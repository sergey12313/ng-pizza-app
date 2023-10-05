import {Component, Input} from '@angular/core';
import {ProductInterface} from 'src/app/shared/types/product.interface';
import {addCartAction} from '../../store/cart/actions/cart.action';
import {Store} from '@ngrx/store';

@Component({
  selector: 'pa-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent {
  @Input({alias: 'product', required: true}) productProp!: ProductInterface;

  constructor(private store: Store) {}
  onCardAdd(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    this.store.dispatch(addCartAction({id: String(this.productProp.id)}));
  }
}
