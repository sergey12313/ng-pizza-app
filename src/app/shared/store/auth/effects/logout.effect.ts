import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {exhaustMap, of} from 'rxjs';

import {ROUTER_NAVIGATION, RouterRequestAction} from '@ngrx/router-store';
import {cleanValidationErrorsAction} from '../actions/clear-validation-errors.action';

import {EMPTY} from 'rxjs';
import {loginAction} from '../actions/login.action';
import {
  logoutCompleteAction,
  logoutStartAction,
} from '../actions/logout.action';
import {PersistenceService} from 'src/app/shared/services/persistence.service';
import {environment} from 'environments/environment';

export const logoutEffect = createEffect(
  (
    actions$ = inject(Actions),
    persistenceService = inject(PersistenceService)
  ) => {
    return actions$.pipe(
      ofType(logoutStartAction),
      exhaustMap(() => {
        persistenceService.remove(environment.localStorageTokenKey);
        return of(logoutCompleteAction());
      })
    );
  },
  {functional: true}
);
