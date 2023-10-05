import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// const routes: Routes = [
//   {
//     path: '',
//     component: AuthLayoutComponent,
//     children: [
//       {path: 'login', component: LoginPageComponent},
//       {path: 'register', component: RegisterPageComponent},
//     ],
//   },
// ];

// const routes = [
//   {
//     path: '',
//     component: ShopLayoutComponent,
//     children: [
//       {path: '', component: MainPageComponent},
//       {path: 'cart', component: CartPageComponent},
//       {path: 'success', component: SuccessPageComponent},
//       {path: 'product/:id', component: ProductPageComponent},
//     ],
//   },
// ];
