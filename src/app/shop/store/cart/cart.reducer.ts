import {createReducer, on} from '@ngrx/store';

import {CartStateInterface} from './cart-state.interface';
import {addCartAction} from './actions/cart.action';

const initialState: CartStateInterface = {
  cartItems: [],
};

export const cartReducer = createReducer(
  initialState,
  on(addCartAction, (state, {id}) => {
    const existed = state.cartItems.find((item) => item.id === id);
    if (!existed) {
      return {
        ...state,
        cartItems: [...state.cartItems, {id, count: 1}],
      };
    }

    return {
      ...initialState,
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
  })
);
