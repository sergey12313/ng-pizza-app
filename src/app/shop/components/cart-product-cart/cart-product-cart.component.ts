import {Component, Input} from '@angular/core';
import {ProductInterface} from 'src/app/shared/types/product.interface';

@Component({
  selector: 'pa-cart-product-cart',
  templateUrl: './cart-product-cart.component.html',
  styleUrls: ['./cart-product-cart.component.scss'],
})
export class CartProductCartComponent {
  @Input({alias: 'product', required: true}) productProp!: ProductInterface & {
    count: number;
  };
}
