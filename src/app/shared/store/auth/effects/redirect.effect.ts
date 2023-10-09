import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {loginSuccessAction} from '../actions/login.action';

import {ActivatedRoute, Router} from '@angular/router';
import {registerSuccessAction} from '../actions/register.action';
import {exhaustMap} from 'rxjs/operators';
import {getCurrentUserAction} from '../actions/get-current-user.action';
import {of} from 'rxjs';

export const redirectEffect = createEffect(
  (
    actions$ = inject(Actions),
    router = inject(Router),
    route = inject(ActivatedRoute)
  ) => {
    return actions$.pipe(
      ofType(registerSuccessAction, loginSuccessAction),
      exhaustMap(() => {
        if (route.snapshot.queryParamMap.get('redirectTo') === 'cart') {
          router.navigate(['/', 'shop', 'cart']);
        } else {
          router.navigate(['/']);
        }
        return of(getCurrentUserAction());
      })
    );
  },
  {functional: true}
);
