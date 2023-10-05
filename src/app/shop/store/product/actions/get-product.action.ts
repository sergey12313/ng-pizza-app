import {createAction, props} from '@ngrx/store';
import {ProductActionTypes} from '../product.action-types';
import {ProductInterface} from 'src/app/shared/types/product.interface';

export const getProductAction = createAction(
  ProductActionTypes.GET_PRODUCT,
  props<{id: string}>()
);

export const getProductSuccessAction = createAction(
  ProductActionTypes.GET_PRODUCT_SUCCESS,
  props<{product: ProductInterface}>()
);

export const getProductFailureAction = createAction(
  ProductActionTypes.GET_PRODUCT_FAILURE
);
