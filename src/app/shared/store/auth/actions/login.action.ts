import {LoginRequestInterface} from 'src/app/shared/types/login-request.interface';
import {AuthActionTypes} from '../auth.action-types';
import {createAction, props} from '@ngrx/store';

export const loginAction = createAction(
  AuthActionTypes.LOGIN,
  props<{request: LoginRequestInterface}>()
);
export const loginSuccessAction = createAction(
  AuthActionTypes.LOGIN_SUCCESS,
  props<{token: string}>()
);

export const loginFailureAction = createAction(
  AuthActionTypes.LOGIN_FAILURE,
  props<{errors: Array<string>}>()
);
