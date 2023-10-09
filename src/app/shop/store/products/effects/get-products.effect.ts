import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {map, exhaustMap, catchError} from 'rxjs/operators';

import {of} from 'rxjs';
import {ProductsService} from 'src/app/shop/services/products.service';
import {
  getProductsAction,
  getProductsFailureAction,
  getProductsSuccessAction,
} from '../actions/get-products.action';

export const getProductsEffect = createEffect(
  (actions$ = inject(Actions), productsService = inject(ProductsService)) => {
    return actions$.pipe(
      ofType(getProductsAction),

      exhaustMap(({searchTerm}) => {
        return productsService.getProducts(searchTerm).pipe(
          map((products) => getProductsSuccessAction({products})),
          catchError(() => {
            return of(getProductsFailureAction());
          })
        );
      })
    );
  },
  {functional: true}
);
