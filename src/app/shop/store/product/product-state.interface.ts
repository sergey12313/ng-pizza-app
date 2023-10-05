import {Nullable} from 'src/app/shared/types/utils';
import {ProductsType} from '../../types/products.type';

export interface ProductStateInterface {
  isLoading: boolean;
  error: Nullable<string>;
  data: Nullable<ProductsType>;
}
