import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthService} from 'src/app/shared/services/auth.service';
import {PersistenceService} from 'src/app/shared/services/persistence.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/get-current-user.action';
import {catchError, exhaustMap, map, of} from 'rxjs';
import {environment} from 'environments/environment';

export const getCurrentUserEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persistenceService = inject(PersistenceService)
  ) => {
    return actions$.pipe(
      ofType(getCurrentUserAction),
      exhaustMap(() => {
        if (!persistenceService.get(environment.localStorageTokenKey)) {
          return of(getCurrentUserFailureAction());
        }
        return authService.getCurrentUser().pipe(
          map((currentUser) => {
            return getCurrentUserSuccessAction({currentUser});
          }),
          catchError(() => {
            return of(getCurrentUserFailureAction());
          })
        );
      })
    );
  },
  {functional: true}
);
