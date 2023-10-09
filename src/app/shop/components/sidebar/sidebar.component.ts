import {Component, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable} from 'rxjs';
import {cartCountSelector} from '../../store/cart/cart.selectors';
import {
  isLoggedInSelector,
  userSelector,
} from 'src/app/shared/store/auth/auth.selectors';
import {Nullable} from 'src/app/shared/types/utils';
import {UserResponseInterface} from 'src/app/shared/types/user-response.interface';

@Component({
  selector: 'pa-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  count$!: Observable<number>;
  isLoggedIn$!: Observable<boolean>;
  user$!: Observable<Nullable<UserResponseInterface>>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValue();
  }
  initializeValue() {
    this.count$ = this.store.pipe(select(cartCountSelector));
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.user$ = this.store.pipe(select(userSelector));
  }
}
