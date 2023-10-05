import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {getProductsAction} from '../../store/products/actions/get-products.action';
import {Observable} from 'rxjs';
import {ProductsType} from '../../types/products.type';
import {
  productsDataSelector,
  productsErrorSelector,
  productsIsLoadingSelector,
} from '../../store/products/products.selectors';
import {Nullable} from 'src/app/shared/types/utils';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  isLoading$!: Observable<boolean>;
  isError$!: Observable<boolean>;
  data$!: Observable<Nullable<ProductsType>>;

  constructor(readonly store: Store) {}
  ngOnInit(): void {
    this.initializeValue();
    this.fetchData();
  }
  fetchData() {
    this.store.dispatch(getProductsAction());
  }
  initializeValue() {
    this.data$ = this.store.pipe(select(productsDataSelector));
    this.isLoading$ = this.store.pipe(select(productsIsLoadingSelector));
    this.isError$ = this.store.pipe(select(productsErrorSelector));
  }
}
