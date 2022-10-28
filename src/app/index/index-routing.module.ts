import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomePage } from '../pages/welcome/welcome.page';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children:[
      {
        path:'',
        loadChildren:()=> import('../pages/welcome/Welcome.module').then(m=>m.WelcomePageModule)
      },

      {
        path:'login',
        loadChildren:()=> import('../pages/login/Login.module').then(m=>m.LoginPageModule)
      },
      {
        path:'signup',
        loadChildren:()=> import('../pages/signup/Signup.module').then(m=>m.SignupPageModule)
      },

      {
        path:'welcome',
        loadChildren:()=> import('../pages/welcome/Welcome.module').then(m=>m.WelcomePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
