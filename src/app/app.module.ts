import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {authReducer} from './shared/store/auth/auth.reducer';
import * as loginEffect from './shared/store/auth/effects/login.effect';
import * as registerEffect from './shared/store/auth/effects/register.effect';
import * as cleanValidationEffect from './shared/store/auth/effects/navigated.effect';
import * as getCurrentUserEffect from './shared/store/auth/effects/get-current-user.effect';
import * as logoutEffect from './shared/store/auth/effects/logout.effect';
import * as redirectEffect from './shared/store/auth/effects/redirect.effect';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store';
import {AuthInterceptor} from './shared/services/auth.interceptor';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    StoreModule.forRoot({auth: authReducer, router: routerReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([
      {...loginEffect},
      {...registerEffect},
      {...cleanValidationEffect},
      {...getCurrentUserEffect},
      {...logoutEffect},
      {...redirectEffect},
    ]),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
