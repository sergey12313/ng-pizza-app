import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {ProductInterface} from 'src/app/shared/types/product.interface';
import {Nullable} from 'src/app/shared/types/utils';
import {getProductAction} from '../../store/product/actions/get-product.action';
import {Store, select} from '@ngrx/store';
import {
  productErrorSelector,
  productIsLoadingSelector,
  productDataSelector,
} from '../../store/product/product.selectors';

@Component({
  selector: 'pa-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  isLoading$!: Observable<boolean>;
  isError$!: Observable<boolean>;
  data!: Nullable<ProductInterface>;
  id!: string;
  dataSubscription: Nullable<Subscription> = null;

  constructor(
    private route: ActivatedRoute,
    readonly store: Store,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
    this.initializeListeners();
  }
  goBack() {
    this.router.navigate(['..']);
  }
  initializeValues() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    this.isLoading$ = this.store.pipe(select(productIsLoadingSelector));
    this.isError$ = this.store.pipe(select(productErrorSelector));
  }
  fetchData() {
    this.store.dispatch(getProductAction({id: this.id}));
  }

  initializeListeners() {
    this.dataSubscription = this.store
      .pipe(select(productDataSelector))
      .subscribe((data) => {
        this.data = data;
      });
  }
}
