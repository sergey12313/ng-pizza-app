import {inject} from '@angular/core';
import {Actions, createEffect} from '@ngrx/effects';
import {ActivatedRoute, Router} from '@angular/router';

export const redirectEffect = createEffect(
  ((actions$ = inject(Actions)),
  (router = inject(Router)),
  (route = inject(ActivatedRoute)))
);
