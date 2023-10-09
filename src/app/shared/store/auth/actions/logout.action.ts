import {createAction} from '@ngrx/store';
import {AuthActionTypes} from '../auth.action-types';

export const logoutStartAction = createAction(AuthActionTypes.LOGOUT_START);
export const logoutCompleteAction = createAction(
  AuthActionTypes.LOGOUT_COMPLETE
);
