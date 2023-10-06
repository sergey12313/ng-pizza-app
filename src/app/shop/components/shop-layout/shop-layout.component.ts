import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {hydrateCartItemsAction} from '../../store/cart/actions/cart.action';

@Component({
  selector: 'app-shop-layout',
  templateUrl: './shop-layout.component.html',
  styleUrls: ['./shop-layout.component.scss'],
})
export class ShopLayoutComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.dispatch(hydrateCartItemsAction());
  }
}
