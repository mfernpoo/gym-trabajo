import { Routes } from '@angular/router';
import {SigninComponent} from "./signin/signin.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signin', component: SigninComponent }
];
