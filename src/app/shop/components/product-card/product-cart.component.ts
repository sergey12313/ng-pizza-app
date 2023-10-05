import {Component, Input} from '@angular/core';
import {ProductInterface} from 'src/app/shared/types/product.interface';

@Component({
  selector: 'pa-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent {
  @Input({alias: 'product', required: true}) productProp!: ProductInterface;
}
