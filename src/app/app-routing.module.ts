import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [];

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
