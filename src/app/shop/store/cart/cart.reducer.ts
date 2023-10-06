import {createReducer, on} from '@ngrx/store';

import {CartStateInterface} from './cart-state.interface';
import {
  addCartAction,
  getCartProductsAction,
  getCartProductsFailureAction,
  getCartProductsSuccessAction,
  hydrateCartItemsActionSuccessAction,
} from './actions/cart.action';

const initialState: CartStateInterface = {
  cartItems: [],
  cartProductItems: {
    isLoading: false,
    error: false,
    data: [],
  },
};

export const cartReducer = createReducer(
  initialState,
  on(hydrateCartItemsActionSuccessAction, (state, {items}) => ({
    ...state,
    cartItems: items,
  })),
  on(addCartAction, (state, {id}) => {
    const existed = state.cartItems.find((item) => item.id === id);
    if (!existed) {
      return {
        ...state,
        cartItems: [...state.cartItems, {id, count: 1}],
      };
    }

    return {
      ...state,
      cartItems: state.cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      }),
    };
  }),
  on(getCartProductsAction, (state) => ({
    ...state,
    cartProductItems: {
      isLoading: true,
      error: false,
      data: [],
    },
  })),
  on(getCartProductsSuccessAction, (state, {products}) => ({
    ...state,
    cartProductItems: {
      isLoading: false,
      error: false,
      data: products,
    },
  })),
  on(getCartProductsFailureAction, (state) => ({
    ...state,
    cartProductItems: {
      isLoading: false,
      error: true,
      data: [],
    },
  }))
);
