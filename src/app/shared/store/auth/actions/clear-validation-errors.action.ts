import {createAction} from '@ngrx/store';
import {AuthActionTypes} from '../auth.action-types';

export const cleanValidationErrorsAction = createAction(
  AuthActionTypes.AUTH_CLEAR_VALIDATION_ERRORS
);
