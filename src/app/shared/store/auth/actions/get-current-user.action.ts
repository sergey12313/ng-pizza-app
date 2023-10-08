import {createAction, props} from '@ngrx/store';
import {AuthActionTypes} from '../auth.action-types';
import {UserResponseInterface} from 'src/app/shared/types/user-response.interface';

export const getCurrentUserAction = createAction(
  AuthActionTypes.GET_CURRENT_USER
);

export const getCurrentUserSuccessAction = createAction(
  AuthActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: UserResponseInterface}>()
);

export const getCurrentUserFailureAction = createAction(
  AuthActionTypes.GET_CURRENT_USER_FAILURE
);
