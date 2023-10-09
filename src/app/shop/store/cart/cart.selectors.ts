import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CartStateInterface} from './cart-state.interface';

export const cartFeatureSelector =
  createFeatureSelector<CartStateInterface>('cart');

export const cartCountSelector = createSelector(cartFeatureSelector, (state) =>
  state.cartItems.reduce((acc, item) => acc + item.count, 0)
);

export const cartSumSelector = createSelector(cartFeatureSelector, (state) =>
  state.cartProductItems.data.reduce(
    (acc, item) => acc + item.count * item.price,
    0
  )
);

export const cartItemsSelector = createSelector(
  cartFeatureSelector,
  (state) => state.cartItems
);
export const cartProductsSelector = createSelector(
  cartFeatureSelector,
  (state) => state.cartProductItems.data
);
export const cartProductsIsLoadingSelector = createSelector(
  cartFeatureSelector,
  (state) => state.cartProductItems.isLoading
);
export const cartProductsIsErrorSelector = createSelector(
  cartFeatureSelector,
  (state) => state.cartProductItems.error
);
