import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {exhaustMap, of} from 'rxjs';

import {ROUTER_NAVIGATION, RouterRequestAction} from '@ngrx/router-store';
import {cleanValidationErrorsAction} from '../actions/clear-validation-errors.action';

import {EMPTY} from 'rxjs';

export const navigatedEffect = createEffect(
  (actions$ = inject(Actions)) => {
    return actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      exhaustMap(({payload}: RouterRequestAction) => {
        if (payload.event.url.includes('auth/')) {
          return of(cleanValidationErrorsAction());
        } else return EMPTY;
      })
    );
  },
  {functional: true}
);
