import {createReducer, on} from '@ngrx/store';
import {
  getProductAction,
  getProductFailureAction,
  getProductSuccessAction,
} from './actions/get-product.action';
import {ProductStateInterface} from './product-state.interface';

const initialState: ProductStateInterface = {
  isLoading: false,
  error: false,
  data: null,
};

export const productReducer = createReducer(
  initialState,
  on(getProductAction, (state) => {
    return {
      ...initialState,
      isLoading: true,
    };
  }),
  on(getProductSuccessAction, (state, {product}) => {
    return {
      ...state,
      data: product,
      isLoading: false,
    };
  }),
  on(getProductFailureAction, (state) => {
    return {
      ...state,
      error: true,
      isLoading: false,
    };
  })
);
