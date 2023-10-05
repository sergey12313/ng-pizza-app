import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {RegisterPageComponent} from './components/register-page/register-page.component';
import {AuthLayoutComponent} from './components/auth-layout/auth-layout.component';
import {RouterModule, Routes} from '@angular/router';
import {HeadingModule} from '../shared/modules/heading/heading.module';
import {InputModule} from '../shared/modules/input/input.module';
import {ButtonModule} from '../shared/modules/button/button.module';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {path: 'login', component: LoginPageComponent},
      {path: 'register', component: RegisterPageComponent},
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    HeadingModule,
    InputModule,
    ButtonModule,
    RouterModule.forChild(routes),
  ],
})
export class AuthModule {}
