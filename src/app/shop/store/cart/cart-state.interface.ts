import {ProductInterface} from 'src/app/shared/types/product.interface';
import {CartItemInterface} from '../../types/cart-item.interface';

export interface CartStateInterface {
  cartItems: Array<CartItemInterface>;
  cartProductItems: {
    isLoading: boolean;
    error: boolean;
    data: Array<ProductInterface & {count: number}>;
  };
}
