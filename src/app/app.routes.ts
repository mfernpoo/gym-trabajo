import { Routes } from '@angular/router';
import {SigninComponent} from "./signin/signin.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {ExplorerComponent} from "./explorer/explorer.component";
import {ShopComponent} from "./shop/shop.component";
import {MessageComponent} from "./message/message.component";
import {WellnessComponent} from "./wellness/wellness.component";

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'home', component: HomeComponent },
  { path: 'explorer', component: ExplorerComponent },
  { path: 'shopping', component: ShopComponent },
  { path: 'messages', component: MessageComponent },
  { path: 'wellness', component: WellnessComponent },

];
