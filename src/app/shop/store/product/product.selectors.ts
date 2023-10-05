import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductStateInterface} from './product-state.interface';

export const productFeatureSelector =
  createFeatureSelector<ProductStateInterface>('product');

export const productIsLoadingSelector = createSelector(
  productFeatureSelector,
  (state) => state.isLoading
);

export const productDataSelector = createSelector(
  productFeatureSelector,
  (state) => state.data
);

export const productErrorSelector = createSelector(
  productFeatureSelector,
  (state) => state.error
);
