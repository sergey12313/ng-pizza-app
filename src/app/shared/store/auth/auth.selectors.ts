import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthStateInterface} from './types/auth.state';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

export const authIsSubmittedSelector = createSelector(
  authFeatureSelector,
  (state) => state.isSubmitting
);
export const authIsLoadingSelector = createSelector(
  authFeatureSelector,
  (state) => state.isLoading
);
export const authIsErrorFoundSelector = createSelector(
  authFeatureSelector,
  (state) => {
    if (state.validationErrors) {
      return state.validationErrors.length > 0;
    }
    return false;
  }
);

export const authErrorsSelector = createSelector(
  authFeatureSelector,
  (state) => state.validationErrors
);

export const userSelector = createSelector(
  authFeatureSelector,
  (state) => state.currentUser
);
