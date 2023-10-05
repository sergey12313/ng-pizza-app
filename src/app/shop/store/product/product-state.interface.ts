import {Nullable} from 'src/app/shared/types/utils';
import {ProductsType} from '../../types/products.type';
import {ProductInterface} from 'src/app/shared/types/product.interface';

export interface ProductStateInterface {
  isLoading: boolean;
  error: boolean;
  data: Nullable<ProductInterface>;
}
