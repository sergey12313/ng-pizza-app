import {createAction, props} from '@ngrx/store';
import {CartActionTypes} from '../cart.action-types';

export const addCartAction = createAction(
  CartActionTypes.CART_ADD,
  props<{id: string}>()
);
