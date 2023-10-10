import {inject} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {tap} from 'rxjs';
import {ToastrService} from 'ngx-toastr';
import {addCartAction} from '../actions/cart.action';

export const toastEffect = createEffect(
  (actions$ = inject(Actions), toastrService = inject(ToastrService)) => {
    return actions$.pipe(
      ofType(addCartAction),
      tap(() => {
        toastrService.success('Продукт добавлен в корзину');
      })
    );
  },
  {functional: true, dispatch: false}
);
