import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CartStateInterface} from './cart-state.interface';

export const cartFeatureSelector =
  createFeatureSelector<CartStateInterface>('cart');

export const cartCountSelector = createSelector(cartFeatureSelector, (state) =>
  state.cartItems.reduce((acc, item) => acc + item.count, 0)
);
