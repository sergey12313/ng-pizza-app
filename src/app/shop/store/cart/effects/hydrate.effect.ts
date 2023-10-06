import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {
  exhaustMap,
  catchError,
  switchMap,
  distinctUntilChanged,
  tap,
} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';

import {
  hydrateCartItemsAction,
  hydrateCartItemsActionFailureAction,
  hydrateCartItemsActionSuccessAction,
} from '../actions/cart.action';

import {PersistenceService} from 'src/app/shared/services/persistence.service';
import {cartItemsSelector} from '../cart.selectors';

export const getCartProductsEffect = createEffect(
  (
    actions$ = inject(Actions),
    store = inject(Store),
    persistenceService = inject(PersistenceService)
  ) => {
    return actions$.pipe(
      ofType(hydrateCartItemsAction),
      exhaustMap(() => {
        const cartItems = persistenceService.get('cart');
        if (!cartItems) {
          return of(hydrateCartItemsActionFailureAction());
        }
        return of(hydrateCartItemsActionSuccessAction({items: cartItems}));
      }),
      catchError(() => {
        return of(hydrateCartItemsActionFailureAction());
      })
    );
  },
  {functional: true}
);

export const hydrationEffect = createEffect(
  (
    actions$ = inject(Actions),
    store = inject(Store),
    persistenceService = inject(PersistenceService)
  ) =>
    actions$.pipe(
      ofType(
        hydrateCartItemsActionSuccessAction,
        hydrateCartItemsActionFailureAction
      ),
      switchMap(() => store.select(cartItemsSelector)),
      distinctUntilChanged(),
      tap((state) => {
        persistenceService.set('cart', state);
      })
    ),
  {dispatch: false, functional: true}
);
