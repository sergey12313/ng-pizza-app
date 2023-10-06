import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {
  map,
  exhaustMap,
  catchError,
  tap,
  take,
  switchMap,
} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {forkJoin, from, of} from 'rxjs';
import {ProductsService} from 'src/app/shop/services/products.service';
import {
  getCartProductsAction,
  getCartProductsFailureAction,
  getCartProductsSuccessAction,
} from '../actions/cart.action';
import {cartItemsSelector} from '../cart.selectors';

export const getCartProductsEffect = createEffect(
  (
    actions$ = inject(Actions),
    store = inject(Store),
    productsService = inject(ProductsService)
  ) => {
    return actions$.pipe(
      ofType(getCartProductsAction),
      exhaustMap(() => {
        return store.select(cartItemsSelector).pipe(take(1));
      }),
      switchMap((cartItems) => {
        if (cartItems.length === 0) {
          return of([]);
        }
        return forkJoin(
          cartItems.map((item) => {
            return productsService
              .getProductById(item.id)
              .pipe(map((product) => ({...product, count: item.count})));
          })
        );
      }),
      map((cartItems) => getCartProductsSuccessAction({products: cartItems})),
      catchError(() => {
        return of(getCartProductsFailureAction());
      })
    );
  },
  {functional: true}
);
