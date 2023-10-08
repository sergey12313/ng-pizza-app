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
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({auth: authReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    EffectsModule.forRoot([{...loginEffect}, {...registerEffect}]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
