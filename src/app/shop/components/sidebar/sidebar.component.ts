import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {cartCountSelector} from '../../store/cart/cart.selectors';

@Component({
  selector: 'pa-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  count$!: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValue();
  }
  initializeValue() {
    this.count$ = this.store.pipe(select(cartCountSelector));
  }
}
