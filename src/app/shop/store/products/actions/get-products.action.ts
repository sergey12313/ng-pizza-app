import {ProductsType} from 'src/app/shop/types/products.type';
import {createAction, props} from '@ngrx/store';
import {ProductsActionTypes} from '../products.action-types';

export const getProductsAction = createAction(ProductsActionTypes.GET_PRODUCTS);

export const getProductsSuccessAction = createAction(
  ProductsActionTypes.GET_PRODUCTS_SUCCESS,
  props<{products: ProductsType}>()
);

export const getProductsFailureAction = createAction(
  ProductsActionTypes.GET_PRODUCTS_FAILURE
);
