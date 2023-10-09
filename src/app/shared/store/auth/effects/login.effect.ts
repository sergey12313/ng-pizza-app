import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from 'src/app/shared/services/auth.service';
import {PersistenceService} from 'src/app/shared/services/persistence.service';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.action';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {environment} from 'environments/environment';
import {of} from 'rxjs';
import {BackendErrorInterface} from 'src/app/shared/types/backend-error.interface';
import {HttpErrorResponse} from '@angular/common/http';

export const loginEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistenceService = inject(PersistenceService)
  ) => {
    return actions$.pipe(
      ofType(loginAction),
      exhaustMap(({request}) => {
        return authService.login(request).pipe(
          map(({access_token}) => {
            persistenceService.set(
              environment.localStorageTokenKey,
              access_token
            );
            return loginSuccessAction({token: access_token});
          }),
          catchError((errorsResponse: HttpErrorResponse) => {
            let error!: Array<string>;
            if (!errorsResponse?.error?.message) {
              ['Неизвестная ошибка'];
            } else if (Array.isArray(errorsResponse.error.message)) {
              error = errorsResponse.error.message;
            } else {
              error = [errorsResponse.error.message];
            }
            return of(loginFailureAction({errors: error}));
          })
        );
      })
    );
  },
  {functional: true}
);
