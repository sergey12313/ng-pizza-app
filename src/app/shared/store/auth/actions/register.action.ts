import {AuthActionTypes} from '../auth.action-types';
import {createAction, props} from '@ngrx/store';
import {RegisterRequestInterface} from 'src/app/shared/types/register-request.interface';

export const registerAction = createAction(
  AuthActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
);
export const registerSuccessAction = createAction(
  AuthActionTypes.REGISTER_SUCCESS,
  props<{token: string}>()
);

export const registerFailureAction = createAction(
  AuthActionTypes.REGISTER_FAILURE,
  props<{errors: Array<string>}>()
);
