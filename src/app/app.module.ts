import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShopModule} from './shop/shop.module';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ShopModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
