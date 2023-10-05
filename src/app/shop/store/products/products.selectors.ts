import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductsStateInterface} from '../products/products-state.interface';

export const productsFeatureSelector =
  createFeatureSelector<ProductsStateInterface>('products');

export const productsIsLoadingSelector = createSelector(
  productsFeatureSelector,
  (state) => state.isLoading
);

export const productsDataSelector = createSelector(
  productsFeatureSelector,
  (state) => state.data
);

export const productsErrorSelector = createSelector(
  productsFeatureSelector,
  (state) => state.error
);
