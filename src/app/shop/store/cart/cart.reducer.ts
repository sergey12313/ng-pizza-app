import {createReducer, on} from '@ngrx/store';

import {CartStateInterface} from './cart-state.interface';
import {
  addCartAction,
  decrementCartAction,
  getCartProductsAction,
  getCartProductsFailureAction,
  getCartProductsSuccessAction,
  hydrateCartItemsActionSuccessAction,
  incrementCartAction,
  removeCartAction,
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
  })),
  on(incrementCartAction, (state, {id}) => {
    return {
      cartProductItems: {
        ...state.cartProductItems,
        data: state.cartProductItems.data.map((item) => {
          if (String(item.id) === id) {
            return {
              ...item,
              count: item.count + 1,
            };
          }
          return item;
        }),
      },
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
  on(decrementCartAction, (state, {id}) => {
    return {
      cartProductItems: {
        ...state.cartProductItems,
        data: state.cartProductItems.data
          .map((item) => {
            if (String(item.id) === id) {
              return {
                ...item,
                count: item.count - 1,
              };
            }
            return item;
          })
          .filter((item) => item.count > 0),
      },
      cartItems: state.cartItems
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              count: item.count - 1,
            };
          }
          return item;
        })
        .filter((item) => item.count > 0),
    };
  }),
  on(removeCartAction, (state, {id}) => ({
    cartProductItems: {
      ...state.cartProductItems,
      data: state.cartProductItems.data.filter(
        (item) => String(item.id) !== id
      ),
    },
    cartItems: state.cartItems.filter((item) => item.id !== id),
  }))
);
