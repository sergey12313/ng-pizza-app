import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store, select} from '@ngrx/store';
import {Observable, Subscription, map} from 'rxjs';
import {cartCountSelector} from '../../store/cart/cart.selectors';
import {
  isLoggedInSelector,
  userSelector,
} from 'src/app/shared/store/auth/auth.selectors';
import {Nullable} from 'src/app/shared/types/utils';
import {UserResponseInterface} from 'src/app/shared/types/user-response.interface';
import {logoutStartAction} from 'src/app/shared/store/auth/actions/logout.action';

@Component({
  selector: 'pa-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  count$!: Observable<number>;
  isLoggedIn$!: Observable<boolean>;
  user!: Nullable<UserResponseInterface>;

  userSubscription: Nullable<Subscription> = null;

  constructor(private store: Store) {}
  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  logout() {
    this.store.dispatch(logoutStartAction());
  }
  ngOnInit(): void {
    this.initializeValue();
    this.initializeListeners();
  }
  initializeValue() {
    this.count$ = this.store.pipe(select(cartCountSelector));
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }
  initializeListeners() {
    this.userSubscription = this.store
      .pipe(select(userSelector))
      .subscribe((user) => {
        this.user = user;
      });
  }
}
