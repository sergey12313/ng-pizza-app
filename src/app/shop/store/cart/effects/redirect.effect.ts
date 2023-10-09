import {inject} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {exhaustMap, of} from 'rxjs';
import {cartCheckoutAction, cartClearAction} from '../actions/cart.action';

export const redirectEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(cartCheckoutAction),
      exhaustMap(() => {
        router.navigate(['shop', 'success']);

        return of(cartClearAction());
      })
    );
  },
  {functional: true}
);
