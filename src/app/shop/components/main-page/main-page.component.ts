import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {getProductsAction} from '../../store/products/actions/get-products.action';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  tap,
} from 'rxjs';
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
export class MainPageComponent implements OnInit, AfterViewInit {
  isLoading$!: Observable<boolean>;
  isError$!: Observable<boolean>;
  data$!: Observable<Nullable<ProductsType>>;

  @ViewChild('searchInput') input!: ElementRef;

  constructor(readonly store: Store) {}
  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(1000),
        distinctUntilChanged(),
        tap(() => {
          this.fetchData(this.input.nativeElement.value);
        })
      )
      .subscribe();
  }
  ngOnInit(): void {
    this.initializeValue();
    this.fetchData('');
  }
  fetchData(searchTerm: string) {
    this.store.dispatch(getProductsAction({searchTerm}));
  }
  initializeValue() {
    this.data$ = this.store.pipe(select(productsDataSelector));
    this.isLoading$ = this.store.pipe(select(productsIsLoadingSelector));
    this.isError$ = this.store.pipe(select(productsErrorSelector));
  }
}
