import {createReducer, on} from '@ngrx/store';
import {
  getProductsAction,
  getProductsFailureAction,
  getProductsSuccessAction,
} from './actions/get-products.action';
import {ProductsStateInterface} from './products-state.interface';

const initialState: ProductsStateInterface = {
  isLoading: false,
  error: false,
  data: null,
};

export const productsReducer = createReducer(
  initialState,
  on(getProductsAction, (state) => {
    return {
      ...initialState,
      isLoading: true,
    };
  }),
  on(getProductsSuccessAction, (state, {products}) => {
    return {
      ...state,
      data: products,
      isLoading: false,
    };
  }),
  on(getProductsFailureAction, (state) => {
    return {
      ...state,
      error: true,
      isLoading: false,
    };
  })
);
