import {createReducer, on} from '@ngrx/store';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from './actions/login.action';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action';
import {AuthStateInterface} from './types/auth.state';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from './actions/get-current-user.action';
import {cleanValidationErrorsAction} from './actions/clear-validation-errors.action';
import {logoutCompleteAction} from './actions/logout.action';

const initialState: AuthStateInterface = {
  isLoading: false,
  isSubmitting: false,
  token: null,
  currentUser: null,
  isLoggedIn: false,
  validationErrors: null,
};

export const authReducer = createReducer(
  initialState,
  on(cleanValidationErrorsAction, (state) => ({
    ...state,
    validationErrors: null,
  })),
  on(logoutCompleteAction, (state) => ({
    ...state,
    isLoggedIn: false,
    token: null,
    currentUser: null,
  })),
  on(loginAction, registerAction, (state) => ({
    ...state,
    isSubmitting: true,
    validationErrors: null,
  })),
  on(registerFailureAction, loginFailureAction, (state, {errors}) => {
    return {
      ...state,
      validationErrors: errors,
      isLoggedIn: false,
      isSubmitting: false,
    };
  }),
  on(registerSuccessAction, loginSuccessAction, (state, {token}) => {
    return {
      ...state,
      token: token,
      isSubmitting: false,
    };
  }),
  on(getCurrentUserAction, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(getCurrentUserSuccessAction, (state, {currentUser}) => {
    return {
      ...state,
      currentUser,
      isLoggedIn: true,
      isLoading: false,
    };
  }),
  on(getCurrentUserFailureAction, (state) => {
    return {
      ...state,
      isLoggedIn: false,
      isLoading: false,
      currentUser: null,
    };
  })
);
