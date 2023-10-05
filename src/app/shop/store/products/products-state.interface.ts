import {Nullable} from 'src/app/shared/types/utils';
import {ProductsType} from '../../types/products.type';

export interface ProductsStateInterface {
  isLoading: boolean;
  error: boolean;
  data: Nullable<ProductsType>;
}
