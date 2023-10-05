import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {map, exhaustMap, catchError} from 'rxjs/operators';

import {of} from 'rxjs';
import {ProductsService} from 'src/app/shop/services/products.service';
import {
  getProductAction,
  getProductFailureAction,
  getProductSuccessAction,
} from '../actions/get-product.action';

export const getProductsEffect = createEffect(
  (actions$ = inject(Actions), productsService = inject(ProductsService)) => {
    return actions$.pipe(
      ofType(getProductAction),
      exhaustMap(({id}) => {
        return productsService.getProductById(id).pipe(
          map((product) => getProductSuccessAction({product})),
          catchError(() => {
            return of(getProductFailureAction());
          })
        );
      })
    );
  },
  {functional: true}
);
