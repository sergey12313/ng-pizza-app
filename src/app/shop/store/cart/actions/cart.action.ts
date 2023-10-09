import {createAction, props} from '@ngrx/store';
import {CartActionTypes} from '../cart.action-types';
import {ProductInterface} from 'src/app/shared/types/product.interface';
import {CartItemInterface} from 'src/app/shop/types/cart-item.interface';

export const addCartAction = createAction(
  CartActionTypes.CART_ADD,
  props<{id: string}>()
);

export const getCartProductsAction = createAction(
  CartActionTypes.GET_CART_PRODUCTS
);

export const hydrateCartItemsAction = createAction(
  CartActionTypes.HYDRATE_CART_ITEMS
);
export const hydrateCartItemsActionSuccessAction = createAction(
  CartActionTypes.HYDRATE_CART_ITEMS_SUCCESS,
  props<{items: Array<CartItemInterface>}>()
);
export const hydrateCartItemsActionFailureAction = createAction(
  CartActionTypes.HYDRATE_CART_ITEMS_FAILURE
);

export const getCartProductsSuccessAction = createAction(
  CartActionTypes.GET_CART_PRODUCTS_SUCCESS,
  props<{products: Array<ProductInterface & {count: number}>}>()
);

export const getCartProductsFailureAction = createAction(
  CartActionTypes.GET_CART_PRODUCTS_FAILURE
);

export const incrementCartAction = createAction(
  CartActionTypes.CART_INCREMENT,
  props<{id: string}>()
);
export const decrementCartAction = createAction(
  CartActionTypes.CART_DECREMENT,
  props<{id: string}>()
);
export const removeCartAction = createAction(
  CartActionTypes.CART_ITEM_REMOVE,
  props<{id: string}>()
);
export const cartClearAction = createAction(CartActionTypes.CART_CLEAR);
export const cartCheckoutAction = createAction(CartActionTypes.CART_CHECKOUT);
