import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from 'src/app/shared/services/auth.service';
import {PersistenceService} from 'src/app/shared/services/persistence.service';
import {catchError, exhaustMap, map} from 'rxjs/operators';
import {environment} from 'environments/environment';
import {of} from 'rxjs';
import {BackendErrorInterface} from 'src/app/shared/types/backend-error.interface';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';
import {HttpErrorResponse} from '@angular/common/http';

export const registerEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistenceService = inject(PersistenceService)
  ) => {
    return actions$.pipe(
      ofType(registerAction),
      exhaustMap(({request}) => {
        return authService.register(request).pipe(
          map(({access_token}) => {
            persistenceService.set(
              environment.localStorageTokenKey,
              access_token
            );
            return registerSuccessAction({token: access_token});
          }),
          catchError((errorsResponse: HttpErrorResponse) => {
            console.log(errorsResponse);
            let error!: Array<string>;
            if (!errorsResponse?.error?.message) {
              ['Неизвестная ошибка'];
            } else if (Array.isArray(errorsResponse.error.message)) {
              error = errorsResponse.error.message;
            } else {
              error = [errorsResponse.error.message];
            }
            return of(registerFailureAction({errors: error}));
          })
        );
      })
    );
  },
  {functional: true}
);
